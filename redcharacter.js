// https://chatgpt.com/share/67518fbd-9cf4-800b-853e-ffa2a1a43676
// Animate UP/Down, Right/Left (lines: 101-135), logical NOT operator (lines 65-67), request random food type (137-144) 
export default class RedCharacter {
  constructor(characterX, characterY) {
    this.characterX = characterX;
    this.characterY = characterY;
    this.counter = 0;

    this.firstTargetX = 350;
    this.secondTargetX = 450;
    this.firstTargetY = 300;
    this.targetY = 200;

    this.served = 0;
    this.foodNow = "none";
    this.foodRequested = false; // To track if a food request has been made
  }

  preload() {
    this.characterFront = loadImage("./red character/redcharacter-front.png");
    this.characterFrontLF = loadImage(
      "./red character/redcharacter-front-leftleg.png"
    );
    this.characterFrontRF = loadImage(
      "./red character/redcharacter-front-rightleg-.png"
    );
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
    this.characterLeftSideLF = loadImage(
      "./red character/redcharacter-leftside-leftleg.png"
    );
    this.characterLeftSideRF = loadImage(
      "./red character/redcharacter-leftside-rightleg.png"
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
    } else if (this.characterX === 450 && this.served === 0) {
      image(this.characterBack, this.characterX, this.characterY);

      if (!this.foodRequested) {
        this.requestFood();
      }
    }

    if (this.characterX <= 450 && this.characterX > 350 && this.served === 1) {
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

  resetting() {
    this.characterX = 100;
    this.characterY = 500;
    this.counter = 0;
    this.served = 0;
    this.foodNow = "none";
    this.foodRequested = false;
  }
}
