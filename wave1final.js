let myFont;
let txt = "WAVE";
let points = [];
let ripples = [];
let fontSize = 200;

function preload() {
  myFont = loadFont('fonts/CODEBold.otf');
}

function setup() {
  createCanvas(800, 600);
  textFont(myFont);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  breakTextIntoPoints();
}

function draw() {
  background(0);
  fill(255);

  // Draw and animate ripples
  for (let i = ripples.length - 1; i >= 0; i--) {
    ripples[i].expand();
    ripples[i].display();
    if (ripples[i].isDone()) {
      ripples.splice(i, 1);
    }
  }

  // Draw and animate text points
  for (let pt of points) {
    pt.wave();
    pt.display();
  }
}

// Function to break text into points
function breakTextIntoPoints() {
  points = [];
  let bounds = myFont.textBounds(txt, 0, 0, fontSize);
  let x = (width - bounds.w) / 2;
  let y = (height + bounds.h) / 2;
  
  let textPoints = myFont.textToPoints(txt, x, y, fontSize, {
    sampleFactor: 0.15, // Adjust for more or fewer points
    simplifyThreshold: 0
  });

  for (let pt of textPoints) {
    points.push(new Point(pt.x, pt.y));
  }
}

// Class for text points with wave effect
class Point {
  constructor(x, y) {
    this.origin = createVector(x, y);
    this.pos = createVector(x, y);
    this.offset = random(TWO_PI); // Random phase offset for waving
  }

  wave() {
    // Wave effect using sine function
    this.pos.y = this.origin.y + sin(frameCount * 0.05 + this.offset) * 10;
  }

  display() {
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, 5, 5);
  }
}

// Class for ripple effect
class Ripple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 10;
    this.alpha = 150;
  }

  expand() {
    this.size += 3;
    this.alpha -= 2;
  }

  display() {
    noFill();
    stroke(255, this.alpha);
    ellipse(this.x, this.y, this.size);
  }

  isDone() {
    return this.alpha <= 0;
  }
}

// Create ripple effect on mouse press
function mousePressed() {
  ripples.push(new Ripple(mouseX, mouseY));
}
