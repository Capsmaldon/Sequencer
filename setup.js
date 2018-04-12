var main = document.getElementById("main");

var page = [];
page.push(document.createElement("div"));
page[0].className = "pageDiv";

page.push(document.createElement("div"));
page[1].className = "pageDiv";

var stepsPerRow = 8;
var numOfRows = 4;
var numOfDrumSamples = 4;
var ms = 1500;

var stepGroup = [];
var step = [];

var sliderContainers = [];
var sliderTagDisplayBox = [];
var sliderTag = [];
var sliderDisplay = [];
var sliders = [];

var SliderEnum = {
    BPM : 0,
    SYNTH_VELOCITY : 1,
    SYNTH_PITCH : 2,
    SYNTH_OCTAVE : 3,
    SYNTH_CHANCE : 4,
    DRUM_VELOCITY : 5,
    DRUM_TYPE : 6,
    DRUM_CHANCE : 7,
    FM_ENV_ATTACK: 8,
    FM_ENV_DECAY: 9,
    FM_ENV_SUSTAIN: 10,
    FM_ENV_RELEASE: 11,
    FM_MODENV_ATTACK: 12,
    FM_MODENV_DECAY: 13,
    FM_MODENV_SUSTAIN: 14,
    FM_MODENV_RELEASE: 15,
}

var DrumName = ["Kick", "Snare", "HH-C", "HH-O"];
var NoteName = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]

//Words of reassurance
console.log("At least it loaded");
