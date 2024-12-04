//import Food from "./food.js";

export default class GreenCharacter {
  constructor(characterX, characterY) {
    this.characterX = characterX;
    this.characterY = characterY;
    this.counter = 0;

    this.firstTargetX = 150;
    this.secondTargetX = 250;
    this.firstTargetY = 300;
    this.targetY = 200;

    this.served = 0;
    this.foodNow = "none";
    this.food = null; // Placeholder for the food object
    this.foodRequested = false; // To track if a food request has been made
  }

  preload() {
    this.characterFront = loadImage("./green character/greencharacter-front.png");
    this.characterFrontLF = loadImage(
      "./green character/greencharacter-front-leftleg.png"
    );
    this.characterFrontRF = loadImage(
      "./green character/greencharacter-front-rightleg.png"
    );
    this.characterBack = loadImage("./green character/greencharacter-back.png");
    this.characterBackLF = loadImage(
      "./green character/greencharacter-back-leftleg.png"
    );
    this.characterBackRF = loadImage(
      "./green character/greencharacter-back-rightleg.png"
    );
    this.characterRightSideLF = loadImage(
      "./green character/greencharacter-rightside-leftleg.png"
    );
    this.characterRightSideRF = loadImage(
      "./green character/greencharacter-rightside-rightleg.png"
    );
    this.characterLeftSideLF = loadImage(
      "./green character/greencharacter-leftside-leftleg.png"
    );
    this.characterLeftSideRF = loadImage(
      "./green character/greencharacter-leftside-rightleg.png"
    );
  }

  draw() {
    if (this.characterY > this.firstTargetY && this.served === 0) {
      this.animateUp();
      this.characterY -= 2;
    } else if (this.characterX < this.firstTargetX && this.served === 0) {
      this.animateRight();
      this.characterX += 1;
    } else if (this.characterY > this.targetY && this.served === 0) {
      this.animateUp();
      this.characterY -= 2;
    } else if (this.characterX < this.secondTargetX && this.served === 0) {
      this.animateRight();
      this.characterX += 1;
      // Character has stopped an requested food
    } else if (this.characterX === 250 && this.served === 0) {
      image(this.characterBack, this.characterX, this.characterY);

      if (!this.foodRequested) {
        this.requestFood();
      }
    }

    if (this.characterX <= 250 && this.characterX > 150 && this.served === 1) {
      this.animateLeft();
      this.characterX -= 1;
    } else if (
      this.characterY >= 200 &&
      this.characterY < 300 &&
      this.served === 1
    ) {
      this.animateDown();
      this.characterY += 2;
    } else if (
      this.characterX <= 350 &&
      this.characterX > 100 &&
      this.served === 1
    ) {
      this.animateLeft();
      this.characterX -= 2;
    } else if (
      this.characterY >= 300 &&
      this.characterY < 700 &&
      this.served === 1
    ) {
      this.animateDown();
      this.characterY += 1;
    }

    if (this.counter === 10) {
      this.counter = 0;
    }
  }

  animateUp() {
    if (this.counter <= 5) {
      image(this.characterBackRF, this.characterX, this.characterY);
    } else {
      image(this.characterBackLF, this.characterX, this.characterY);
    }
    this.counter++;
  }

  animateRight() {
    if (this.counter <= 5) {
      image(this.characterRightSideLF, this.characterX, this.characterY);
    } else {
      image(this.characterRightSideRF, this.characterX, this.characterY);
    }
    this.counter++;
  }

  animateDown() {
    if (this.counter <= 5) {
      image(this.characterFrontRF, this.characterX, this.characterY);
    } else {
      image(this.characterFrontLF, this.characterX, this.characterY);
    }
    this.counter++;
  }

  animateLeft() {
    if (this.counter <= 5) {
      image(this.characterLeftSideLF, this.characterX, this.characterY);
    } else {
      image(this.characterLeftSideRF, this.characterX, this.characterY);
    }
    this.counter++;
  }

  requestFood() {
    this.foodTypes = ["cookie", "steak", "glass"];
    this.randomType =
      this.foodTypes[Math.floor(Math.random() * this.foodTypes.length)];

    this.foodRequested = true;
    this.foodNow = this.randomType;
  }
}

// const redCharacter = new RedCharacter(100, 500);
// const redFood = new Food(0, 0, redCharacter.foodNow);

// function preload() {
//   redCharacter.preload();
//   redFood.preload();
// }

// function draw() {
//   background(255);
//   redCharacter.draw();
//   redFood.draw();
//   redFood.type = redCharacter.foodNow;
//   redFood.foodX = redCharacter.characterX + 60;
//   redFood.foodY = redCharacter.characterY - 80;
// }
