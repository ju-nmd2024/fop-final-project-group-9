let characterFront;
let characterFrontLF;
let characterFrontRF;

let characterBack;
let characterBackLF;
let characterBackRF;

let characterSideRightLF;
let characterSideRightRF;

let characterSideLeftLF;
let characterSideLeftRF;

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
  characterSideRightLF = loadImage(
    "/character/character-rightside-leftleg.png"
  );
  characterSideRightRF = loadImage(
    "/character/character-rightside-rightleg.png"
  );
  characterSideLeftLF = loadImage("/character/character-leftside-leftleg.png");
  characterSideLeftRF = loadImage("/character/character-leftside-rightleg.png");
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
  } else if (
    checkIfUp === 1 &&
    keyIsDown(39) === false &&
    keyIsDown(37) === false
  ) {
    image(characterBack, characterX, characterY);
  } else if (
    checkIfDown === 1 &&
    keyIsDown(39) === false &&
    keyIsDown(37) === false
  ) {
    image(characterFront, characterX, characterY);
  }

  if (keyIsDown(38) === false && keyIsDown(40) === false) {
    if (keyIsDown(39) && x <= 5) {
      image(characterSideRightLF, characterX, characterY);
      x = x + 1;
      characterX = characterX + 2;
    } else if (keyIsDown(39) && x <= 10 && x > 5) {
      image(characterSideRightRF, characterX, characterY);
      characterX = characterX + 2;
      x = x + 1;
    } else if (keyIsDown(37) && x <= 5) {
      image(characterSideLeftRF, characterX, characterY);
      x = x + 1;
      characterX = characterX - 2;
    } else if (keyIsDown(37) && x <= 10 && x > 5) {
      image(characterSideLeftLF, characterX, characterY);
      characterX = characterX - 2;
      x = x + 1;
    }
  }

  if (x === 10) {
    x = 0;
  }
}
