var fixed, moving;

function setup() {
  createCanvas(600,400);
  fixed = createSprite(300, 200, 50, 50);
  fixed.shapeColor = "red";
  moving = createSprite(300,200, 50, 50);
  moving.shapeColor = "red";
}

function draw() {
  background(255,255,255); 
  moving.x = World.mouseX;
  moving.y = World.mouseY; 
  isTouching();
  drawSprites();
}

function isTouching()
{
  if (fixed.x - moving.x <= fixed.width/2 + moving.width/2
    && moving.x - fixed.x <= fixed.width/2 + moving.width/2
    && fixed.y - moving.y <= fixed.height/2 + moving.height/2
    && moving.y - fixed.y <= fixed.height/2 + moving.height/2)
  {
    fixed.shapeColor = "blue";
    moving.shapeColor = "blue";
  } 
  else {
    fixed.shapeColor = "red";
    moving.shapeColor = "red";
  }
}