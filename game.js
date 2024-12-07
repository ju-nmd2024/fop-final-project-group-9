import Interior from "./interior.js";
import MainCharacter from "./character.js";
import Food from "./food.js";
import GreenCharacter from "./greencharacter.js";
import RedCharacter from "./redcharacter.js";
import BlueCharacter from "./bluecharacter.js";
import SecondGreenCharacter from "./secondgreencharacter.js";
import SecondRedCharacter from "./secondredcharacter.js";

const gridLength = 25;
const gridHeight = 13;
const gridSize = 50;

const mainCharacter = new MainCharacter(700, 250);
const newInterior = new Interior(0, 0);
const food = new Food(0, 0, mainCharacter.foodState);
const greenCharacter = new GreenCharacter(100, 500);
const redCharacter = new RedCharacter(100, 500);
const redFood = new Food(0, 0, redCharacter.foodNow);
const greenFood = new Food(0, 0, greenCharacter.foodNow);
const blueCharacter = new BlueCharacter(100, 500);
const blueFood = new Food(0, 0, blueCharacter.foodNow);
const secondRedCharacter = new SecondRedCharacter(100, 500);
const secondRedFood = new Food(0, 0, secondRedCharacter.foodNow);
const secondGreenCharacter = new SecondGreenCharacter(100, 500);
const secondGreenFood = new Food(0, 0, secondGreenCharacter.foodNow);

let points = 0;

let font;
let sad;
let happy;
let powerUpImage;

let timer = 0;
let seconds = 0;

// to change the text on failScreen
let wrongFood = false;

function setup() {
  createCanvas(1250, 650);
}

window.setup = setup;

function preload() {
  newInterior.preload();
  mainCharacter.preload();
  food.preload();
  greenCharacter.preload();
  greenFood.preload();
  redCharacter.preload();
  blueCharacter.preload();
  blueFood.preload();
  redFood.preload();
  secondRedCharacter.preload();
  secondRedFood.preload();
  secondGreenCharacter.preload();
  secondGreenFood.preload();
  font = loadFont("./rainyhearts.ttf");
  sad = loadImage("./character/sad-08.png");
  happy = loadImage("./character/happy-08.png");
  powerUpImage = loadImage("./graphics/powerup.png");
}

window.preload = preload;

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
    fill(200, 100, 100);
    strokeWeight(5);
    stroke(160, 60, 60);
    rect(0, 0, this.width, this.height);

    noStroke();
    fill(255);
    textFont(font);
    textSize(this.height / 2);
    textAlign(CENTER, CENTER);
    text(this.text, 0, this.height / 2.5, this.width);
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

const myButton = new Button(500, 250, 250, 100, "START");
const rulesButton = new Button(550, 450, 150, 70, "RULES");
const backButton = new Button(550, 450, 150, 70, "BACK");
const tryAgainButton = new Button(310, 450, 170, 60, "BACK HOME");

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
    image(powerUpImage, 0, 0);
    this.count();
    pop();
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

const faster = new PowerUp(Math.floor(Math.random() * 1200), 500, 50, 50);

class PickUp {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
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
      keyCode === 69
    ) {
      if (redCharacter.foodNow === mainCharacter.foodState) {
        mainCharacter.foodState = "no";
        redCharacter.foodNow = "none";
        redCharacter.served = 1;
        points += 1;
      } else if (redCharacter.served === 0) {
        state = "fail";
        wrongFood = true;
      }
    }
  }
  redSecondHitTest(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height &&
      keyCode === 69
    ) {
      if (secondRedCharacter.foodNow === mainCharacter.foodState) {
        mainCharacter.foodState = "no";
        secondRedCharacter.foodNow = "none";
        secondRedCharacter.served = 1;
        points += 1;
      } else if (secondRedCharacter.served === 0) {
        state = "fail";
        wrongFood = true;
      }
    }
  }
  greenHitTest(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height &&
      keyCode === 69
    ) {
      if (greenCharacter.foodNow === mainCharacter.foodState) {
        mainCharacter.foodState = "no";
        greenCharacter.foodNow = "none";
        greenCharacter.served = 1;
        points += 1;
      } else if (greenCharacter.served === 0) {
        state = "fail";
        wrongFood = true;
      }
    }
  }
  greenSecondHitTest(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height &&
      keyCode === 69
    ) {
      if (secondGreenCharacter.foodNow === mainCharacter.foodState) {
        mainCharacter.foodState = "no";
        secondGreenCharacter.foodNow = "none";
        secondGreenCharacter.served = 1;
        points += 1;
      } else if (secondGreenCharacter.served === 0) {
        state = "fail";
        wrongFood = true;
      }
    }
  }
  blueHitTest(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height &&
      keyCode === 69
    ) {
      if (blueCharacter.foodNow === mainCharacter.foodState) {
        mainCharacter.foodState = "no";
        blueCharacter.foodNow = "none";
        blueCharacter.served = 1;
        points += 1;
      } else if (blueCharacter.served === 0) {
        state = "fail";
        wrongFood = true;
      }
    }
  }
}

