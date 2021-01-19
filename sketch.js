var fixedRect, movingRect,loot;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  loot=createSprite(200,100,60,60);
  loot.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  drawSprites();
 if( isTouching(movingRect,loot)){
movingRect.shapeColor="red";
loot.shapeColor="red";
 }else{
   movingRect.shapeColor="green";
   loot.shapeColor="green";
 }
}


