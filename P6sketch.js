let P1;
let obstacles = [];
let score = 0;
let gameOver = false;
let win = false;
let gameStart = false; // New variable for game start
let backgroundImage, playerImage, rockImage, bg1, bg2, bg3;

function preload() {
  bg1 = loadImage('background.jpg');
  bg2 = loadImage('p6bg2.jpg');
  bg3 = loadImage('p6bg3.jpg');
  playerImage = loadImage('p6p1.png');
  rockImage = loadImage('rock.png');
}
 

function setup() {
  createCanvas(600, 600);
  P1 = new Player(); // Instantiate the Player class
}

function draw() {
  if (!gameStart) {
    // Show the starting screen
    background(240);
    fill(0);
    textSize(36);
    textAlign(CENTER);
    text("Jump and Dodge Adventure", width / 2, height / 2 - 20);
    textSize(24);
    text("Press any key to start", width / 2, height / 2 + 20);
    return; // Stop the draw function until a key is pressed
  }

  if (gameOver) {
    displayGameOver();
    return;
  }
  
  if (win) {
    displayWin();
    return;
  }

  // Change background based on score
  if (score >= 20) {
    backgroundImage = bg3;
  } else if (score >= 10) {
    backgroundImage = bg2;
  } else {
    backgroundImage = bg1;
  }

  image(backgroundImage, 0, 0, 600, 600);

  // Show and update the player
  P1.show();
  P1.update();

  // Generate obstacles randomly
  if (frameCount % 60 === 0) {
    obstacles.push(new Obstacle());
  }

  // Show and update obstacles
  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].show();
    obstacles[i].update();

    // Check for collisions
    if (obstacles[i].hits(P1)) {
      gameOver = true;
    }

    // Remove off-screen obstacles
    if (obstacles[i].offScreen()) {
      obstacles.splice(i, 1);
      score++;

      // Check for win condition
      if (score >= 30) {
        win = true;
      }
    }
  }

  // Display the score
  fill(0);
  textSize(24);
  text("Score: " + score, 10, 30);
}

function keyPressed() {
  if (!gameStart) {
    gameStart = true; // Start the game when any key is pressed
    return;
  }
  
  if (key === ' ' && P1.isOnGround()) {
    P1.jump();
  }
}

// Player class
class Player {
  constructor() {
    this.x = 50;
    this.y = height - 100;
    this.gravity = 1;
    this.lift = -20;
    this.velocity = 0;
    this.size = 100;
  }

  show() {
    image(playerImage, this.x, this.y, this.size, this.size);
  }

  jump() {
    this.velocity = this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    // Prevent falling through the ground
    if (this.y > height - this.size) {
      this.y = height - this.size;
      this.velocity = 0;
    }
  }

  isOnGround() {
    return this.y === height - this.size;
  }
}

// Obstacle class
class Obstacle {
  constructor() {
    this.x = width;
    this.y = height - 50;
    this.size = 50;
    this.speed = 6;
  }

  show() {
    image(rockImage, this.x, this.y, this.size, this.size);
  }

  update() {
    this.x -= this.speed;
  }

  offScreen() {
    return this.x < -this.size;
  }

  hits(player) {
    return (
      player.x < this.x + this.size &&
      player.x + player.size > this.x &&
      player.y < this.y + this.size &&
      player.y + player.size > this.y
    );
  }
}

function displayGameOver() {
  background(240);
  fill(0);
  textSize(36);
  textAlign(CENTER);
  text("Game Over!", width / 2, height / 2);
  textSize(24);
  text("Score: " + score, width / 2, height / 2 + 40);
}

function displayWin() {
  background(240);
  fill(0);
  textSize(36);
  textAlign(CENTER);
  text("You Win!", width / 2, height / 2);
  textSize(24);
  text("Score: " + score, width / 2, height / 2 + 40);
}

