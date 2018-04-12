

var prevTick = stepsPerRow -1;
var tick = 0;

function sequenceTick()
{
    if (sequencerState == 1)
    {
        triggerSynths(tick);
        indicator[tick].className = "StepButton-IndicatorOn";
        indicator[prevTick].className = "StepButton-IndicatorOff";
        prevTick = tick;
        ++tick;
        if(tick > stepsPerRow-1) tick = 0;
        setTimeout(sequenceTick, ms);
    }
    else if(sequencerState == 0)
    {
        console.log("Sequencer Stopped");
    }
}
