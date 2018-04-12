/*Currently the synth's not playing - I just switched around default values - most notably the sliders that display on startup in stepControl.js*/

function triggerSynths(tick)
{
    var drumStack = [];
    var drumsEnabled = 0;
    var drumStackCounter = 0;
    
    for(var i = 0; i < numOfRows; ++i)
    {
        stepNum = tick+(i*stepsPerRow);
        randomInt = parseInt(Math.random() * 100);
        
        if(step[stepNum].instrument == 0) // FM synthesiser
        {
            if(step[stepNum].state == 1 && step[stepNum].synthChance > randomInt && step[stepNum].synthVelocity > 0)
            {
                var note  = parseInt(step[stepNum].synthPitch) + (parseInt(step[stepNum].synthOctave) * 12);
                console.log(note);
                var velocity = (Math.pow((127 - step[stepNum].synthVelocity), 1.2)*0.1) * -1;
                var frequency = Tone.Frequency().midiToFrequency(note);
                synth[i].volume.value = velocity;
                synth[i].setNote(note);
                synth[i].triggerAttackRelease(frequency);
            }
            else
            {
                synth[i].triggerRelease();
            }
        }
        else if(step[stepNum].instrument == 1) // Drums
        {
            if(step[stepNum].state == 1)
            {
                drumStack.push({});
                drumStack[drumStackCounter].type = step[stepNum].drumType;
                drumStack[drumStackCounter].chance = step[stepNum].drumChance;
                drumStack[drumStackCounter].randomInt = randomInt;
                drumStack[drumStackCounter].velocity = step[stepNum].drumVelocity;
                
                ++drumStackCounter
                drumsEnabled = 1;
            }
        }
    }
    
    //This system plays all the drums simultaneously once duplicates have been filtered out
    if (drumsEnabled == 1)
    {
        drumStack.sort(function(a, b){return a.type+b.type});
        var thinnedDrumStack = removeDuplicates(drumStack);
        
        for(var i = 0; i < thinnedDrumStack.length; ++i)
        {
            //It's set like this because .volume is done in decibels
            if (thinnedDrumStack[i].velocity > 0 &&
                thinnedDrumStack[i].chance > thinnedDrumStack[i].randomInt)
            {
                // Power 1.2 maps the velocity sightly better
                var velocity = (Math.pow((127 - thinnedDrumStack[i].velocity), 1.2)*0.1) * -1;
                sampler[thinnedDrumStack[i].type].volume.value = velocity;
                sampler[thinnedDrumStack[i].type].start();
                console.log(velocity);
            }
        }
        drumsEnabled = 0;
    }
}

function removeDuplicates(array)
{
    
    var i = 0;
    while(i < array.length)
    {
        if(i+1 > array.length-1)
        {
            break;
        }
        else if(array[i].type === array[i+1].type)
        {
            array.splice(i, 1);
        }
        else
        {
            // Splice removes an element, so only increment if nothing is spliced
            ++i;
        }
    }
    return array;
}
