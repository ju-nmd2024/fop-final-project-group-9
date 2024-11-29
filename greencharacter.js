let greencharacterFront;
let greencharacterBack;
let greencharacterBackLF;
let greencharacterBackRF;
let greencharacterSideLeftLF;
let greencharacterSideLeftRF;
let greencharacterX = 100;
let greencharacterY = 100;


function preload(){
  greencharacterFront = loadImage("/character/greencharacter-front.png");
  greencharacterBack = loadImage("/character/greencharacter-back.png");
  greencharacterBackLF = loadImage("/character/character-back move (2).png");
  greencharacterBackRF = loadImage("/character/character-back move.png");
  characterSideRightLF = loadImage("/character/character-rightside-leftleg.png");
  characterSideRightRF = loadImage("/character/character-rightside-rightleg.png");
}


function draw() {
  background(255);
  image(greencharacterBack, greencharacterX, greencharacterY);
 }
