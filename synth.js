var synthPanel = [];
var synth = [];

for(var i = 0; i < numOfRows; ++i)
{
    synth.push(new Tone.FMSynth());
    synth[i].mute = true;
    synth[i].toMaster();
    synth[i].modulationEnvelope.attack = 0.01;
}

var synthPanelContainer = document.createElement("div");
synthPanelContainer.className = "PanelRow-Horizontal";

synthPanel.push(document.createElement("div"));
synthPanel[0].className = "ControlPanel-Synth";

synthPanel.push(document.createElement("div"));
synthPanel[1].className = "ControlPanel-Synth";

for (var synthPanelNum = 0; synthPanelNum < 2; ++synthPanelNum)
{
    for(var i = 0; i < 3; ++i)
    {
        sliderContainers.push(document.createElement("div"));
        sliderTagDisplayBox.push(document.createElement("div"));
        sliderTag.push(document.createElement("div"));
        sliderDisplay.push(document.createElement("div"));
        sliders.push(document.createElement("INPUT"));
        
        var sliderIndex = sliders.length-1;
        sliderContainers[sliderIndex].className = "RangeSliderContainer";
        sliderTagDisplayBox[sliderIndex].className = "RangeSliderTag&DisplayBox";
        sliderTag[sliderIndex].className = "RangeSliderTag";
        sliders[sliderIndex].className = "RangeSlider";
        sliderDisplay[sliderIndex].className = "RangeSliderDisplay";
        sliderDisplay[sliderIndex].innerHTML = 0;
        sliders[sliderIndex].type = "range";
        sliders[sliderIndex].tag = sliderIndex;
        sliders[sliderIndex].value = 0;
        sliders[sliderIndex].max = 127;
        
        sliders[sliderIndex].addEventListener("input", synthSliderControl);
        
        sliderTagDisplayBox[sliderIndex].appendChild(sliderDisplay[sliderIndex])
        sliderTagDisplayBox[sliderIndex].appendChild(sliderTag[sliderIndex]);
        sliderContainers[sliderIndex].appendChild(sliderTagDisplayBox[sliderIndex]);
        sliderContainers[sliderIndex].appendChild(sliders[sliderIndex]);
        synthPanel[synthPanelNum].appendChild(sliderContainers[sliderIndex]);
    }
}


sliderTag[4].innerHTML = "Attack";
sliderTag[5].innerHTML = "Decay";
sliderTag[6].innerHTML = "Sustain";

sliderTag[7].innerHTML = "Attack";
sliderTag[8].innerHTML = "Decay";
sliderTag[9].innerHTML = "Sustain";

synthPanelContainer.appendChild(synthPanel[0]);
synthPanelContainer.appendChild(synthPanel[1]);

function synthSliderControl(event)
{
    
    switch(event.target.tag)
    {
        case SliderDisplayEnum.FM_ENV_ATTACK:
            sliderDisplay[SliderDisplayEnum.FM_ENV_ATTACK].innerHTML = event.target.value;
            for (var i = 0; i < numOfRows; ++i)
            {
                synth[i].envelope.attack = event.target.value/127;
            }
            break;
        case SliderDisplayEnum.FM_ENV_DECAY:
            sliderDisplay[SliderDisplayEnum.FM_ENV_DECAY].innerHTML = event.target.value;
            for (var i = 0; i < numOfRows; ++i)
            {
                synth[i].envelope.decay = event.target.value/127;
            }
            break;
        case SliderDisplayEnum.FM_ENV_SUSTAIN:
            sliderDisplay[SliderDisplayEnum.FM_ENV_SUSTAIN].innerHTML = event.target.value;
            for (var i = 0; i < numOfRows; ++i)
            {
                synth[i].envelope.sustain = event.target.value/127;
            }
            break;
        case SliderDisplayEnum.FM_MODENV_ATTACK:
            sliderDisplay[SliderDisplayEnum.FM_MODENV_ATTACK].innerHTML = event.target.value;
            for (var i = 0; i < numOfRows; ++i)
            {
                synth[i].modulationEnvelope.attack = event.target.value/127;
            }
            break;
        case SliderDisplayEnum.FM_MODENV_DECAY:
            sliderDisplay[SliderDisplayEnum.FM_MODENV_DECAY].innerHTML = event.target.value;
            for (var i = 0; i < numOfRows; ++i)
            {
                synth[i].modulationEnvelope.decay = event.target.value/127;
            }
            break;
        case SliderDisplayEnum.FM_MODENV_SUSTAIN:
            sliderDisplay[SliderDisplayEnum.FM_MODENV_SUSTAIN].innerHTML = event.target.value;
            for (var i = 0; i < numOfRows; ++i)
            {
                synth[i].modulationEnvelope.sustain = event.target.value/127;
            }
            break;
    }
}

