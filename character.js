let characterFront;
let characterFrontLF;
let characterFrontRF;

let characterBack;
let characterBackLF;
let characterBackRF;

let x = 0;
let checkIfUp = 0;
let checkIfDown = 0;

let characterX = 100;
let characterY = 100;

function preload() {
  characterFront = loadImage("/character/character-front.png");
  characterFrontLF = loadImage("/character/character-front move.png");
  characterFrontRF = loadImage("/character/character-front move(2).png");
  characterBack = loadImage("/character/character-back.png");
  characterBackLF = loadImage("/character/character-back move (2).png");
  characterBackRF = loadImage("/character/character-back move.png");
}

function draw() {
  background(255);

  if (keyIsDown(40) && x <= 5) {
    image(characterFrontLF, characterX, characterY);
    x = x + 1;
    characterY = characterY + 2;
    checkIfUp = 0;
    checkIfDown = 1;
  } else if (keyIsDown(40) && x <= 10 && x > 5) {
    image(characterFrontRF, characterX, characterY);
    characterY = characterY + 2;
    x = x + 1;
    checkIfUp = 0;
    checkIfDown = 1;
  } else if (keyIsDown(38) && x <= 5) {
    image(characterBackRF, characterX, characterY);
    x = x + 1;
    characterY = characterY - 2;
    checkIfUp = 1;
    checkIfDown = 0;
  } else if (keyIsDown(38) && x <= 10 && x > 5) {
    image(characterBackLF, characterX, characterY);
    characterY = characterY - 2;
    x = x + 1;
    checkIfUp = 1;
    checkIfDown = 0;
  } else if (checkIfUp === 1) {
    image(characterBack, characterX, characterY);
  } else if (checkIfDown === 1) {
    image(characterFront, characterX, characterY);
  }

  if (x === 10) {
    x = 0;
  }
}
