var spaceship;
var bg;
var spacecraft;
function preload(){
 bg = loadImage("Docking-undocking img/Docking-undocking/spacebg.png");
 spaceship = loadImage("Docking-undocking img/Docking-undocking/iss.png")
 spacecraft = loadImage("Docking-undocking img/Docking-undocking/spacecraft1.png")

};
function setup() {
  createCanvas(800,400);
  spaceship = createSprite(400, 200, 100, 100);
 spacecraft = createSprite(500, 100, 20, 20);

}

function draw() {
  creatcanvas(bg)
  background(bg); 
  spacecraft.x = spacecraft.x + random(+1,-1)
  drawSprites();

if(spacecrart.y<=(spaceship.y+70)&&spacecraft.x<=(spaceship.x-10)){
 hasDocked = true;
textSize(25);
fill("white")
text("Docking Succesful,200,300");

}
if(keyDown(keyDown(UP_ARROW))){
  spacecraft.velocityY= +2;
}

if(keyDown(keyDown(DOWN_ARROW))){
  spacecraft.velocityY= +2;
}
if(keyDown(keyDown(RIGHT_ARROW))){
  spacecraft.velocityX=  +2;
}
if(keyDown(keyDown(LEFT_ARROW))){
  spacecraft.velocityY= -2;
}
}