const pickUp = new PickUp(550, 380, 50, 70);
const pickUpReds = new PickUp(550, 210, 50, 70);
const pickUpGreenTwo = new PickUp(355, 210, 50, 70);
const pickUpGreen = new PickUp(355, 380, 50, 70);
const pickUpBlue = new PickUp(140, 375, 50, 70);

function pickUps() {
  pickUp.draw();
  pickUpReds.draw();
  pickUpGreen.draw();
  pickUpGreenTwo.draw();
  pickUpBlue.draw();

  pickUp.redHitTest(
    mainCharacter.characterX + 200,
    mainCharacter.characterY + 200
  );

  pickUpReds.redSecondHitTest(
    mainCharacter.characterX + 200,
    mainCharacter.characterY + 200
  );

  pickUpBlue.blueHitTest(
    mainCharacter.characterX + 200,
    mainCharacter.characterY + 200
  );

  pickUpGreen.greenHitTest(
    mainCharacter.characterX + 200,
    mainCharacter.characterY + 200
  );

  pickUpGreenTwo.greenSecondHitTest(
    mainCharacter.characterX + 200,
    mainCharacter.characterY + 200
  );
}

function keyTyped() {
  mainCharacter.keyTyped();
}

window.keyTyped = keyTyped;

function startScreen() {
  newInterior.draw();
  background(204, 230, 255, 200);
  myButton.draw();
  rulesButton.draw();
  push();
  noStroke();
  rect(350, 50, 550, 150, 20);
  fill(160, 60, 60);
  textFont(font);
  textSize(70);
  textAlign(CENTER, CENTER);
  text("Chef's Frenzy", 350, 40, 550, 150);
  pop();
}

function rulesScreen() {
  background(255);
  image(happy, 830, 360);
  happy.resize(400, 0);
  backButton.draw();
  push();
  fill(160, 60, 60);
  textFont(font);
  textSize(55);
  textAlign(CENTER, CENTER);
  text("Chef's Frenzy", 350, 50, 550, 50);
  textSize(40);
  text("How to play", 350, 90, 550, 50);
  fill(130, 30, 30);
  textSize(30);
  text("Control the character with the arrow keys.", 350, 145, 550, 50);
  text(
    "Pick up the the dishes in the kitchen by pressing E,",
    300,
    180,
    650,
    50
  );
  text("while you are in front of the work-stations!", 300, 205, 650, 50);
  text("Sink = a glass of water.", 300, 240, 650, 50);
  text("Stove = a steak.", 300, 275, 650, 50);
  text("Kitchen Counter = a cookie.", 300, 310, 650, 50);
  text("Then serve the customers their desired dish!", 300, 350, 650, 50);

  pop();
}

