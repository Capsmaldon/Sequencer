//Step setup
var stepPanel = document.createElement("div");
stepPanel.className = "ControlPanel-Steps";

panel.push(document.createElement("div"));
panel[1].className = "PanelRow-Horizontal";

for (var y = 0; y < numOfRows; ++y)
{
    stepGroup.push(document.createElement("div"));
    stepGroup[y].className = "StepGroup";
    for (var x = 0; x < stepsPerRow; ++x)
    {
        var stepNum = x+(y*stepsPerRow);
        step.push(document.createElement("button"));
        
        /*Set the defaults for each step*/
        step[stepNum].className = "StepButton-DrumOff";
        step[stepNum].tag = x+(y*stepsPerRow);
        step[stepNum].instrument = 1;
        step[stepNum].state = 0;
        step[stepNum].synthVelocity = 58;
        step[stepNum].synthPitch = 5;
        step[stepNum].synthOctave = 5;
        step[stepNum].synthChance = 100;
        step[stepNum].drumVelocity = 58;
        step[stepNum].drumType = 0;
        step[stepNum].drumChance = 100;
        
        step[stepNum].addEventListener("click", select);
        step[stepNum].addEventListener("dblclick", toggle);
        
        stepGroup[y].appendChild(step[stepNum]);
    }
    stepPanel.appendChild(stepGroup[y]);
}

//Single click - step
var stepSelected = 0;
function select(event)
{
    if(step[stepSelected].state == 0)
    {
        if(step[stepSelected].instrument == 0)
        {
            step[stepSelected].className = "StepButton-SynthOff";
        }
        else if(step[stepSelected].instrument == 1)
        {
            step[stepSelected].className = "StepButton-DrumOff";
        }
    }
    else if(step[stepSelected].state == 1)
    {
        if(step[stepSelected].instrument == 0)
        {
            step[stepSelected].className = "StepButton-SynthOn";
        }
        else if(step[stepSelected].instrument == 1)
        {
            step[stepSelected].className = "StepButton-DrumOn";
        }
    }
    
    var newStepSelected = event.target.tag;
    step[newStepSelected].className += " StepButton-Selected";
    
    stepSelected = newStepSelected;
    
    getStepSliders(stepSelected);
}

//Double click
function toggle(event)
{
    var stepNum = event.target.tag;
    
    if(step[stepNum].state == 0)
    {
        step[stepNum].state = 1;
        
        if(step[stepNum].instrument == 0)
        {
            step[stepNum].className = "StepButton-SynthOn";
        }
        else if(step[stepNum].instrument == 1)
        {
            step[stepNum].className = "StepButton-DrumOn";
        }
    }
    else if (step[stepNum].state == 1)
    {
        step[stepNum].state = 0;
        
        if(step[stepNum].instrument == 0)
        {
            step[stepNum].className = "StepButton-SynthOff";
        }
        else if(step[stepNum].instrument == 1)
        {
            step[stepNum].className = "StepButton-DrumOff";
        }
    }
}

function getStepSliders(stepSelected)
{
        if(step[stepSelected].instrument == 0)
        {
            sliderTag[0].innerHTML = "Velocity";
            sliderDisplay[0].innerHTML = step[stepSelected].synthVelocity;
            sliders[0].max = 127;
            sliders[0].value = step[stepSelected].synthVelocity;
            sliders[0].tag = SliderEnum.SYNTH_VELOCITY;
            
            sliderTag[1].innerHTML = "Pitch";
            sliderDisplay[1].innerHTML = NoteName[step[stepSelected].synthPitch];
            sliders[1].max = 11;
            sliders[1].value = step[stepSelected].synthPitch;
            sliders[1].tag = SliderEnum.SYNTH_PITCH;
            
            sliderContainers[2].style.visibility = "visible";
            sliderDisplay[2].innerHTML = step[stepSelected].synthOctave;
            sliders[2].max = 11;
            sliders[2].value = step[stepSelected].synthOctave;
            sliders[2].tag = SliderEnum.SYNTH_OCTAVE;
            
            sliderTag[3].innerHTML = "Chance";
            sliderDisplay[3].innerHTML = step[stepSelected].synthChance;
            sliders[3].max = 100;
            sliders[3].value = step[stepSelected].synthChance;
            sliders[3].tag = SliderEnum.SYNTH_CHANCE;
            
        }
        else if(step[stepSelected].instrument == 1)
        {
            sliderTag[0].innerHTML = "Velocity";
            sliderDisplay[0].innerHTML = step[stepSelected].drumVelocity;
            sliders[0].max = 127;
            sliders[0].value = step[stepSelected].drumVelocity;
            sliders[0].tag = SliderEnum.DRUM_VELOCITY;
            
            sliderTag[1].innerHTML = "Type";
            sliderDisplay[1].innerHTML = DrumName[step[stepSelected].drumType];
            sliders[1].max = 3;
            sliders[1].value = step[stepSelected].drumType;
            sliders[1].tag = SliderEnum.DRUM_TYPE;
            
            sliderContainers[2].style.visibility = "hidden";
            
            sliderTag[3].innerHTML = "Chance";
            sliderDisplay[3].innerHTML = step[stepSelected].drumChance;
            sliders[3].max = 100;
            sliders[3].value = step[stepSelected].drumChance;
            sliders[3].tag = SliderEnum.DRUM_CHANCE;
        }
}
