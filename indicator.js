//Indicator setup
var panel = [];
panel.push(document.createElement("div"));
panel[0].className = "PanelRow-Horizontal";

var indicatorPanel = document.createElement("div");
indicatorPanel.className = "ControlPanel-Steps";

var indicatorGroup = document.createElement("div");
indicatorGroup.className = "StepGroup";

var indicator = [];

for (var i = 0; i < stepsPerRow; ++i)
{
    indicator.push(document.createElement("button"));
    indicator[i].className = "StepButton-IndicatorOff";
    indicator[i].tag = i;
    indicator[i].state = 0;
    indicatorGroup.appendChild(indicator[i]);
}

indicatorPanel.appendChild(indicatorGroup);
