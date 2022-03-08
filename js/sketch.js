

let pitch = 600;

//Set up Tone
let osc = new Tone.AMOscillator(pitch,'sine','sine');
let gain = new Tone.Gain().toDestination();
let pan = new Tone.Panner().connect(gain);
let ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.1,
  decay: 0.2,
  sustain: 1.0,
  release: 0.8
}).connect(pan);
osc.connect(ampEnv);

let gate = false;

let gif_loadImg, gif_createImg;


let freqLFO = new Tone.LFO(15, 300, 1000);
freqLFO.start();
freqLFO.connect(osc.frequency);


function preload(){
  gif_loadImg = loadImage("media/raygun.gif");
  
  
}


function setup(){
  createCanvas(800,800);
  background(0);

  button = createButton('Shoot Zappetizer');
  button.position(330, 700);
  button.mousePressed(startAnimation);
  
}






function startAnimation(){
  osc.start();
  ampEnv.triggerAttackRelease('2n', '.5');
  gif_createImg = createImg("media/raygun.gif", "Ray Gun");
  gif_createImg.position(150,150);
  
  
  console.log("Mouse Pressed.");
  
  //osc.frequency.linearRampToValueAtTime(pitch - 200, "+2");
  
  
  // ampEnv.triggerAttackRelease('4n');
  // osc.frequency.linearRampToValueAtTime(pitch - 200, "+1");
  // ampEnv.triggerAttackRelease('4n');
  // osc.frequency.linearRampToValueAtTime(pitch - 200, "+1");
  
}