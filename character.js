export default class MainCharacter {
  constructor(characterX, characterY) {
    this.characterX = characterX;
    this.characterY = characterY;
    this.counter = 0;
    this.checkIfDown = 1;
    this.checkIfUp = 0;
    this.foodState = "no";
    this.powerUp = 1;
    this.borderX = 1000;
    this.borderY = 450;
    this.movingLeft = true;
    this.movingRight = true;
    this.movingUp = true;
    this.movingDown = true;
  }

  preload() {
    this.characterFront = loadImage("./character/character-front.png");
    this.characterFrontLF = loadImage("./character/character-front move.png");
    this.characterFrontRF = loadImage("./character/character-front move(2).png");
    this.characterBack = loadImage("./character/character-back.png");
    this.characterBackLF = loadImage("./character/character-back move (2).png");
    this.characterBackRF = loadImage("./character/character-back move.png");
    this.characterSideRightLF = loadImage(
      "./character/character-rightside-leftleg.png"
    );
    this.characterSideRightRF = loadImage(
      "./character/character-rightside-rightleg.png"
    );
    this.characterSideLeftLF = loadImage(
      "./character/character-leftside-leftleg.png"
    );
    this.characterSideLeftRF = loadImage(
      "./character/character-leftside-rightleg.png"
    );
  }

  draw() {
    if (
      (this.characterX < -150 && keyIsDown(37)) ||
      (this.characterX > 600 &&
        this.characterX < 630 &&
        keyIsDown(37) &&
        this.characterY < 300)
    ) {
      this.movingLeft = false;
      image(this.characterFront, this.characterX, this.characterY);
    } else {
      this.movingLeft = true;
    }

    if (
      (this.characterX > this.borderX && keyIsDown(39)) ||
      (this.characterX > 500 &&
        this.characterX < 550 &&
        keyIsDown(39) &&
        this.characterY < 300)
    ) {
      this.movingRight = false;
      image(this.characterFront, this.characterX, this.characterY);
    } else {
      this.movingRight = true;
    }

    if (
      (this.characterY < 0 && keyIsDown(38) && this.characterX > 600) ||
      (this.characterX < 600 && this.characterY < -50 && keyIsDown(38)) ||
      (this.characterX > 520 &&
        this.characterX < 590 &&
        this.characterY < 300 &&
        keyIsDown(38))
    ) {
      this.movingUp = false;
      image(this.characterBack, this.characterX, this.characterY);
    } else {
      this.movingUp = true;
    }

    if (this.characterY >= this.borderY && keyIsDown(40)) {
      this.movingDown = false;
      image(this.characterFront, this.characterX, this.characterY);
    } else {
      this.movingDown = true;
    }

    if (keyIsDown(40) && this.counter <= 10 && this.movingDown === true) {
      // up and down movement, with arrow keys
      image(this.characterFrontLF, this.characterX, this.characterY);
      this.counter += 1;
      this.characterY += 2 * this.powerUp;
      this.checkIfUp = 0;
      this.checkIfDown = 1;
    } else if (keyIsDown(40) && this.counter > 10 && this.movingDown === true) {
      image(this.characterFrontRF, this.characterX, this.characterY);
      this.characterY += 2 * this.powerUp;
      this.counter += 1;
      this.checkIfUp = 0;
      this.checkIfDown = 1;
    } else if (keyIsDown(38) && this.counter <= 10 && this.movingUp === true) {
      image(this.characterBackRF, this.characterX, this.characterY);
      this.counter += 1;
      this.characterY -= 2 * this.powerUp;
      this.checkIfUp = 1;
      this.checkIfDown = 0;
    } else if (keyIsDown(38) && this.counter > 10 && this.movingUp === true) {
      image(this.characterBackLF, this.characterX, this.characterY);
      this.characterY -= 2 * this.powerUp;
      this.counter += 1;
      this.checkIfUp = 1;
      this.checkIfDown = 0;
    } else if (
      this.checkIfUp === 1 &&
      keyIsDown(39) === false &&
      keyIsDown(37) === false
    ) {
      image(this.characterBack, this.characterX, this.characterY);
      // if the last picture shown was Up, this will be shown when stopping
    } else if (
      this.checkIfDown === 1 &&
      keyIsDown(39) === false &&
      keyIsDown(37) === false
    ) {
      image(this.characterFront, this.characterX, this.characterY);
      // if the last picture shown was Down, this will be shown when stopping
    }

    // if the up and down isn't used, you can move sideways with the left & right arrow keys
    if (keyIsDown(38) === false && keyIsDown(40) === false) {
      if (keyIsDown(39) && this.counter <= 10 && this.movingRight === true) {
        image(this.characterSideRightLF, this.characterX, this.characterY);
        this.counter += 1;
        this.characterX += 2 * this.powerUp;
      } else if (
        keyIsDown(39) &&
        this.counter > 10 &&
        this.movingRight === true
      ) {
        image(this.characterSideRightRF, this.characterX, this.characterY);
        this.characterX += 2 * this.powerUp;
        this.counter += 1;
      } else if (
        keyIsDown(37) &&
        this.counter <= 10 &&
        this.movingLeft === true
      ) {
        image(this.characterSideLeftRF, this.characterX, this.characterY);
        this.counter += 1;
        this.characterX -= 2 * this.powerUp;
      } else if (
        keyIsDown(37) &&
        this.counter > 10 &&
        this.movingLeft === true
      ) {
        image(this.characterSideLeftLF, this.characterX, this.characterY);
        this.characterX -= 2 * this.powerUp;
        this.counter += 1;
      }
    }

    // resets the value to start over with pictures
    if (this.counter === 20) {
      this.counter = 0;
    }
  }

  keyTyped() {
    if (keyCode === 69 && this.characterY < 50 && this.characterY > 0) {
      if (this.characterX >= 800 && this.characterX < 930) {
        this.foodState = "cookie";
      } else if (this.characterX > 950) {
        this.foodState = "steak";
      } else if (this.characterX >= 700 && this.characterX < 770) {
        this.foodState = "glass";
      }
    }
  }
  resetting() {
    this.characterX = 700;
    this.characterY = 250;
    this.counter = 0;
    this.checkIfDown = 1;
    this.checkIfUp = 0;
    this.foodState = "no";
    this.powerUp = 1;
  }
}
