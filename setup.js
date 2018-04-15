/*
 Where global variables tend to be kept,
 often things that are used in multiple .js files
 
 I haven't worked out classes yet
 (I'm not sure it's even designed to be Object Oriented)
 
 Apologies to anyone that has to read my first javascript project!
 */


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
var numOfRows = 6;
var numOfDrumSamples = 4;
var ms = 750; // Default ms delay for clock.js (750ms = 20BPM)

//Containers for the data of each step
var stepGroup = []; // A step group is a row of steps
var step = []; // A step is a single unit of the sequencer (4 rows x 8 columns = 32 steps, but 4 steps will be played for each tick)

/*
Arrays for all of the sliders -
 
 **These could definitely be cleaned up, they
 get used across some panels but not all which
 makes things quite messy and hard to read and
 expand. Also towards the end of the project I
 discovered I could create an object containing
 all of the elements necessary for one 'slider'
 so these 5 arrays could be reduced to one
*/
var sliderContainers = [];
var sliderTagDisplayBox = [];
var sliderTag = [];
var sliderDisplay = [];
var sliders = [];

/*
 Each group on controls is placed on its own 'panel'
 */
var panel = [];

var synthPanel = [];
var synth = [];

// This is the unique tag that every slider has
var SliderEnum = {
    BPM : 0,
    DRUM_LEVEL : 1,
    SYNTH_LEVEL : 2,
    MASTER_LEVEL : 3,
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
    FM_MODENV_ATTACK: 11,
    FM_MODENV_DECAY: 12,
    FM_MODENV_SUSTAIN: 13,
}

/*
 This is the slider as it appears on the screen -
 e.g. slider 4 is occupied by both synth chance
 and drum chance

looking back it would have made more sense to
just create unique sliders for each element and
hide them or make them visible as required.
 */
var SliderDisplayEnum = {
    BPM : 0,
    DRUM_LEVEL : 1,
    SYNTH_LEVEL : 2,
    MASTER_LEVEL : 3,
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
    FM_MODENV_ATTACK: 7,
    FM_MODENV_DECAY: 8,
    FM_MODENV_SUSTAIN: 9,
}

var global_Drum_Level = 0;
var global_Synth_Level = 0;
var global_Master_Level = 0;

//Replaces numbers with actual names of pitches/types to make it easier for the user to use
var DrumName = ["Kick", "Snare", "HH-C", "HH-O"];
var NoteName = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]

//Words of reassurance
console.log("At least it loaded");
