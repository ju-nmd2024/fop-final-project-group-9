//import Interior from "./interior.js";

const gridLength = 20;
const gridHeight = 12;
const gridSize = 50;

function setup() {
  createCanvas(1000, 600);
}

function drawGrid() {
  push();
  stroke(255, 255, 255);
  noFill();
  for (let x = 0; x < gridLength; x++) {
    for (let y = 0; y < gridHeight; y++) {
      rect(x * gridSize, y * gridSize, gridSize, gridSize);
    }
  }
  pop();
}

/*
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
*/

class Button {
  constructor(x, y, width, height, text) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
  }
  draw() {
    push();
    translate(this.x, this.y);
    fill(40, 108, 173);
    strokeWeight(5);
    stroke(30, 72, 112);
    rect(0, 0, this.width, this.height);

    noStroke();
    fill(255);
    textFont("Consolas");
    textStyle(BOLD);
    textSize(this.height / 2);
    textAlign(CENTER);
    text(this.text, 0, this.height / 4, this.width);
    pop();
  }
  hitTest(x, y) {
    return (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    );
  }
}

const myButton = new Button(375, 200, 250, 100, "START");
const rulesButton = new Button(425, 450, 150, 70, "Rules");

let state = "start";

function draw() {
  gameScreen();
  background(204, 230, 255, 200);
  drawGrid();

  if (mouseIsPressed) {
    if (myButton.hitTest(mouseX, mouseY)) {
      state = "game";
    } else if (rulesButton.hitTest(mouseX, mouseY)) {
      state = "rules";
    }
  }

  myButton.draw();
  rulesButton.draw();

  if (state === "game") {
  }
}
