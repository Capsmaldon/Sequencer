/*
 The vertical strip of buttons below the stop/start
 button controls the instrument type (synth/drums)
 */

var sequenceTypePanel = document.createElement("div");
sequenceTypePanel.className = "ControlPanel-SequenceTypes";

var sequences = [];

for (var i = 0; i < numOfRows; ++i)
{
    sequences.push(document.createElement("button"));
    
    /*Set the defaults for each step*/
    sequences[i].className = "StepButton-SequenceTypeDrum";
    sequences[i].tag = i;
    sequences[i].instrument = 1;
    
    sequences[i].addEventListener("dblclick", switchType); /* Make function */
    
    sequenceTypePanel.appendChild(sequences[i]);
}

function switchType(event)
{
    row = event.target.tag;
    console.log(event.target.tag)
    if(sequences[row].instrument == 0)
    {
        synth[row].triggerRelease();
        sequences[row].className = "StepButton-SequenceTypeDrum";
        sequences[row].instrument = 1;
        
        for(var i = row*8; i < row*8 + stepsPerRow; ++i)
        {
            step[i].instrument = 1;
            
            if(step[i].state == 0)
            {
                step[i].className = "StepButton-DrumOff";
            }
            else if(step[i].state == 1)
            {
                step[i].className = "StepButton-DrumOn";
            }
        }
    }
    else if (sequences[row].instrument == 1)
    {
        sequences[row].className = "StepButton-SequenceTypeSynth";
        sequences[row].instrument = 0;
        
        for(var i = row*stepsPerRow; i < row*stepsPerRow + stepsPerRow; ++i)
        {
            step[i].instrument = 0;
            
            if(step[i].state == 0)
            {
                step[i].className = "StepButton-SynthOff";
            }
            else if(step[i].state == 1)
            {
                step[i].className = "StepButton-SynthOn";
            }
        }
    }
}
