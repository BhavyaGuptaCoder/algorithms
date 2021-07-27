var fixedRect;
var movingRect;
var object3;
var object1,object2;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "yellow";

  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "yellow";

  object1 = createSprite(500,200,50,50)
  object1.shapeColor = "yellow"
  object1.velocityX = 4;

  object2 = createSprite(700,200,50,50)
  object2.shapeColor = "yellow"
  
}

function draw() {
  background(20);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if (isTouching(object1,movingRect)){
    object1.shapeColor="cyan";
  }
  else {
    object1.shapeColor="yellow";
  }
  if (isTouching(object2,movingRect)){
    object2.shapeColor="cyan";
  }
  else {
    object2.shapeColor="yellow";
  }

  bounceOff(object1,fixedRect)

  bounceOff(object1,object2);

  drawSprites();
}



