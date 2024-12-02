import Food from "./food.js";

export default class RedCharacter {
  constructor(characterX, characterY) {
    this.characterX = characterX;
    this.characterY = characterY;
    this.counter = 0;

    this.firstTargetX = 350;
    this.secondTargetX = 450;
    this.firstTargetY = 300;
    this.targetY = 200;

    this.food = null; // Placeholder for the food object
    this.foodRequested = false; // To track if a food request has been made
  }

  preload() {
    this.characterFront = loadImage("./red character/redcharacter-front.png");
    this.characterBack = loadImage("./red character/redcharacter-back.png");
    this.characterBackLF = loadImage(
      "./red character/redcharacter-back-leftleg.png"
    );
    this.characterBackRF = loadImage(
      "./red character/redcharacter-back-rightleg.png"
    );
    this.characterRightSideLF = loadImage(
      "./red character/redcharacter-righside-leftleg.png"
    );
    this.characterRightSideRF = loadImage(
      "./red character/redcharacter-rightside-rightleg.png"
    );

    this.cookie = loadImage("/food/cookie.png");
    this.glass = loadImage("/food/glass.png");
    this.steak = loadImage("/food/steak-14.png");
  }

  draw() {
    if (this.characterY > this.firstTargetY) {
      this.animateUp();
      this.characterY -= 2;
    } else if (this.characterX < this.firstTargetX) {
      this.animateRight();
      this.characterX += 1;
    } else if (this.characterY > this.targetY) {
      this.animateUp();
      this.characterY -= 2;
    } else if (this.characterX < this.secondTargetX) {
      this.animateRight();
      this.characterX += 1;
      // Character has stopped an requested food
    } else {
      image(this.characterBack, this.characterX, this.characterY);

      if (!this.foodRequested) {
        this.requestFood();
      }

      // Display food
      if (this.food) {
        this.food.draw();
      }
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

  requestFood() {
    const foodTypes = ["cookie", "steak", "glass"];
    const randomType = foodTypes[Math.floor(Math.random() * foodTypes.length)];

    // Instantiate a new Food object
    this.food = new Food(this.characterX + 50, this.characterY, randomType);
    this.food.preload();
    this.foodRequested = true;
  }
}
