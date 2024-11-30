function setup() {
  createCanvas(1250, 650);
}

class Food {
  constructor(foodX, foodY, type) {
    this.foodX = foodX;
    this.foodY = foodY;
    this.type = type;
  }

  preload() {
    this.cookie = loadImage("/food/cookie.png");
    this.glass = loadImage("/food/glass.png");
    this.steak = loadImage("/food/steak-14.png");
  }

  draw() {
    if (keyCode === 13) {
      if (this.type === "cookie") {
        image(this.cookie, this.foodX - 154, this.foodY - 124);
      } else if (this.type === "steak") {
        image(this.steak, this.foodX, this.foodY);
      } else if (this.type === "glass") {
        image(this.glass, this.foodX, this.foodY);
      }
    }
  }
}

const food = new Food(1000, 200, "cookie");

function preload() {
  food.preload();
}

function draw() {
  background(255);
  food.draw();
}
