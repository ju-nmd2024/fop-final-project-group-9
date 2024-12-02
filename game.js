import Interior from "./interior.js";
import MainCharacter from "./character.js";
import Food from "./food.js";
import GreenCharacter from "./greencharacter.js";
import RedCharacter from "./redcharacter.js";

const mainCharacter = new MainCharacter(700, 250);
const newInterior = new Interior(0, 0);
const food = new Food(0, 0, mainCharacter.foodState);
const greenCharacter = new GreenCharacter(100, 500);
const redCharacter = new RedCharacter(100, 500);
const redFood = new Food(0, 0, redCharacter.foodNow);

const gridLength = 25;
const gridHeight = 13;
const gridSize = 50;

let timer = 0;
let seconds = 0;

let points = 0;

function setup() {
  createCanvas(1250, 650);
}

window.setup = setup;

function preload() {
  newInterior.preload();
  mainCharacter.preload();
  food.preload();
  greenCharacter.preload();
  redCharacter.preload();
  redFood.preload();
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

class PowerUp {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.counter = 0;
  }
  draw() {
    push();
    translate(this.x, this.y);
    fill(40, 108, 173);
    strokeWeight(5);
    stroke(30, 72, 112);
    rect(0, 0, this.width, this.height, 20);
    pop();

    this.count();
  }
  hitTest(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    ) {
      mainCharacter.powerUp = 2;
      this.counter = 0;
      this.x = -1000;
      this.y = -1000;
    }
  }

  count() {
    if (this.counter < 200) {
      this.counter += 1;
    } else if (this.counter >= 200) {
      this.counter = 0;
    }

    if (mainCharacter.powerUp === 2 && this.counter > 199) {
      mainCharacter.powerUp = 1;
    }
  }
}

const faster = new PowerUp(300, 250, 50, 50);

class PickUp {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.foodCheck = "none";
    this.served = 0;
  }
  draw() {
    push();
    translate(this.x, this.y);
    stroke(128);
    strokeWeight(2);
    fill(200);
    rect(0, 0, this.width, this.height);
    pop();
  }
  redHitTest(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height &&
      redCharacter.foodNow === mainCharacter.foodState
    ) {
      mainCharacter.foodState = "none";
      redCharacter.foodNow = "none";
      //redCharacter.served = 1;
    }
  }
  greenHitTest(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height &&
      greenCharacter.foodNow === mainCharacter.foodState
    ) {
      mainCharacter.foodState = "none";
      greenCharacter.foodNow = "none";
      //greenCharacter.served = 1;
    }
  }
}

const pickUp = new PickUp(550, 380, 50, 70);

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
    timer += 1;
    if (timer === 30) {
      seconds += 1;
      timer = 0;
      console.log(seconds);
    }

    newInterior.draw();
    pickUp.draw();
    pickUp.redHitTest(
      mainCharacter.characterX + 200,
      mainCharacter.characterY + 180
    );
    greenCharacter.draw();

    if (seconds >= 1) {
      redCharacter.draw();
    }

    mainCharacter.draw();

    faster.draw();
    faster.hitTest(
      mainCharacter.characterX + 200,
      mainCharacter.characterY + 180
    );

    food.draw(0, 0);
    food.type = mainCharacter.foodState;
    food.foodX = mainCharacter.characterX + 65;
    food.foodY = mainCharacter.characterY - 110;

    redFood.draw();
    redFood.type = redCharacter.foodNow;
    redFood.foodX = redCharacter.characterX + 60;
    redFood.foodY = redCharacter.characterY - 70;
    console.log(points);
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
