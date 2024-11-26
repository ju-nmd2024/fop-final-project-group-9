let sofa;
let carpet;

function setup() {
  createCanvas(1000, 600);
}

function preload() {
  sofa = loadImage("/graphics/big-sofa.png");
  carpet = loadImage("/graphics/carpet-05.png");
}

class Interior {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    push();
    translate(this.x, this.y);
    image(sofa, -10, 100);
    image(carpet, 150, 500);

    pop();
  }
}

const interior = new Interior(0, 0);
