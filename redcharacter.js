let redCharacterFront;
let redCharacterBack;
let redCharacterBackLF;
let redCharacterBackRF;
let redCharacterX = 100;
let redCharacterY = 500;
let x = 0;
let y = 0;

function preload() {
  redCharacterFront = loadImage("/red character/redcharacter-front.png");
  redCharacterBack = loadImage("/red character/redcharacter-back.png");
  redCharacterBackLF = loadImage(
    "/red character/redcharacter-back-leftleg.png"
  );
  redCharacterBackRF = loadImage(
    "/red character/redcharacter-back-rightleg.png"
  );
  redCharacterRightSideLF = loadImage("/red character/redcharacter-rightside-leftleg.png");
  redCharacterRightSideRF = loadImage("/red character/redcharacter-rightside-rightleg.png");
}

function draw() {
  background(255);

  if (redCharacterY >= 200) {
    image(redCharacterBack, redCharacterX, redCharacterY);
    redCharacterY = redCharacterY - 2;
  } else if (redCharacterY < 200 && redCharacterX <= 400 && x <= 5) {
    image(redcharacterRightSideLF, redCharacterX, redCharacterY);
    redCharacterX += 1;
    x += 1;
  }
    else if(redCharacterY < 200 && redCharacterX <= 400 && x > 5){
      image(redcharacterRightSideRF, redCharacterX, redCharacterY);
      redCharacterX += 1;
      x += 1;
    }

if (x === 10) {
      x = 0;
    }
  }
  


