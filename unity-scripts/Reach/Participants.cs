using System;
using System.Threading.Tasks;
using UnityEngine;
using Platformer.UI;

public class Alice
{
    private Action<object> resolver = null;
    public void CallResolve(object arg)
    {
        resolver(arg);
    }

    private MainUIController uiController;
    private GameConfig config;

    public Alice(MainUIController uiController, GameConfig config)
    {
        this.uiController = uiController;
        this.config = config;
    }

    public RPCValue[] GetValueArray()
    {
        return new RPCValue[] {
            // TODO: Get from user
            new RPCValue("wager", 1),
        };
    }

    public RPCCallback[] GetCallbackArray()
    {
        return new RPCCallback[] {
            new RPCCallback("seeResult", seeResult),
            new RPCCallback("seeStart", seeStart),
            new RPCCallback("submitTime", submitTime),
        };
    }

    private dynamic seeResult(dynamic val)
    {
        Debug.Log("Result is ", val);

        // TODO: Show result
        return null;
    }

    private dynamic seeStart(dynamic val)
    {
        // Hide the menu, show the timer
        uiController.SetActivePanel(1);

        // Continue game
        Time.timeScale = 1;

        return null;
    }

    private async Task<dynamic> submitTime(dynamic val)
    {
        if (config.score != -1)
            return config.score;

        var timeTask = new TaskCompletionSource<int>();
        resolver = (object obj) =>
        {
            timeTask.SetResult((int)obj);
        };

        Debug.Log("Waiting for player");
        var result = await timeTask.Task;
        Debug.Log("Result: " + result);

        resolver = null;
        return result;
    }
}

public class Bob
{
    private Action<object> resolver = null;
    public void CallResolve(object arg)
    {
        resolver(arg);
    }
    private MainUIController uiController;

    private GameConfig config;

    public Bob(MainUIController uiController, GameConfig config)
    {
        this.uiController = uiController;
        this.config = config;
    }

    public RPCValue[] GetValueArray()
    {
        return new RPCValue[0];
    }

    public RPCCallback[] GetCallbackArray()
    {
        return new RPCCallback[] {
            new RPCCallback("seeResult", seeResult),
            new RPCCallback("seeStart", seeStart),
            new RPCCallback("submitTime", submitTime),
            new RPCCallback("acceptWager", acceptWager)
        };
    }

    private dynamic seeResult(dynamic val)
    {
        Debug.Log("Result is ", val);

        // TODO: Show result
        return null;
    }

    private dynamic seeStart(dynamic val)
    {
        // Hide the menu, show the timer
        uiController.SetActivePanel(1);

        // Continue game
        Time.timeScale = 1;

        return null;
    }

    private async Task<dynamic> submitTime(dynamic val)
    {
        if (config.score != -1)
            return config.score;

        var timeTask = new TaskCompletionSource<int>();
        resolver = (object obj) =>
        {
            timeTask.SetResult((int)obj);
        };

        Debug.Log("Waiting for player");
        var result = await timeTask.Task;
        Debug.Log("Result: " + result);

        resolver = null;
        return result;
    }

    private async Task acceptWager(dynamic val)
    {
        ReachRPC rpc = config.rpc;

        var wagerRequest = await rpc.CallAsync("/stdlib/formatCurrency", val, 4);

        uiController.SetTextField("Info", "Wager: " + wagerRequest.downloadHandler.text);
        uiController.SetTextActive("Info", true);

        uiController.SetButtonActive("Start", true);
        uiController.SetButtonText("Start", "Accept Wager and Start");

        var acceptTask = new TaskCompletionSource<bool>();
        resolver = (object obj) =>
        {
            acceptTask.SetResult((bool)obj);
        };

        Debug.Log("Waiting for player");
        var result = await acceptTask.Task;

        resolver = null;

        if (!result)
            Application.Quit(0);
    }
}

