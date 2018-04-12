var startStopPanel = document.createElement("div");
startStopPanel.className = "ControlPanel-SequenceTypes";

var playPauseButton = document.createElement("button");
playPauseButton.className = "StartStopButton-Off";
playPauseButton.addEventListener("click", playPause);
startStopPanel.appendChild(playPauseButton);

var sequencerState = 0;
function playPause(event)
{
    if (sequencerState == 0)
    {
        sequencerState = 1;
        playPauseButton.className = "StartStopButton-On";
        sequenceTick();
    }
    else if(sequencerState == 1)
    {
        sequencerState = 0;
        for(var i = 0; i < numOfRows; ++i)
        {
            synth[i].triggerRelease();
        }
        playPauseButton.className = "StartStopButton-Off";
    }
}
