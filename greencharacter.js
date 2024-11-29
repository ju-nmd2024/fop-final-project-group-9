class GreenCharacter {
  constructor(characterX, characterY) {
    this.characterX = characterX; // X position
    this.characterY = characterY; // Y position
    this.counter = 0; // Animation frame counter
  }

  preload() {
    // Load all images
    this.characterFront = loadImage("/green character/greencharacter-front.png");
    this.characterBack = loadImage("/green character/greencharacter-back.png");
    this.characterBackLF = loadImage(
      "/green character/greencharacter-back-leftleg.png"
    );
    this.characterBackRF = loadImage(
      "/green character/greencharacter-back-rightleg.png"
    );
    this.characterRightSideLF = loadImage(
      "/green character/greencharacter-rightside-leftleg.png"
    );
    this.characterRightSideRF = loadImage(
      "/green character/greencharacter-rightside-rightleg.png"
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

    // Moving RIGHT
    else if (this.characterX <= 400) {
      if (this.counter <= 5) {
        image(this.characterRightSideLF, this.characterX, this.characterY); // Left leg
      } else {
        image(this.characterRightSideRF, this.characterX, this.characterY); // Right leg
      }
      this.characterX += 1;
      this.counter++;
    }

    // Reset counter after every animation cycle
    if (this.counter === 10) {
      this.counter = 0;
    }
  }
}


const greenCharacter = new GreenCharacter(100, 500);

function preload() {
  greenCharacter.preload(); 
}

function draw() {
  background(255); 
  greenCharacter.draw(); 
}
