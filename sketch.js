var bullet, speed, weight;
var wall, thickness;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,20,15);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  bullet.velocityX = speed;
  bullet.shapeColor = ("white");
  
  thickness = Math.round(random(22,83));

}

function draw() {
  background("black");  

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    
    var deformation = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if(deformation>10){
      bullet.shapecolor=("red");
    }
    if(deformation<10){
    bullet.shapeColor = ("green");
    }
  }
  bullet.collide(wall);

  drawSprites();
}