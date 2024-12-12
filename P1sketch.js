function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
  
  push()
  translate(width/2, height/2)
  rotate(PI/2)
  stroke(0)
  fill(255)
  rectMode(CENTER)
  noStroke();
  rect(0,0, 255, 25)
  pop()
  
  push()
  translate(171, 35)
  noStroke();
  triangle(16, 37.5, 30, 10, 43, 37.5);
  pop()
  
  push()
  translate(width/2, height/2)
  noStroke();
  circle(0,127.5, 25);
  pop()
  
}