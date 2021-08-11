var ship, shipImg1
var sea, seaImg

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
shipImg1 = loadImage("ship-1.png");
}

function setup(){
  createCanvas(600,200);

  sea = createSprite(200,100);
  sea.addImage(seaImg);
  sea.velocityX = 0.5;
  sea.scale = 0.2;

  ship = createSprite(400,100,40,80)
  ship.addAnimation(shipImg1);
  ship.addImage(shipImg1);
  ship.scale = 0.1;
}

function draw() {
  background("blue");

  if (sea.x < 0 ) {
     sea.x = sea.width/2;
  }

  drawSprites();
}