using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class ChronometerHandler : MonoBehaviour
{
    [SerializeField]
    private TextMeshProUGUI timerTextMesh;

    public float time { get; private set; } = 0F;

    private bool isTimerOn = true;

    public void StopTimer()
    {
        isTimerOn = false;
    }

    void Update()
    {
        if (isTimerOn)
        {
            time += Time.deltaTime;
            timerTextMesh.text = FormatTime(time);
        }
    }

    private string FormatTime(float time)
    {
        string timeStr = time > 60 ? "" : "00:";

        if (time > 60)
        {
            int minutes = (int)time / 60;
            timeStr += minutes.ToString("00") + ":";
        }

        int seconds = (int)time % 60;
        int milliseconds = (int)(time * 100) % 100;

        timeStr += seconds.ToString("00") + ":" + milliseconds.ToString("00");

        return timeStr;
    }
}
