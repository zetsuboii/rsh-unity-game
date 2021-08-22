using System;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.UI;
using Platformer.UI;

public class ReachController : MonoBehaviour
{
    [SerializeField]
    private GameConfig config;

    private Alice alice;
    private Bob bob;
    private MainUIController uiController;

    private async Task<string> GetAccount()
    {
        try
        {
            ReachRPC rpc = config.rpc;

            var balanceRequest = await rpc.CallAsync("/stdlib/parseCurrency", 10);
            string startingBalance = balanceRequest.downloadHandler.text;

            var accountRequest = await rpc.CallAsync("/stdlib/newTestAccount", startingBalance);
            string account = accountRequest.downloadHandler.text;

            return account;
        }
        catch (Exception e)
        {
            Debug.LogError("Problem with account creation + " + e.Message);
            return null;
        }
    }

    private async Task<string> DeployContract(string account)
    {
        try
        {
            ReachRPC rpc = config.rpc;

            var contractRequest = await rpc.CallAsync("/acc/deploy", account);
            string contract = contractRequest.downloadHandler.text;

            return contract;
        }
        catch (Exception e)
        {
            Debug.LogError("Problem with deploying + " + e.Message);
            return null;
        }
    }

    private async Task<string> AttachContract(string account)
    {
        try
        {
            ReachRPC rpc = config.rpc;

            var contractRequest = await rpc.CallAsync("/acc/attach", account);
            string contract = contractRequest.downloadHandler.text;

            return contract;
        }
        catch (Exception e)
        {
            Debug.LogError("Problem with attaching + " + e.Message);
            return null;
        }
    }

    private async Task<string> GetContract()
    {
        string account = await GetAccount();
        string contract;
        ContractRole role = config.role;

        switch (role)
        {
            case ContractRole.ALICE:
                contract = await DeployContract(account);
                break;
            case ContractRole.BOB:
                contract = await AttachContract(account);
                break;
            default:
                throw new ArgumentOutOfRangeException("role", role, "Role can be either ALICE or BOB");
        }

        config.contract = contract;
        return contract;
    }

    private async void Connect()
    {
        string contract = await GetContract();

        if (config.role == ContractRole.ALICE)
            uiController.SetTextField("Info", "Waiting for Bob to accept the wager");

        // Start the game right away, actual game will start when both sides call seeStart
        await PlayGame();
    }

    private async Task PlayGame()
    {
        ReachRPC rpc = config.rpc;

        await rpc.Callbacks(
            config.role == ContractRole.ALICE ? "/backend/Alice" : "/backend/Bob",
            config.contract,
            config.role == ContractRole.ALICE ? alice.GetValueArray() : bob.GetValueArray(),
            config.role == ContractRole.ALICE ? alice.GetCallbackArray() : bob.GetCallbackArray()
        );
    }

    public void OnConnectClicked()
    {
        uiController.SetButtonActive("Start", true);
        uiController.SetButtonActive("Connect", false);

        Connect();
    }

    // Only Bob will call this functon
    public void OnStartGameClicked()
    {
        bob.CallResolve(true);
    }

    public void OnRoleSelectorChange(Dropdown dropdown)
    {
        int value = dropdown.value;
        Debug.Log("Option " + value + " selected");

        ContractRole role = value == 0 ? ContractRole.ALICE : ContractRole.BOB;
        config.SetRole(role);
    }

    void Start()
    {
        // Called at the start
        uiController = this.transform.parent.GetComponent<MainUIController>();

        alice = new Alice(uiController, config);
        bob = new Bob(uiController, config);

        Time.timeScale = 0;
    }

    void Update()
    {
        // Called every frame
    }
}