let capture;
let faceGraphics;

function setup() {
  createCanvas(600, 400);
  capture = createCapture(VIDEO);
  capture.size(600, 400);
  capture.hide();
  faceGraphics = createGraphics(width, height);
}

function draw() {
  background(220);

  capture.loadPixels();
  if (capture.pixels.length > 0) {
    for (let i = 0; i < 500; i++) {
      let x = floor(random(capture.width));
      let y = floor(random(capture.height));
      let index = (x + y * capture.width) * 4;
      let r = capture.pixels[index];
      let g = capture.pixels[index + 1];
      let b = capture.pixels[index + 2];

      faceGraphics.noStroke();
      faceGraphics.fill(r, g, b);
      faceGraphics.ellipse(x, y, 5, 5);
    }
  }

  image(faceGraphics, 0, 0, width, height);

  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    pixels[i] = pixels[i] * 1.05;
    pixels[i + 1] = pixels[i + 1] * 0.95;
  }
  updatePixels();
}

function mousePressed() {
  let finalImage = createGraphics(width, height);
  finalImage.image(faceGraphics, 0, 0, width, height);

  finalImage.loadPixels();
  for (let i = 0; i < finalImage.pixels.length; i += 4) {
    finalImage.pixels[i] = finalImage.pixels[i] * 1.05;
    finalImage.pixels[i + 1] = finalImage.pixels[i + 1] * 0.95;
  }
  finalImage.updatePixels();

  save(finalImage, 'webcam_art.png');
}
