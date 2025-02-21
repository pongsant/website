let font;
let points = [];
let textString = 'FUTURE';
let fontSize = 200;

function preload() {
  font = loadFont('libraries/AvenirNextLTPro-Demi.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  noStroke();
  
  let bounds = font.textBounds(textString, 100, 200, fontSize);
  let x = (width - bounds.w) / 2;
  let y = (height + bounds.h) / 2;
  
  let textPoints = font.textToPoints(textString, x, y, fontSize, {
    sampleFactor: 0.1,
    simplifyThreshold: 0
  });

  for (let i = 0; i < textPoints.length; i++) {
    let pt = textPoints[i];
    points.push(new Point(pt.x, pt.y));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < points.length; i++) {
    points[i].move();
    points[i].display();
  }
}

// Point Class
class Point {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.origin = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector(0, 0);
  }

  move() {
    this.acc = p5.Vector.sub(this.origin, this.pos);
    this.acc.mult(0.02);
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 5, 5);
  }
}
