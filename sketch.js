//var ball, ballImg;
let blocks = [];

function preload() {
  ballImg = loadImage('ball.jpg');
  trexAnimation = loadAnimation('trex_1.png', 'trex_2.png', 'trex_3.png');
}

function setup() {
  createCanvas(800, 400);
  //ball = createSprite(400, 200, 50, 50);
  //ball.addImage(ballImg);
  //ball.scale = 0.25;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function mouseClicked() {
  trex = createSprite(400, 200, 50, 50);
  trex.addAnimation("running", trexAnimation);
}