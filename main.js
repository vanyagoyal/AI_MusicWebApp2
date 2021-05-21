faded = "";
darkside = "";

function preload(){
   darkside = loadSound('Darkside.mp3');
   faded = loadSound('Faded.mp3');
}

function setup(){
    canvas = createCanvas(500 , 400);
    canvas.position(500 , 310);
    webcam = createCapture(VIDEO);
    webcam.hide();
}

function draw(){
    image(webcam , 0 , 0 , 600 , 500);
}