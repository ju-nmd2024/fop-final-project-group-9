let sofa;
let carpet;
let fireplace;
let fridge;

function setup() {
  createCanvas(1000, 600);
}

function preload() {
  sofa = loadImage("/graphics/big-sofa.png");
  carpet = loadImage("/graphics/carpet-05.png");
  fireplace = loadImage("/graphics/fireplace-04.png");
  fridge = loadImage("/graphics/fridge-12.png");
}

class Interior {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    push();
    translate(this.x, this.y);
    background(255);
    noStroke();
    fill(200, 100, 100);
    rect(0, 0, 1000, 150);
    //image(fireplace, 180, -80);
    image(sofa, -30, 110);
    image(carpet, 150, 520);
    image(fridge, 300, 0);

    pop();
  }
}

const interior = new Interior(0, 0);

function draw() {
  interior.draw();
}
