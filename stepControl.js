panel.push(document.createElement("div"));
panel[2].className = "PanelColumn-Horizontal";

//Local setup
var localPanel = document.createElement("div");
localPanel.className = "ControlPanel-Local";

for(var i = 0; i < 4; ++i)
{
    
    sliderContainers.push(document.createElement("div"));
    sliderTagDisplayBox.push(document.createElement("div"));
    sliderTag.push(document.createElement("div"));
    sliderDisplay.push(document.createElement("div"));
    sliders.push(document.createElement("INPUT"));
    
    var sliderIndex = sliders.length - 1;
    
    sliderContainers[sliderIndex].className = "RangeSliderContainer";
    sliderTagDisplayBox[sliderIndex].className = "RangeSliderTag&DisplayBox";
    sliderTag[sliderIndex].className = "RangeSliderTag";
    sliderDisplay[sliderIndex].className = "RangeSliderDisplay";
    
    sliders[i].className = "RangeSlider";
    sliders[i].type = "range";
    sliders[i].tag = sliderIndex;
    sliders[i].value = 0;
    sliders[i].max = 127;
    
    sliders[i].addEventListener("input", stepSliderControl); 
    
    sliderTagDisplayBox[sliderIndex].appendChild(sliderDisplay[sliderIndex]);
    sliderTagDisplayBox[sliderIndex].appendChild(sliderTag[sliderIndex]);
    sliderContainers[sliderIndex].appendChild(sliderTagDisplayBox[sliderIndex]);
    sliderContainers[sliderIndex].appendChild(sliders[sliderIndex]);
    localPanel.appendChild(sliderContainers[sliderIndex]);
}

/*Set the defaults for each slider*/
sliderTag[0].innerHTML = "Velocity";
sliderDisplay[0].innerHTML = step[0].drumVelocity;
sliders[0].max = 127;
sliders[0].value = step[0].drumVelocity;
sliders[0].tag = SliderEnum.DRUM_VELOCITY;

sliderTag[1].innerHTML = "Type";
sliderDisplay[1].innerHTML = DrumName[step[0].drumType];
sliders[1].max = 3;
sliders[1].value = step[0].drumType;
sliders[1].tag = SliderEnum.DRUM_TYPE;

sliderTag[2].innerHTML = "Octave";
sliderDisplay[2].innerHTML = step[0].synthOctave;
sliders[2].max = 11;
sliderContainers[2].style.visibility = "hidden";

sliderTag[3].innerHTML = "Chance";
sliderDisplay[3].innerHTML = step[0].drumChance;
sliders[3].max = 100;
sliders[3].value = step[0].drumChance;
sliders[3].tag = SliderEnum.DRUM_CHANCE;

//Slider change
function stepSliderControl(event)
{
    switch(event.target.tag)
    {
        case SliderEnum.SYNTH_VELOCITY:
            step[stepSelected].synthVelocity = event.target.value;
            sliderDisplay[0].innerHTML = event.target.value;
            console.log("Here");
            break;
        case SliderEnum.SYNTH_PITCH:
            step[stepSelected].synthPitch = event.target.value;
            sliderDisplay[1].innerHTML = NoteName[event.target.value];
            break;
        case SliderEnum.SYNTH_OCTAVE:
            step[stepSelected].synthOctave = event.target.value;
            sliderDisplay[2].innerHTML = event.target.value;
            break;
        case SliderEnum.SYNTH_CHANCE:
            step[stepSelected].synthChance = event.target.value;
            sliderDisplay[3].innerHTML = event.target.value;
            break;
        case SliderEnum.DRUM_VELOCITY:
            step[stepSelected].drumVelocity = event.target.value;
            sliderDisplay[0].innerHTML = event.target.value;
            break;
        case SliderEnum.DRUM_TYPE:
            step[stepSelected].drumType = event.target.value;
            sliderDisplay[1].innerHTML = DrumName[event.target.value];
            break;
        case SliderEnum.DRUM_CHANCE:
            step[stepSelected].drumChance = event.target.value;
            sliderDisplay[3].innerHTML = event.target.value;
            break;
    }
}
