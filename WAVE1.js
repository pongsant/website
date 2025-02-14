let myFont;
let txt = "WAVE";
let ripples = [];
let fontSize = 100;

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
  
  let centerX = width / 2;
  let centerY = height / 2;
  
  // Draw ripples
  for (let i = ripples.length - 1; i >= 0; i--) {
    let r = ripples[i];
    stroke(255, 150 - r.age);
    noFill();
    ellipse(centerX, centerY, r.size);
    r.size += 2;
    r.age += 2;
    
    if (r.age > 150) ripples.splice(i, 1);
  }
  
  // Draw text with slight distortion
  for (let i = 0; i < txt.length; i++) {
    let letterX = centerX - textWidth(txt) / 2 + textWidth(txt.substring(0, i));
    let letterY = centerY + sin(frameCount * 0.05 + i) * 5; // Slight jitter effect
    text(txt[i], letterX, letterY);
  }
}

// Add ripples when mouse is pressed
function mousePressed() {
  ripples.push({ size: 10, age: 0 });
}
