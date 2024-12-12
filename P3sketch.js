let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  createCanvas(600, 600); 
  stroke(255);
  angleMode(DEGREES);

  // Set radius for each shape based on canvas dimensions
  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;
}

function draw() {
  background(0);

  // Move origin to center of canvas
  translate(width / 2, height / 2);
  
  // Draw the clock background
  noStroke();
  fill(255);
  ellipse(0, 0, clockDiameter + 200, clockDiameter + 25);
  fill(244, 10, 15);
  ellipse(0, 0, clockDiameter, clockDiameter);
  
  

  // Calculate angle for each hand
  let secondAngle = map(second(), 0, 60, 0, 360);
  let minuteAngle = map(minute(), 0, 60, 0, 360);
  let hourAngle = map(hour() % 12, 0, 12, 0, 360); // 12-hour format
  
  // Seconds square 
  push();
  rotate(secondAngle);
  fill(0); // black color for seconds
  noStroke();
  drawSquare(secondsRadius); 
  pop();

  // Minutes square 
  push();
  rotate(minuteAngle);
  fill(150); // Gray color for minutes
  noStroke();
  drawSquare(minutesRadius); 
  pop();

  // Hours square 
  push();
  rotate(hourAngle);
  fill(255); // White color for hours
  noStroke();
  drawSquare(hoursRadius);
  pop();
}

// Function to draw a square with a given radius
function drawSquare(radius) {
  rectMode(CENTER); 
  rect(0, 0, radius, radius);
  
  fill(0); 
  ellipse(0, 0, 100, 40); 

  
}