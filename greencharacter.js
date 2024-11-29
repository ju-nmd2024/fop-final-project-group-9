let greenCharacterFront;
let greenCharacterBack;
let greenCharacterBackLF;
let greenCharacterBackRF;
let greenCharacterX = 100;
let greenCharacterY = 500;
let x = 0;
let y = 0;

function preload() {
  greenCharacterFront = loadImage("/green character/greencharacter-front.png");
  greenCharacterBack = loadImage("/green character/greencharacter-back.png");
  greenCharacterBackLF = loadImage(
    "/green character/greencharacter-back-leftleg.png"
  );
  greenCharacterBackRF = loadImage(
    "/green character/character-back-rightleg.png"
  );
}

function draw() {
  background(255);

  if (greenCharacterY >= 200) {
    image(greenCharacterBack, greenCharacterX, greenCharacterY);
    greenCharacterY = greenCharacterY - 2;
  } else if (greenCharacterY < 200 && greenCharacterX <= 400) {
    image(greenCharacterFront, greenCharacterX, greenCharacterY);
    greenCharacterX += 1;
  } else {
    image(greenCharacterFront, greenCharacterX, greenCharacterY);
  }
}
