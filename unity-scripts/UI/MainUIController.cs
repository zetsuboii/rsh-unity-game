using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

namespace Platformer.UI
{
    /// <summary>
    /// A simple controller for switching between UI panels.
    /// </summary>
    public class MainUIController : MonoBehaviour
    {
        public GameObject[] panels;
        public Button[] buttons;
        public TextMeshProUGUI[] textFields;

        public void SetActivePanel(int index)
        {
            for (var i = 0; i < panels.Length; i++)
            {
                var active = i == index;
                var g = panels[i];
                if (g.activeSelf != active) g.SetActive(active);
            }
        }

        public void SetButtonText(string button, string txt)
        {
            switch (button)
            {
                case "Start":
                    buttons[0].transform.GetChild(0).GetComponent<Text>().text = txt;
                    break;
                default:
                    return;
            }
        }

        public void SetButtonActive(string button, bool active)
        {
            switch (button)
            {
                case "Start":
                    buttons[0].gameObject.SetActive(active);
                    break;
                case "Connect":
                    buttons[1].gameObject.SetActive(active);
                    break;
                default:
                    return;
            }
        }

        public void SetTextField(string field, string txt)
        {
            switch (field)
            {
                case "Info":
                    textFields[0].text = txt;
                    break;
                default:
                    return;
            }
        }

        public void SetTextActive(string field, bool active)
        {
            switch (field)
            {
                case "Info":
                    textFields[0].gameObject.SetActive(active);
                    break;
                default:
                    return;
            }
        }

        void OnEnable()
        {
            SetActivePanel(0);
        }
    }
}