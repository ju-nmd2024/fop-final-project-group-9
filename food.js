export default class Food {
  constructor(foodX, foodY, type) {
    this.foodX = foodX;
    this.foodY = foodY;
    this.type = type;
  }

  preload() {
    this.cookie = loadImage("./food/cookie.png");
    this.glass = loadImage("./food/glass.png");
    this.steak = loadImage("./food/steak-14.png");
  }

  draw() {
    if (this.type === "cookie") {
      image(this.cookie, this.foodX, this.foodY);
    } else if (this.type === "steak") {
      image(this.steak, this.foodX, this.foodY);
    } else if (this.type === "glass") {
      image(this.glass, this.foodX - 5, this.foodY);
    }
  }
}
