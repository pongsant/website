let myFont;
let txt = "FUTURE";

function preload() {
  myFont = loadFont('fonts/CODEBold.otf');
}

function setup() {
  createCanvas(600, 600);
  textFont(myFont);
  textSize(100);
  textAlign(CENTER, CENTER);
  frameRate(15);
}

function draw() {
  background(0);
  fill(255);
  
  for (let i = 0; i < 5; i++) {
    let xOffset = random(-5, 5);
    let yOffset = random(-5, 5);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    
    fill(r, g, b);
    text(txt, width / 2 + xOffset, height / 2 + yOffset);
  }
}
