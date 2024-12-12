let faceSize = 200;

function setup() {
  createCanvas(400, 400);("sketch-container");
}

function draw() {
  background(0);
  noStroke();
  translate(width / 2, height / 2);

  // Face
  let dynamicFaceSize = map(mouseX, 0, width, 150, 300); 
  
  // Face size changes with mouseX    
  fill(255, 165, 0);
  ellipse(0, 0, dynamicFaceSize, dynamicFaceSize);

  // Eyes 
  let xEye = 40;
  let yEye = 30;
  
  // Eye size changes with mouseY
  let eyeSize = map(mouseY, 0, height, 50, 100);
  
  fill(255);
  ellipse(-xEye, -yEye, eyeSize, eyeSize);
  ellipse(xEye, -yEye, eyeSize * 0.9, eyeSize , 0.9); 
  
  // Slightly smaller right eye
  fill(0);
  ellipse(-xEye, -yEye, 30, 30);
  ellipse(xEye, -yEye, 30, 30);

  // Mouth
  let mouthWidth = map(mouseX, 0, width, 60, 120); 
 
  // Mouth width changes with mouseX
  let mouthHeight = map(mouseY, 0, height, 20, 60); 
  
  // Mouth height changes with mouseY
  fill(255, 0, 0);
  ellipse(0, 60, mouthWidth, mouthHeight);
}
