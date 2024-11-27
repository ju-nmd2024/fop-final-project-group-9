let characterFront;
let characterFrontLF;
let characterFrontRF;
let x = 0;

let characterX = 100;
let characterY = 100;

function preload() {
  characterFront = loadImage("/character/character-front.png");
  characterFrontLF = loadImage("/character/character-front move.png");
  characterFrontRF = loadImage("/character/character-front move(2).png");
}

function draw() {
  if (keyIsDown(40) && x % 4 === 0) {
    clear();
    image(characterFrontLF, characterX, characterY);
    x = x + 1;
    characterY = characterY + 2;
  } else if (keyIsDown(40)) {
    clear();
    image(characterFrontRF, characterX, characterY);
    x = x + 1;
    characterY = characterY + 2;
  }

  image(characterFront, 0, 0);
}
