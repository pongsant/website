let myFont;
let txt = "WAVE";

function preload() {
  myFont = loadFont('fonts/CODEBold.otf');
}

function setup() {
  createCanvas(600, 600);
  textFont(myFont);
  textSize(100);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  fill(255);
  
  for (let i = 0; i < txt.length; i++) {
    let x = width / 4 + i * 100;
    let y = height / 2 + sin(frameCount * 0.1 + i) * 30;
    text(txt[i], x, y);
  }
}
