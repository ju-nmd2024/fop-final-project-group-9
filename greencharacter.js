let greencharacterFront;
let greencharacterBack;
let greencharacterBackLF;
let greencharacterBackRF;
let greencharacterX = 100;
let greencharacterY = 0;
let x = 0;
let y = 0;

function preload(){
  greencharacterFront = loadImage("/green character/greencharacter-front.png");
  greencharacterBack = loadImage("/green character/greencharacter-back.png");
  greencharacterBackLF = loadImage("/green character/greencharacter-back-leftleg.png");
  greencharacterBackRF = loadImage("/green character/character-back-rightleg.png");
}


function draw() {
  background(255);
  image(greencharacterBack, greencharacterX, greencharacterY);
  greencharacterY = greencharacterY - 2;
}
