/*
Four samplers are made because loading a
different sample in every time would cause latency
 */

var sampler = [];

sampler.push(new Tone.Player("DrumSamples/kick.wav").toMaster());
sampler.push(new Tone.Player("DrumSamples/snare.wav").toMaster());
sampler.push(new Tone.Player("DrumSamples/hihatClose.wav").toMaster());
sampler.push(new Tone.Player("DrumSamples/hihatOpen.wav").toMaster());
