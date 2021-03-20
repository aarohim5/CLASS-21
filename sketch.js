
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;

  fixedRect = createSprite(400, 100, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 5;
  
  
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(isTouching()){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }
 

bounceOff(movingRect,fixedRect);
  drawSprites();
}




