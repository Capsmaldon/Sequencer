//Plays all the notes corresponding to the step - indicated by the tick
//e.g. if tick is 0, it will play all of the toggled notes/drums in the the first column

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
                //Calculations necessary to communicate with ToneJS FM Synth
                var note  = parseInt(step[stepNum].synthPitch) + (parseInt(step[stepNum].synthOctave) * 12);
                console.log(note);
                var velocity = (Math.pow((100 - step[stepNum].synthVelocity), 1.2)*0.1) * -1;
                var frequency = Tone.Frequency().midiToFrequency(note);
                
                //Pass all the information to play the note
                synth[i].volume.value = velocity + parseFloat(global_Synth_Level) + parseFloat(global_Master_Level);
                synth[i].setNote(note);
                synth[i].triggerAttackRelease(frequency);
            }
            else
            {
                synth[i].triggerRelease();
            }
        }
        /*
         Drums - do not play here, these are instead added
         to a stack for simultaneous playback when everything
         has been calculated, this ensures that there is
         little to no delay between each drum type - all
         drums in the column will playback as close together
         as possible
         */
        else if(step[stepNum].instrument == 1)
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
                var velocity = (Math.pow((100 - thinnedDrumStack[i].velocity), 1.2)*0.1) * -1;
                
                sampler[thinnedDrumStack[i].type].volume.value =    velocity +
                                                                    parseFloat(global_Drum_Level) +
                                                                    parseFloat(global_Master_Level);
                sampler[thinnedDrumStack[i].type].start();
                console.log(sampler[thinnedDrumStack[i].type].volume.value);
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
