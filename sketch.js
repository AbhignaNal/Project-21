var bullet, wall;
var speed, weight, thickness;

function setup() {
speed = random(32, 52);
weight = random(223, 321);
thickness = random(22, 83);

  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  
  bullet = createSprite(50, 200, 75, 50);
  bullet.shapeColor = color(255, 255, 255);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  bullet.velocityX = speed;
}

function draw() {
  background(0);  
  drawSprites();

  if(hascollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if(damage > 10){
      bullet.shapeColor = color(255, 0, 0);
    }
    if(damage < 10){
      bullet.shapeColor = color(0, 255, 0);
    }
  }
}

function hascollided(lbullet, lwall){
  bulletLeftEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletLeftEdge>=wallLeftEdge){
    return true;
  }
  return false;
}