using System;
using UnityEngine;

public enum ContractRole { ALICE, BOB };

public class GameConfig : MonoBehaviour
{
    public ContractRole role { get; private set; } = ContractRole.ALICE;
    public string contract { get; set; }
    public int score { get; set; } = -1;
    public ReachRPC rpc { get; private set; }

    public void SetRole(ContractRole role)
    {
        this.role = role;
    }

    void Start()
    {
        RPCOptions opts = new RPCOptions("0.0.0.0", "3000", "opensesame");
        this.rpc = new ReachRPC(opts);
    }
}