function gameScreen() {
  push();
  fill(130, 30, 30);
  textSize(30);
  textFont(font);
  textAlign(CENTER);
  text("Number of Happy Customers:", 10, 30, 350, 100);
  text(points, 360, 30, 10, 30);
  text("Time:", 10, 630, 100, 100);
  text(seconds, 70, 630, 100, 100);
  pop();

  // green characters
  if (seconds >= 20) {
    secondGreenCharacter.draw();
  }

  if (secondGreenCharacter.served === 0 && seconds >= 100) {
    state = "fail";
  }

  if (secondGreenCharacter.served === 1) {
    greenCharacter.draw();
  }

  if (greenCharacter.served === 0 && seconds >= 200) {
    state = "fail";
  }

  // red characters conditions for leaving and entering
  redCharacter.draw();

  if (redCharacter.served === 0 && seconds === 90) {
    state = "fail";
  }

  if (redCharacter.served === 1) {
    secondRedCharacter.draw();
  }

  if (secondRedCharacter.served === 0 && seconds === 130) {
    state = "fail";
  }

  // blue character
  if (seconds >= 10) {
    blueCharacter.draw();
  }

  if (blueCharacter.served === 0 && seconds === 110) {
    state = "fail";
  }

  // powerUp to move faster
  if (seconds >= 10) {
    faster.draw();
    faster.hitTest(
      mainCharacter.characterX + 200,
      mainCharacter.characterY + 180
    );
  }

  // main character
  mainCharacter.draw();

  // food for the characters, follows their movement and tracks food type
  food.draw(0, 0);
  food.type = mainCharacter.foodState;
  food.foodX = mainCharacter.characterX + 65;
  food.foodY = mainCharacter.characterY - 110;

  redFood.draw();
  redFood.type = redCharacter.foodNow;
  redFood.foodX = redCharacter.characterX + 60;
  redFood.foodY = redCharacter.characterY - 70;

  secondRedFood.draw();
  secondRedFood.type = secondRedCharacter.foodNow;
  secondRedFood.foodX = secondRedCharacter.characterX + 60;
  secondRedFood.foodY = secondRedCharacter.characterY - 70;

  blueFood.draw();
  blueFood.type = blueCharacter.foodNow;
  blueFood.foodX = blueCharacter.characterX + 60;
  blueFood.foodY = blueCharacter.characterY - 70;

  greenFood.draw();
  greenFood.type = greenCharacter.foodNow;
  greenFood.foodX = greenCharacter.characterX + 60;
  greenFood.foodY = greenCharacter.characterY - 70;

  secondGreenFood.draw();
  secondGreenFood.type = secondGreenCharacter.foodNow;
  secondGreenFood.foodX = secondGreenCharacter.characterX + 60;
  secondGreenFood.foodY = secondGreenCharacter.characterY - 70;
}

function failScreen(wrong) {
  background(255);
  tryAgainButton.draw();
  image(sad, 600, 0);
  sad.resize(700, 0);
  push();
  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(100);
  text("Game Over!", 150, 100, 500, 100);

  textSize(25);
  if (wrong) {
    text("You served the wrong dish to a customer!", 150, 200, 500, 30);
  } else {
    text("You didn't serve the customers in time!", 150, 200, 500, 30);
  }

  text("Do you want to try again?", 150, 400, 500, 30);
  pop();
}

function winScreen() {
  background(255);
  tryAgainButton.draw();
  image(happy, 600, 0);
  happy.resize(700, 0);
  push();
  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(100);
  text("Congratulations!", 150, 100, 500, 100);
  textSize(25);
  text("You successfully served all the customers!", 150, 200, 500, 30);
  text("Do you want to play again?", 150, 400, 500, 30);
  pop();
}

let state = "start";

function draw() {
  drawGrid();

  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    // timer for seconds
    timer += 1;
    if (timer === 60) {
      seconds += 1;
      timer = 0;
    }

    newInterior.draw();

    pickUps();

    gameScreen();

    if (points === 5) {
      state = "win";
    }
  } else if (state === "rules") {
    rulesScreen();
  } else if (state === "fail") {
    failScreen(wrongFood);
  } else if (state === "win") {
    winScreen();
  }
}

window.draw = draw;

function mousePressed() {
  if (state === "start" && myButton.hitTest(mouseX, mouseY)) {
    state = "game";
  } else if (state === "start" && rulesButton.hitTest(mouseX, mouseY)) {
    state = "rules";
  } else if (state === "rules" && backButton.hitTest(mouseX, mouseY)) {
    state = "start";
  } else if (
    (state === "fail" && tryAgainButton.hitTest(mouseX, mouseY)) ||
    (state === "win" && tryAgainButton.hitTest(mouseX, mouseY))
  ) {
    state = "start";
    mainCharacter.resetting();
    redCharacter.resetting();
    secondRedCharacter.resetting();
    greenCharacter.resetting();
    secondGreenCharacter.resetting();
    blueCharacter.resetting();
    seconds = 0;
    points = 0;
    wrongFood = false;
  }
}

window.mousePressed = mousePressed;
