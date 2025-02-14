let myFont;
let txt = "FUTURE";
let drops = [];

function preload() {
  myFont = loadFont('fonts/CODEBold.otf');
}

function setup() {
  createCanvas(600, 600);
  textFont(myFont);
  textSize(80);
  textAlign(CENTER, CENTER);
  
  for (let i = 0; i < txt.length; i++) {
    drops.push({ x: width / 2 - textWidth(txt) / 2 + i * textWidth(txt[i]), y: random(-300, 0) });
  }
}

function draw() {
  background(0, 50); // Fading effect
  
  fill(0, 255, 0); // Matrix Green
  for (let i = 0; i < drops.length; i++) {
    text(txt[i], drops[i].x, drops[i].y);
    
    drops[i].y += random(3, 7); // Speed of falling

    if (drops[i].y > height) {
      drops[i].y = random(-300, 0); // Reset drop
    }
  }
}