let sofa;
let carpet;
let fireplace;
let fridge;
let stove;
let lamp;
let lampFront;
let table;
let smallSofaUp;
let smallSofaDown;
let plant;
let sink;
let counter;

const gridLength = 25;
const gridHeight = 13;
const gridSize = 50;

function setup() {
  createCanvas(1250, 650);
}

window.setup = setup;

function preload() {
  sofa = loadImage("/graphics/big-sofa.png");
  carpet = loadImage("/graphics/carpet-05.png");
  fireplace = loadImage("/graphics/fireplace-04.png");
  fridge = loadImage("/graphics/fridge-12.png");
  stove = loadImage("/graphics/stove-13.png");
  lamp = loadImage("/graphics/lamp.png");
  lampFront = loadImage("/graphics/lamp2.png");
  table = loadImage("/graphics/table.png");
  smallSofaUp = loadImage("/graphics/small-sofa(up)-02.png");
  smallSofaDown = loadImage("/graphics/small-sofa(down)-03.png");
  plant = loadImage("/graphics/plant.png");
  sink = loadImage("/graphics/sink-14.png");
  counter = loadImage("/graphics/counter-15.png");
}

window.preload = preload;

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

export default class Interior {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    push();
    translate(this.x, this.y);
    background(145, 146, 143);
    noStroke();
    fill(200, 100, 100);
    rect(0, 0, 1250, 150);
    fill(0);
    rect(750, 0, 50, 500);
    image(fireplace, 200, 0);
    image(sofa, -30, 200);
    image(carpet, 195, 560);
    image(fridge, 625, 0);
    image(stove, 975, 0);
    image(lamp, 250, 448);
    image(lamp, 50, 445);
    image(lampFront, 4, -171);
    image(lampFront, 345, -171);
    image(smallSofaDown, 404, 368);
    image(smallSofaUp, 400, 197);
    image(plant, -10, 10);
    image(plant, 280, 10);
    image(table, 306, 125);
    image(table, 5, 125);
    image(smallSofaDown, 600, 368);
    image(smallSofaUp, 596, 197);
    image(table, 505, 125);
    image(sink, 725, 0);
    image(counter, 970, 0);
    fireplace.resize(200, 0);
    sofa.resize(200, 0);
    smallSofaUp.resize(110, 0);
    smallSofaDown.resize(100, 0);
    table.resize(280, 0);
    pop();
  }
}

const interior = new Interior(0, 0);

function draw() {
  interior.draw();
  drawGrid();
}

window.draw = draw;
