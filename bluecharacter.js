export default class BlueCharacter {
  constructor(characterX, characterY) {
    this.characterX = characterX;
    this.characterY = characterY;
    this.counter = 0;
  
      this.targetY = 200;
      this.targetX = 100;
  
      this.served = 0;
      this.foodNow = "none";
      this.food = null; // Placeholder for the food object
      this.foodRequested = false; // To track if a food request has been made
    }

  preload() {
    this.characterFront = loadImage("./blue character/bluecharacter-front.png");
    this.characterFrontLF = loadImage("./blue character/bluecharacter-front-leftleg.png");
    this.characterFrontRF = loadImage("./blue character/bluecharacter-front-rightleg.png");
    this.characterBack = loadImage("./blue character/bluecharacter-back.png");
    this.characterBackLF = loadImage("./blue character/bluecharacter-back-leftleg.png");
    this.characterBackRF = loadImage("./blue character/bluecharacter-back-rightleg.png");
    this.characterRightSideLF = loadImage("./blue character/bluecharacter-rightside-leftleg.png");
    this.characterRightSideRF = loadImage("./blue character/bluecharacter-rightside-rightleg.png");
    this.characterLeftSideLF = loadImage("./blue character/bluecharacter-leftleg.png");
    this.characterLeftSideRF = loadImage("./blue character/bluecharacter-leftside-rightleg.png");
  }

  draw() {
    if (this.characterY > this.targetY && this.served === 0) {
      this.animateUp();
      this.characterY -=2;
    } else if (this.characterX <= this.targetX && this.served === 0){
        this.animateLeft();
        this.characterX -=2;
    } else if (this.characterX === 0 && this.served === 0) {
        image (this.characterBack, this.characterX, this.characterY);

      if (!this.foodRequested) {
          this.requestFood();
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
