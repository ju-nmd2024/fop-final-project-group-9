function setup() {
  createCanvas(1000, 600);
}

class GameState {
  constructor(state) {}
}

class Graphics {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let sofa;
let carpet;

function preload() {
  sofa = loadImage("/graphics/big-sofa.png");
  carpet = loadImage("/graphics/carpet-05.png");
}

function gameScreen() {
  image(sofa, 0, 100);
  image(carpet, 200, 500);
}

function startScreen() {
  //background(255, 227, 228);
  push();

  fill(40, 108, 173);
  strokeWeight(5);
  stroke(30, 72, 112);
  rect(400, 250, 200, 100);
  rect(430, 480, 140, 50);

  noStroke();
  textFont("Consolas");
  fill(30, 72, 112);
  textSize(35);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Chef's Frenzy", 250, 170, 500);

  fill(255);
  text("START", 400, 300, 200);
  textSize(22);
  text("RULES", 430, 505, 140);

  fill(16, 45, 74);
  textSize(12);
  text("producers: arina & julia", 400, 550, 200);
  pop();
}

function draw() {
  gameScreen();
  background(204, 230, 255, 200);
  startScreen();
}
