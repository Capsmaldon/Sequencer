//Global setup
var globalPanel = document.createElement("div");
globalPanel.className = "ControlPanel-Global";

var bpmSliderContainer = document.createElement("div");
var bpmSliderTagDisplayBox = document.createElement("div");
var bpmSliderTag = document.createElement("div");
var bpmSliderDisplay = document.createElement("div");
var bpmSlider = document.createElement("INPUT");

bpmSliderContainer.className = "RangeSliderContainer";
bpmSliderTagDisplayBox.className = "RangeSliderTag&DisplayBox";
bpmSliderTag.className = "RangeSliderTag";
bpmSliderDisplay.className = "RangeSliderDisplay";
bpmSliderTag.className = "RangeSliderTag";
bpmSlider.className = "RangeSlider";
bpmSlider.tag = SliderEnum.BPM;
bpmSlider.type = "range";
bpmSliderTag.innerHTML = "BPM";
bpmSliderDisplay.innerHTML = 40;
bpmSlider.max = 460;
bpmSlider.value = 0;

bpmSlider.addEventListener("input", transportSliderControl);

bpmSliderTagDisplayBox.appendChild(bpmSliderDisplay);
bpmSliderTagDisplayBox.appendChild(bpmSliderTag);
bpmSliderContainer.appendChild(bpmSliderTagDisplayBox);
bpmSliderContainer.appendChild(bpmSlider);
globalPanel.appendChild(bpmSliderContainer);

function transportSliderControl(event)
{
    var bpm = parseInt(event.target.value) + 40;
    ms = 60000 / bpm;
    bpmSliderDisplay.innerHTML = bpm;
}
