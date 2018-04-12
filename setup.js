// Get the html body
var main = document.getElementById("main");

// Make two pages - don't display them yet
var page = [];
page.push(document.createElement("div"));
page[0].className = "pageDiv";

page.push(document.createElement("div"));
page[1].className = "pageDiv";

// Some set values that make scaling up easy for the dev
var stepsPerRow = 8;
var numOfRows = 4;
var numOfDrumSamples = 4;
var ms = 1500; // Default ms delay for clock.js (1500ms = 40BPM)

//Containers for the data of each step
var stepGroup = []; // A step group is a row of steps
var step = []; // A step is a single unit of the sequencer (4 rows x 8 columns = 32 steps, but 4 steps will be played for each tick)

//Arrays for all of the sliders - These get used across many .js files
var sliderContainers = [];
var sliderTagDisplayBox = [];
var sliderTag = [];
var sliderDisplay = [];
var sliders = [];

// This is the unique tag that every slider has
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

//This is the actual slider number that is associated with the property, some sliders are changed when a different type of step is selected
var SliderDisplayEnum = {
    BPM : 0,
    SYNTH_VELOCITY : 1,
    SYNTH_PITCH : 2,
    SYNTH_OCTAVE : 3,
    SYNTH_CHANCE : 4,
    DRUM_VELOCITY : 1,
    DRUM_TYPE : 2,
    DRUM_CHANCE : 4,
    FM_ENV_ATTACK: 4,
    FM_ENV_DECAY: 5,
    FM_ENV_SUSTAIN: 6,
    FM_ENV_RELEASE: 7,
    FM_MODENV_ATTACK: 8,
    FM_MODENV_DECAY: 9,
    FM_MODENV_SUSTAIN: 10,
    FM_MODENV_RELEASE: 11,
}

//Replaces numbers with actual names of pitches/types to make it easier for the user to use
var DrumName = ["Kick", "Snare", "HH-C", "HH-O"];
var NoteName = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]

//Words of reassurance
console.log("At least it loaded");
