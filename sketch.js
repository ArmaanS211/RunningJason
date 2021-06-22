var runner, runnerAnimation;
var path, pathImage;

var left, right;

function preload(){
  runnerAnimation = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  path = createSprite(200, 200);
  path.addImage("pathm", pathImage);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(200, 300, 50, 100);
  runner.addAnimation("running", runnerAnimation);
  runner.scale = 0.05;

  left = createSprite(-50, 10, 200, 800);
  left.visible = false;
  right = createSprite(400, 10, 50, 800);
  right.visible = false;
  
}

function draw() {
  background(0);


  if(path.y > 400){
    path.y = path.height/4;
  }

  runner.x = mouseX;

  runner.collide(left);
  runner.collide(right);

  drawSprites();

}
