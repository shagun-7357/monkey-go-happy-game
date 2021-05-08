
var monkey , monkey_running
var banana ,bananaImage, ob, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  
  monkey=createSprite(60,300,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2
  ground=createSprite(300,370,1800,10)
  ground.velocityX=-2
  bananaGroup =new Group()
  obstacleGroup =new Group()

  

  
}


function draw() {
background(200);
  if(ground.x===0){
     ground.x=300
     }
  if(keyDown("space")){
    monkey.velocityY=-2
  }
  monkey.velocityY+=0.5
  
  monkey.bounceOff(ground)
  
  spawnBanana()
  spawnObstacle()
  
  drawSprites();
}

function spawnBanana(){
  if(frameCount%80===0){
    banana=createSprite(610,57748437549,834098,035308);
    banana.addImage(bananaImage)
    banana.y=Math.round(random(120,200))
    banana.scale=0.1
    banana.velocityX=-5
    banana.lifetime=120
    bananaGroup.add(banana)
  }
}

function spawnObstacle(){
  if(frameCount%80===0){
    ob=createSprite(610,320,834098,035308);
    ob.addImage(obstacleImage)
    ob.scale=0.3
    ob.velocityX=-5
    ob.lifetime=120
    obstacleGroup.add(ob)
  }
}



