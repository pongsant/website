let myFont;
let txt = "SHATTER";
let fragments = [];
let fontSize = 100;
let isShattering = true; // Control animation state

function preload() {
  myFont = loadFont('fonts/CODEBold.otf');
}

function setup() {
  createCanvas(600, 600);
  textFont(myFont);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  breakTextIntoFragments(); // Create shattered text fragments
}

function draw() {
  background(0);
  fill(255);
  
  // Animate fragments
  for (let frag of fragments) {
    if (isShattering) {
      // Move pieces outward (shattering)
      frag.x += frag.vx;
      frag.y += frag.vy;
    } else {
      // Move pieces back (reforming)
      frag.x = lerp(frag.x, frag.targetX, 0.05);
      frag.y = lerp(frag.y, frag.targetY, 0.05);
    }
    text(frag.char, frag.x, frag.y);
  }

  // Check if pieces are back in place
  if (!isShattering) {
    let allReformed = fragments.every(frag => 
      dist(frag.x, frag.y, frag.targetX, frag.targetY) < 1
    );
    if (allReformed) {
      setTimeout(() => {
        breakTextIntoFragments(); // Restart shatter effect
        isShattering = true;
      }, 1000);
    }
  }
}

// Function to break text into fragments
function breakTextIntoFragments() {
  fragments = [];
  let startX = (width - textWidth(txt)) / 2;
  let startY = height / 2;
  
  for (let i = 0; i < txt.length; i++) {
    let letterX = startX + textWidth(txt.substring(0, i));
    let letterY = startY;

    fragments.push({
      char: txt[i],
      x: letterX,
      y: letterY,
      targetX: letterX,
      targetY: letterY,
      vx: random(-5, 5),
      vy: random(-5, 5),
    });
  }

  setTimeout(() => isShattering = false, 1000); // Stop shattering after 1s
}
