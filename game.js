import Interior from "./interior.js";
import MainCharacter from "./character.js";
import Food from "./food.js";
import GreenCharacter from "./greencharacter.js";

const mainCharacter = new MainCharacter(0, 0);
const newInterior = new Interior(0, 0);
const food = new Food(0, 0, mainCharacter.foodState);
const greenCharacter = new GreenCharacter(100, 500);

const gridLength = 25;
const gridHeight = 13;
const gridSize = 50;

function setup() {
  createCanvas(1250, 650);
}

window.setup = setup;

function preload() {
  newInterior.preload();
  mainCharacter.preload();
  food.preload();
  greenCharacter.preload();
}

window.preload = preload();

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
const backButton = new Button(550, 450, 150, 70, "BACK");

function keyTyped() {
  mainCharacter.keyTyped();
}

window.keyTyped = keyTyped;

function startScreen() {
  newInterior.draw();
  background(204, 230, 255, 200);
  myButton.draw();
  rulesButton.draw();
}

function rulesScreen() {
  background(204, 230, 255, 200);
  backButton.draw();
}

let state = "start";

function draw() {
  drawGrid();

  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    newInterior.draw();
    greenCharacter.draw();
    mainCharacter.draw();

    food.draw(0, 0);
    food.type = mainCharacter.foodState;
    food.foodX = mainCharacter.characterX + 65;
    food.foodY = mainCharacter.characterY - 110;
  } else if (state === "rules") {
    rulesScreen();
  }
}

window.draw = draw;

function mousePressed() {
  if (state === "start" && myButton.hitTest(mouseX, mouseY)) {
    state = "game";
  } else if (state === "start" && rulesButton.hitTest(mouseX, mouseY)) {
    state = "rules";
  } else if (state === "rules" && backButton.hitTest(mouseX, mouseY))
    state = "start";
}

window.mousePressed = mousePressed;
