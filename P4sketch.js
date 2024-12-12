let gridSize = 50; 
let isAnimating = true; 

function setup() {
  createCanvas(600, 600); 
  noStroke(); 
}

function draw() {
  background(255); 
  
  
  let time = millis() * 0.0010; 

  // Loop through the canvas in steps of 'gridSize'
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      
      // Set size based on time
      let size = isAnimating ? map(sin(time + (x + y) * 0.1), 0, 1, 0, 50) : 25; // Use a fixed size if not animating

      
      if (dist(x + gridSize / 2, y + gridSize / 2, width / 2, height / 2) < 200) {
        fill(0); 
      } else {
        fill(128, 128, 128); 
      }

    
      ellipse(x + gridSize / 2, y + gridSize / 2, size); 
    }
  }
}

// Mouse click event to toggle animation
function mousePressed() {
  isAnimating = !isAnimating; 
}
