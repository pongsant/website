let myFont;
let txt = "SHATTER";
let points = [];
let fontSize = 150;
let isShattering = true; 

function preload() {
  myFont = loadFont('fonts/CODEBold.otf');
}

function setup() {
  createCanvas(800, 600);
  textFont(myFont);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  breakTextIntoPoints(); // Create shattered text points
}

function draw() {
  background(0);
  fill(255);

  // Animate points
  for (let pt of points) {
    pt.move();
    pt.display();
  }

  // Check if pieces are back in place
  if (!isShattering) {
    let allReformed = points.every(pt => 
      dist(pt.pos.x, pt.pos.y, pt.origin.x, pt.origin.y) < 1
    );
    if (allReformed) {
      setTimeout(() => {
        breakTextIntoPoints(); // Restart shatter effect
        isShattering = true;
      }, 1000);
    }
  }
}

// Function to break text into points
function breakTextIntoPoints() {
  points = [];
  let bounds = myFont.textBounds(txt, 0, 0, fontSize);
  let x = (width - bounds.w) / 2;
  let y = (height + bounds.h) / 2;
  
  let textPoints = myFont.textToPoints(txt, x, y, fontSize, {
    sampleFactor: 0.2, // Adjust to change point density
    simplifyThreshold: 0
  });

  for (let i = 0; i < textPoints.length; i++) {
    let pt = textPoints[i];
    points.push(new Point(pt.x, pt.y));
  }

  setTimeout(() => isShattering = false, 1000); // Stop shattering after 1s
}

// Point Class
class Point {
  constructor(x, y) {
    this.origin = createVector(x, y);
    this.pos = createVector(x, y);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.acc = createVector(0, 0);
  }

  move() {
    if (isShattering) {
      // Shatter outward
      this.pos.add(this.vel);
    } else {
      // Reform back to original position
      this.acc = p5.Vector.sub(this.origin, this.pos);
      this.acc.mult(0.05);
      this.vel.add(this.acc);
      this.vel.mult(0.9);
      this.pos.add(this.vel);
    }
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 5, 5);
  }
}
