class RedCharacter {
  constructor(characterX, characterY) {
    this.characterX = characterX; 
    this.characterY = characterY; 
    this.counter = 0; 
    this.targetX = 200; // The X position where the character should stop
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
      "./red character/redcharacter-rightside-leftleg.png"
    );
    this.characterRightSideRF = loadImage(
      "./red character/redcharacter-rightside-rightleg-28.png"
    );
  }

  draw() {
    // Moving UP
    if (this.characterY >= 200) {
      if (this.counter <= 5) {
        image(this.characterBackRF, this.characterX, this.characterY); 
      } else {
        image(this.characterBackLF, this.characterX, this.characterY);
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


let redCharacter;

function preload() {
  redCharacter = new RedCharacter(100, 500);
  redCharacter.preload();
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  redCharacter.draw();
}
