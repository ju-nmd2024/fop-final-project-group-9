export default class Interior {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  preload() {
    this.sofa = loadImage("./graphics/big-sofa.png");
    this.carpet = loadImage("./graphics/carpet-05.png");
    this.fireplace = loadImage("./graphics/fireplace-04.png");
    this.fridge = loadImage("./graphics/fridge-12.png");
    this.stove = loadImage("./graphics/stove-13.png");
    this.lamp = loadImage("./graphics/lamp.png");
    this.lampFront = loadImage("./graphics/lamp2.png");
    this.table = loadImage("./graphics/table.png");
    this.smallSofaUp = loadImage("./graphics/small-sofa(up)-02.png");
    this.smallSofaDown = loadImage("./graphics/small-sofa(down)-03.png");
    this.plant = loadImage("./graphics/plant.png");
    this.sink = loadImage("./graphics/sink-14.png");
    this.counter = loadImage("./graphics/counter-15.png");
    this.floor = loadImage("./graphics/floor-16.png");
  }

  draw() {
    push();
    translate(this.x, this.y);
    background(200);
    stroke(180, 80, 80);
    strokeWeight(5);
    fill(200, 100, 100);
    rect(0, 0, 1250, 150);
    image(this.floor, 795, 200);
    image(this.floor, 1090, 200);
    image(this.fireplace, 200, 0);
    image(this.sofa, -30, 200);
    image(this.carpet, 195, 560);
    image(this.fridge, 625, 0);
    fill(190, 90, 90);
    rect(750, 0, 45, 500);
    image(this.stove, 975, 0);
    image(this.lamp, 250, 448);
    image(this.lamp, 50, 445);
    image(this.lampFront, 4, -171);
    image(this.lampFront, 345, -171);
    image(this.smallSofaDown, 404, 368);
    image(this.smallSofaUp, 400, 197);
    image(this.plant, -10, 10);
    image(this.plant, 280, 10);
    image(this.table, 306, 125);
    image(this.table, 5, 125);
    image(this.smallSofaDown, 600, 368);
    image(this.smallSofaUp, 596, 197);
    image(this.table, 505, 125);
    image(this.sink, 725, 0);
    image(this.counter, 970, 0);
    this.fireplace.resize(200, 0);
    this.sofa.resize(200, 0);
    this.smallSofaUp.resize(110, 0);
    this.smallSofaDown.resize(100, 0);
    this.table.resize(280, 0);
    pop();
  }
}
