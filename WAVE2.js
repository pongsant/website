let myFont;
let txt = "WAVE";
let fontSize = 100;
let distortionFactor = 30; // Maximum distortion level

function preload() {
  myFont = loadFont('fonts/CODEBold.otf');
}

function setup() {
  createCanvas(600, 600);
  textFont(myFont);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  fill(255);
  
  let txtW = textWidth(txt);
  let startX = (width - txtW) / 2;
  let centerY = height / 2;

  for (let i = 0; i < txt.length; i++) {
    let letterX = startX + textWidth(txt.substring(0, i));
    let distance = dist(mouseX, mouseY, letterX, centerY); // Distance from mouse
    let distortion = map(distance, 0, width, distortionFactor, 0); // Closer = more distortion
    let letterY = centerY + sin(frameCount * 0.05 + i) * distortion;

    text(txt[i], letterX, letterY);
  }
}
