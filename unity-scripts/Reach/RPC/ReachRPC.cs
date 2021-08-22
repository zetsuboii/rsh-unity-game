using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System.Web;
using System.Text;

using UnityEngine;
using UnityEngine.Networking;


public class RPCOptions
{
    public string host;
    public string port;
    public string key;
    public int timeout = 5;
    public string verify = "0";

    public RPCOptions(string host, string port, string key)
    {
        this.host = host;
        this.port = port;
        this.key = key;
    }
    // TODO: Add overloads
}

public class RPCValue
{
    public string name;
    public dynamic value;
    public RPCValue(string argName, dynamic val)
    {
        this.name = argName;
        this.value = val;
    }
}

public class RPCCallback
{
    public string name;
    public dynamic value;
    public RPCCallback(string argName, Func<dynamic, dynamic> callback)
    {
        this.name = argName;
        this.value = callback;
    }

    public RPCCallback(string argName, Func<dynamic, Task<dynamic>> callback)
    {
        this.name = argName;
        this.value = callback;
    }
}

[Serializable]
public class CallbackResponse
{
    public string m;
    public string t;
    public string kid;
    public dynamic[] args;

}

public class ReachRPC
{
    private RPCOptions options;

    public ReachRPC(RPCOptions opts)
    {
        options = opts;
    }

    public async Task<UnityWebRequest> CallAsync(string path, params object[] args)
    {
        string url = "https://" + options.host + ":" + options.port + path;
        string postData = StringifyArgs(args);

        Debug.Log("POST to " + url + " with data " + postData);

        // Create the request
        UnityWebRequest request = new UnityWebRequest(url, "POST");

        // Set the cerficate to accept all certificates
        request.certificateHandler = new BypassCertificate();

        // Set headers
        request.SetRequestHeader("Content-Type", "application/json");
        request.SetRequestHeader("X-API-Key", options.key);
        request.SetRequestHeader("cache-control", "no-cache");

        if (postData.Length > 2)
        {
            byte[] bodyRaw = Encoding.UTF8.GetBytes(postData); // Turn req body into raw data

            // Set upload and download handlers
            request.uploadHandler = new UploadHandlerRaw(bodyRaw);
            request.downloadHandler = new DownloadHandlerBuffer();
        }

        var operation = request.SendWebRequest();

        // Wait for the request
        while (!operation.isDone)
            await Task.Yield();

        Debug.Log("RESPONSE: " + request.downloadHandler.text);
        return request;
    }

    public async Task Callbacks(string path, string contract, RPCValue[] values, RPCCallback[] callbacks)
    {
        string valueString = "{ ";
        for (int i = 0; i < values.Length; i++)
            valueString += "\"" + values[i].name + "\": " + values[i].value + (i == values.Length - 1 ? "" : ", ");
        valueString += " }";

        string callbackString = "{ ";
        for (int i = 0; i < callbacks.Length; i++)
            callbackString += "\"" + callbacks[i].name + "\": true" + (i == callbacks.Length - 1 ? "" : ", ");
        callbackString += " }";

        string bodyString = contract + ", " + valueString + ", " + callbackString;

        var response = await CallAsync(path, bodyString);
        CallbackResponse responseData = JsonUtility.FromJson<CallbackResponse>(response.downloadHandler.text);

        string contractId = responseData.kid;
        string backendStatus = "Kont";

        while (backendStatus == "Kont")
        {
            try
            {
                dynamic result;
                int currentFnIdx = GetIndexOfFunction(responseData.m, callbacks);
                if (currentFnIdx == -1)
                    throw new KeyNotFoundException("There is no function named " + responseData.m);
                var currentFn = callbacks[currentFnIdx].value;

                bool isAsync = currentFn is Func<dynamic, Task<dynamic>>;
                result = isAsync ? await currentFn(responseData.args) : currentFn(responseData.args);

                response = await CallAsync("/kont", "\"" + contractId + "\"", result == null ? "null" : result);

                responseData = JsonUtility.FromJson<CallbackResponse>(response.downloadHandler.text);
                backendStatus = responseData.t;
            }
            catch (Exception e)
            {
                Debug.Log("Exception while running backend: " + e.Message);
                backendStatus = "Fail";
            }
        }

        Debug.Log("Backend Status: " + backendStatus);
    }

    private string StringifyArgs(object[] args)
    {
        string data = "[";

        for (int i = 0; i < args.Length; i++)
        {
            data = String.Concat(data, args[i], i == args.Length - 1 ? "" : ", ");
        }

        data += "]";

        return data;
    }

    private int GetIndexOfFunction(string fnName, RPCCallback[] list)
    {
        for (int i = 0; i < list.Length; i++)
            if (list[i].name == fnName)
                return i;

        return -1;
    }

}

public class BypassCertificate : CertificateHandler
{
    protected override bool ValidateCertificate(byte[] certificateData)
    {
        //Simply return true no matter what
        return true;
    }
}
