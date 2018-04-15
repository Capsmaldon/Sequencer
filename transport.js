//Global setup
var globalPanel = document.createElement("div");
globalPanel.className = "ControlPanel-Global";

//New method - fitting every element needed for the slider into a single array - It works! Would've done everything this way if I'd have known earlier

var transportSliders = [];
for (var i = 0; i < 4; ++i)
{
    transportSliders.push(document.createElement("div"));
    
    transportSliders[i].sliderContainer = document.createElement("div");
    transportSliders[i].sliderTagDisplayBox = document.createElement("div");
    transportSliders[i].sliderTag = document.createElement("div");
    transportSliders[i].sliderDisplay = document.createElement("div");
    transportSliders[i].slider = document.createElement("INPUT");
    
    transportSliders[i].sliderContainer.className = "RangeSliderContainer";
    transportSliders[i].sliderTagDisplayBox.className = "RangeSliderTag&DisplayBox";
    transportSliders[i].sliderTag.className = "RangeSliderTag";
    transportSliders[i].sliderDisplay.className = "RangeSliderDisplay";
    transportSliders[i].sliderTag.className = "RangeSliderTag";
    transportSliders[i].slider.className = "RangeSlider";
    
    transportSliders[i].slider.addEventListener("input", transportSliderControl);
    
    transportSliders[i].sliderTagDisplayBox.appendChild(transportSliders[i].sliderDisplay);
    transportSliders[i].sliderTagDisplayBox.appendChild(transportSliders[i].sliderTag);
    transportSliders[i].sliderContainer.appendChild(transportSliders[i].sliderTagDisplayBox);
    transportSliders[i].sliderContainer.appendChild(transportSliders[i].slider);
    globalPanel.appendChild(transportSliders[i].sliderContainer);
}



transportSliders[0].slider.tag = SliderEnum.BPM;
transportSliders[0].slider.type = "range";
transportSliders[0].sliderTag.innerHTML = "BPM";
transportSliders[0].sliderDisplay.innerHTML = 40;
transportSliders[0].slider.min = 20;
transportSliders[0].slider.max = 200;
transportSliders[0].slider.value = 0;

transportSliders[1].slider.tag = SliderEnum.DRUM_LEVEL;
transportSliders[1].slider.type = "range";
transportSliders[1].sliderTag.innerHTML = "Drum Level";
transportSliders[1].sliderDisplay.innerHTML = 0 + "dB";
transportSliders[1].slider.min = -30;
transportSliders[1].slider.max = 0;
transportSliders[1].slider.value = 0;

transportSliders[2].slider.tag = SliderEnum.SYNTH_LEVEL;
transportSliders[2].slider.type = "range";
transportSliders[2].sliderTag.innerHTML = "Synth Level";
transportSliders[2].sliderDisplay.innerHTML = 0 + "dB";
transportSliders[2].slider.min = -30;
transportSliders[2].slider.max = 0;
transportSliders[2].slider.value = 0;

// This is an ugly hack that fixes the layout, but it has pretty much no reprocussions
transportSliders[3].slider.tag = SliderEnum.MASTER_LEVEL;
transportSliders[3].slider.type = "range";
transportSliders[3].sliderTag.innerHTML = "Master Level";
transportSliders[3].sliderDisplay.innerHTML = 0 + "dB";
transportSliders[3].slider.min = -30;
transportSliders[3].slider.max = 0;
transportSliders[3].slider.value = 0;

function transportSliderControl(event)
{
    switch (event.target.tag)
    {
        case SliderEnum.BPM:
            var bpm = parseInt(event.target.value);
            ms = (60000 / bpm) / 2;
            transportSliders[SliderEnum.BPM].sliderDisplay.innerHTML = bpm;
            break;
        case SliderEnum.DRUM_LEVEL:
            global_Drum_Level = event.target.value;
            console.log(global_Drum_Level);
            transportSliders[SliderEnum.DRUM_LEVEL].sliderDisplay.innerHTML = event.target.value + "dB";
            break;
        case SliderEnum.SYNTH_LEVEL:
            global_Synth_Level = event.target.value;
            transportSliders[SliderEnum.SYNTH_LEVEL].sliderDisplay.innerHTML = event.target.value + "dB";
            break;
        case SliderEnum.MASTER_LEVEL:
            global_Master_Level = event.target.value;
            transportSliders[SliderEnum.MASTER_LEVEL].sliderDisplay.innerHTML = event.target.value + "dB";
            break;
    }
    
}


