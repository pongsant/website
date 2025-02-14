let myFont;
let txt = "FUTURE";
let fontSize = 100;
let spacing = 10; // Space between dots
let dotSize = 5;  // Size of each dot
let points = [];

function preload() {
  myFont = loadFont('fonts/CODEBold.otf');
}

function setup() {
  createCanvas(600, 600);
  textFont(myFont);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  
  // Convert text into points
  let txtPoints = myFont.textToPoints(txt, width / 4, height / 2, fontSize, {
    sampleFactor: 0.15 // Density of dots (higher = more detailed)
  });

  for (let p of txtPoints) {
    points.push({ x: p.x, y: p.y, active: random(1) > 0.5 }); // Random active state
  }
}

function draw() {
  background(0);
  fill(255);
  noStroke();

  for (let p of points) {
    if (random(1) > 0.1) { // Random flickering effect
      ellipse(p.x, p.y, dotSize);
    }
  }
}
