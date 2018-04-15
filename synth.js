/*
 Panel that controls the sound of the synth - currently there are only attack, decay and sustain enabled
 */

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

/*
 Did originally contain another panel to control the
 FM modulation envelope, but it was too subtle and
 removed for simplicity - commented out incase
 of later expansion
 */

//synthPanel.push(document.createElement("div"));
//synthPanel[1].className = "ControlPanel-Synth";

//Create all the visual elements for the synth sliders and set defaults for each
for (var synthPanelNum = 0; synthPanelNum < 1; ++synthPanelNum)
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
        sliderDisplay[sliderIndex].innerHTML = 1;
        sliders[sliderIndex].type = "range";
        sliders[sliderIndex].tag = sliderIndex;
        sliders[sliderIndex].value = 1;
        sliders[sliderIndex].min = 1;
        sliders[sliderIndex].max = 100;
        
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

//sliderTag[7].innerHTML = "Attack";
//sliderTag[8].innerHTML = "Decay";
//sliderTag[9].innerHTML = "Sustain";

synthPanelContainer.appendChild(synthPanel[0]);
//synthPanelContainer.appendChild(synthPanel[1]);

function synthSliderControl(event)
{
    var value = (event.target.value/4)/100;
    
    switch(event.target.tag)
    {
        case SliderDisplayEnum.FM_ENV_ATTACK:
            sliderDisplay[SliderDisplayEnum.FM_ENV_ATTACK].innerHTML = event.target.value;
            for (var i = 0; i < numOfRows; ++i)
            {
                synth[i].envelope.attack = value*2;
            }
            break;
        case SliderDisplayEnum.FM_ENV_DECAY:
            sliderDisplay[SliderDisplayEnum.FM_ENV_DECAY].innerHTML = event.target.value;
            for (var i = 0; i < numOfRows; ++i)
            {
                synth[i].envelope.decay = value;
            }
            break;
        case SliderDisplayEnum.FM_ENV_SUSTAIN:
            sliderDisplay[SliderDisplayEnum.FM_ENV_SUSTAIN].innerHTML = event.target.value;
            for (var i = 0; i < numOfRows; ++i)
            {
                synth[i].envelope.sustain = value*4;
            }
            break;
        case SliderDisplayEnum.FM_MODENV_ATTACK:
            sliderDisplay[SliderDisplayEnum.FM_MODENV_ATTACK].innerHTML = event.target.value;
            for (var i = 0; i < numOfRows; ++i)
            {
                synth[i].modulationEnvelope.attack = value;
            }
            break;
        case SliderDisplayEnum.FM_MODENV_DECAY:
            sliderDisplay[SliderDisplayEnum.FM_MODENV_DECAY].innerHTML = event.target.value;
            for (var i = 0; i < numOfRows; ++i)
            {
                synth[i].modulationEnvelope.decay = value;
            }
            break;
        case SliderDisplayEnum.FM_MODENV_SUSTAIN:
            sliderDisplay[SliderDisplayEnum.FM_MODENV_SUSTAIN].innerHTML = event.target.value;
            for (var i = 0; i < numOfRows; ++i)
            {
                synth[i].modulationEnvelope.sustain = value*4;
            }
            break;
    }
}

