let myFont;
let txt = "SHATTER";
let fragments = [];

function preload() {
  myFont = loadFont('fonts/CODEBold.otf');
}

function setup() {
  createCanvas(600, 600);
  textFont(myFont);
  textSize(100);
  textAlign(CENTER, CENTER);

  // Create fragmented positions
  for (let i = 0; i < txt.length; i++) {
    let x = width / 2 - textWidth(txt) / 2 + textWidth(txt[i]) * i;
    let y = height / 2;
    fragments.push({
      x: x + random(-200, 200),
      y: y + random(-200, 200),
      targetX: x,
      targetY: y,
      speed: random(0.02, 0.05)
    });
  }
}

function draw() {
  background(0);
  fill(255);

  let allArrived = true;
  for (let i = 0; i < fragments.length; i++) {
    let frag = fragments[i];

    // Move letters towards their correct position
    frag.x = lerp(frag.x, frag.targetX, frag.speed);
    frag.y = lerp(frag.y, frag.targetY, frag.speed);

    if (abs(frag.x - frag.targetX) > 1 || abs(frag.y - frag.targetY) > 1) {
      allArrived = false;
    }

    text(txt[i], frag.x, frag.y);
  }

  // Restart animation if all letters are back in place
  if (allArrived) {
    for (let frag of fragments) {
      frag.x += random(-200, 200);
      frag.y += random(-200, 200);
    }
  }
}
