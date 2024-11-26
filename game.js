import Interior from "./interior.js";

const newInterior = new Interior(0, 0);

const gridLength = 25;
const gridHeight = 13;
const gridSize = 50;

function setup() {
  createCanvas(1250, 650);
}

window.setup = setup;

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

const myButton = new Button(500, 200, 250, 100, "START");
const rulesButton = new Button(550, 450, 150, 70, "Rules");

let state = "start";

function draw() {
  background(204, 230, 255, 200);
  drawGrid();

  if (state === "start") {
    if (mouseIsPressed) {
      if (myButton.hitTest(mouseX, mouseY)) {
        state = "game";
      } else if (rulesButton.hitTest(mouseX, mouseY)) {
        state = "rules";
      }
    }

    myButton.draw();
    rulesButton.draw();
  } else if (state === "game") {
    newInterior.draw();
  } else if (state === "rules") {
  }
}

window.draw = draw;
