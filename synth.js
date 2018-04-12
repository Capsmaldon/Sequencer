var synthPanel = [];
var synth = [];

for(var i = 0; i < numOfRows; ++i)
{
    synth.push(new Tone.FMSynth());
    synth[i].mute = true;
    synth[i].toMaster();
    synth[i].modulationEnvelope.attack = 0.01;
}

synthPanel.push(document.createElement("div"));
synthPanel[0].className = "ControlPanel-Synth";

synthPanel.push(document.createElement("div"));
synthPanel[1].className = "ControlPanel-Synth";

for (var synthPanelNum = 0; synthPanelNum < 2; ++synthPanelNum)
{
    for(var i = 0; i < 4; ++i)
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


sliderTag[4].innerHTML = "Param1";
sliderTag[5].innerHTML = "Param2";
sliderTag[6].innerHTML = "Param3";
sliderTag[7].innerHTML = "Param4";

sliderTag[8].innerHTML = "Param1";
sliderTag[9].innerHTML = "Param2";
sliderTag[10].innerHTML = "Param3";
sliderTag[11].innerHTML = "Param4";

function synthSliderControl(event)
{
 //Working on this - sliders are very disorganised
    switch(event.target.tag)
    {
        case SliderEnum.FM_ENV_ATTACK:
        sliderDisplay[SliderEnum.FM_ENV_ATTACK].innerHTML = event.target.value;
            console.log(event.target.value);
            break;
        case SliderEnum.FM_ENV_DECAY:
            break;
        case SliderEnum.FM_ENV_SUSTAIN:
            break;
        case SliderEnum.FM_ENV_RELEASE:
            break;
        case SliderEnum.FM_MODENV_ATTACK:
            break;
        case SliderEnum.FM_MODENV_DECAY:
            break;
        case SliderEnum.FM_MODENV_SUSTAIN:
            break;
        case SliderEnum.FM_MODENV_RELEASE:
            break;
    }
}



