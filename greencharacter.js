export default class GreenCharacter {
  constructor(characterX, characterY) {
    this.characterX = characterX;
    this.characterY = characterY;
    this.counter = 0;
    this.targetX = 240; // The X position where the character should stop
  }

  preload() {
    this.characterFront = loadImage(
      "./green character/greencharacter-front.png"
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
  }

  draw() {
    // Moving UP
    if (this.characterY >= 200) {
      if (this.counter <= 5) {
        image(this.characterBackRF, this.characterX, this.characterY); // Right leg
      } else {
        image(this.characterBackLF, this.characterX, this.characterY); // Left leg
      }
      this.characterY -= 2;
      this.counter++;
    }

    // Moving RIGHT until it reaches the targetX
    else if (this.characterX < this.targetX) {
      if (this.counter <= 5) {
        image(this.characterRightSideLF, this.characterX, this.characterY);
      } else {
        image(this.characterRightSideRF, this.characterX, this.characterY);
      }
      this.characterX += 1; // Move the character to the right
      this.counter++;
    } else {
      // Once the character reaches the targetX, stop and show the backside view
      if (this.counter <= 5) {
        image(this.characterBack, this.characterX, this.characterY);
      }
    }

    // Reset counter after every animation cycle
    if (this.counter === 10) {
      this.counter = 0;
    }
  }
}

// let greenCharacter;

// function preload() {
//   greenCharacter = new GreenCharacter(100, 500);
//   greenCharacter.preload();
// }

// function setup() {
//   createCanvas(800, 600);
// }

// function draw() {
//   background(255);
//   greenCharacter.draw();
// }
