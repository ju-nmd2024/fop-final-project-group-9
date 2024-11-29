class MainCharacter {
  constructor(characterX, characterY) {
    this.characterX = characterX;
    this.characterY = characterY;
    this.counter = 0;
    this.checkIfDown = 0;
    this.checkIfUp = 0;
  }

  preload() {
    this.characterFront = loadImage("/character/character-front.png");
    this.characterFrontLF = loadImage("/character/character-front move.png");
    this.characterFrontRF = loadImage("/character/character-front move(2).png");
    this.characterBack = loadImage("/character/character-back.png");
    this.characterBackLF = loadImage("/character/character-back move (2).png");
    this.characterBackRF = loadImage("/character/character-back move.png");
    this.characterSideRightLF = loadImage(
      "/character/character-rightside-leftleg.png"
    );
    this.characterSideRightRF = loadImage(
      "/character/character-rightside-rightleg.png"
    );
    this.characterSideLeftLF = loadImage(
      "/character/character-leftside-leftleg.png"
    );
    this.characterSideLeftRF = loadImage(
      "/character/character-leftside-rightleg.png"
    );
  }

  draw() {
    // up and down movement, with arrow keys
    if (keyIsDown(40) && this.counter <= 5) {
      image(this.characterFrontLF, this.characterX, this.characterY);
      this.counter += 1;
      this.characterY += 2;
      this.checkIfUp = 0;
      this.checkIfDown = 1;
    } else if (keyIsDown(40) && this.counter <= 10 && this.counter > 5) {
      image(this.characterFrontRF, this.characterX, this.characterY);
      this.characterY += 2;
      this.counter += 1;
      this.checkIfUp = 0;
      this.checkIfDown = 1;
    } else if (keyIsDown(38) && this.counter <= 5) {
      image(this.characterBackRF, this.characterX, this.characterY);
      this.counter += 1;
      this.characterY -= 2;
      this.checkIfUp = 1;
      this.checkIfDown = 0;
    } else if (keyIsDown(38) && this.counter <= 10 && this.counter > 5) {
      image(this.characterBackLF, this.characterX, this.characterY);
      this.characterY -= 2;
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
      if (keyIsDown(39) && this.counter <= 5) {
        image(this.characterSideRightLF, this.characterX, this.characterY);
        this.counter += 1;
        this.characterX += 2;
      } else if (keyIsDown(39) && this.counter <= 10 && this.counter > 5) {
        image(this.characterSideRightRF, this.characterX, this.characterY);
        this.characterX += 2;
        this.counter += 1;
      } else if (keyIsDown(37) && this.counter <= 5) {
        image(this.characterSideLeftRF, this.characterX, this.characterY);
        this.counter += 1;
        this.characterX -= 2;
      } else if (keyIsDown(37) && this.counter <= 10 && this.counter > 5) {
        image(this.characterSideLeftLF, this.characterX, this.characterY);
        this.characterX -= 2;
        this.counter += 1;
      }
    }

    // resets the value to start over with pictures
    if (this.counter === 10) {
      this.counter = 0;
    }
  }
}

function preload() {
  mainCharacter.preload();
}

const mainCharacter = new MainCharacter(0, 0);

function draw() {
  background(255);
  mainCharacter.draw(0, 0);
}
