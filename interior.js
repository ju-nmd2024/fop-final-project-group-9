let sofa;
let carpet;
let fireplace;
let fridge;
const gridLength = 25;
const gridHeight = 13;
const gridSize = 50;

function setup() {
  createCanvas(1250, 650);
}

function preload() {
  sofa = loadImage("/graphics/big-sofa.png");
  carpet = loadImage("/graphics/carpet-05.png");
  fireplace = loadImage("/graphics/fireplace-04.png");
  fridge = loadImage("/graphics/fridge-12.png");

}
function drawGrid() {
  push();
  stroke(255, 255, 255);
  noFill();
  for (let x = 0; x < gridLength; x++) {
    for (let y = 0; y < gridHeight; y++) {
      rect(x * gridSize, y * gridSize, gridSize, gridSize);
    }
  }
  pop();
}



class Interior {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  draw() {
    push();
    translate(this.x, this.y);
    background(145, 46, 43);
    noStroke();
    fill(200, 100, 100);
    rect(0, 0, 1250, 150);
    fill(0);
    rect(750, 0, 20, 430);
    fill(0);
    image(fireplace, 200, 0);
    image(sofa, -30, 110);
    image(carpet, 150, 520);
    image(fridge, 625, 0);
    fireplace.resize(200, 0);
    sofa.resize(200,0);
    pop();
  }
}

const interior = new Interior(0, 0);

function draw() {
  background(245, 78, 132);
  interior.draw();
  drawGrid();
}
