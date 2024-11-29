let greenCharacterFront;
let greenCharacterBack;
let greenCharacterBackLF;
let greenCharacterBackRF;
let greenCharacterX = 100;
let redCharacterY = 500;
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
  greencharacterRightSideLF = loadImage("/green character/greencharacter-rightside-leftleg.png");
  greencharacterRightSideRF = loadImage("/green character/greencharacter-rightside-rightleg.png");
}

function draw() {
  background(255);

  if (redCharacterY >= 200) {
    image(greenCharacterBack, greenCharacterX, redCharacterY);
    redCharacterY = redCharacterY - 2;
  } else if (redCharacterY < 200 && greenCharacterX <= 400 && x <= 5) {
    image(greencharacterRightSideLF, greenCharacterX, redCharacterY);
    greenCharacterX += 1;
    x += 1;
  }
    else if(redCharacterY < 200 && greenCharacterX <= 400 && x > 5){
      image(greencharacterRightSideRF, greenCharacterX, redCharacterY);
      greenCharacterX += 1;
      x += 1;
    }

if (x === 10) {
      x = 0;
    }
  }
  


