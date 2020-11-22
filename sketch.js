var movingRect, fixedRect;
var rect1;
var block1, block2;
var result1, result2;

function setup() {
  createCanvas(800, 800);
  fixedRect = createSprite(400, 200, 20, 20);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;

  movingRect = createSprite(200, 200, 40, 40);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

  rect1 = createSprite(400, 300, 40, 40);
  rect1.shapeColor = "red";
  rect1.debug = true;

  block1 = createSprite(200, 600, 40, 40);
  block1.shapeColor = "white";
  block1.velocityX = 2;

  block2 = createSprite(600, 600, 60, 60);
  block2.shapeColor = "yellow";
  block2.velocityX = -2;
}

function draw() {
  background("black");

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  result1 = checkContact(movingRect, fixedRect);

  console.log(result1);
  if (result1 === true) {
    fixedRect.shapeColor = "white";
  } else {
    fixedRect.shapeColor = "green";
  }

  result2 = checkContact(movingRect, rect1);
  if (result2 === true) {
    rect1.shapeColor = "pink";
  } else {
    rect1.shapeColor = "green";
  }

  bounceOff(block1,block2);
  drawSprites();
}

function checkContact(object1, object2) {
  if (object1.x - object2.x <= object1.width / 2 + object2.width / 2
    && object2.x - object1.x <= object1.width / 2 + object2.width / 2
    && object1.y - object2.y <= object1.height / 2 + object2.height / 2
    && object2.y - object1.y <= object1.height / 2 + object2.height / 2) {
    return true;
  }
  else {
    return false;
  }
}

function bounceOff(object1, object2) {
  if (object1.x - object2.x < object2.width / 2 + object1.width / 2
    && object2.x - object1.x < object2.width / 2 + object1.width / 2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height / 2 + object1.height / 2
    && object2.y - object1.y < object2.height / 2 + object1.height / 2) {
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }

}