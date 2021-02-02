var spaceback , spacebackImage 
var rocket , rocketImage
var gameOver
var gameState = "play"

function preload(){
  spacebackImage = loadImage("spaceback.jpg") 
  rocketImage= loadImage ("rocket.jpg")
  obstacleImage=loadImage("obstacle.png")
  gameoverImage=loadImage("Gameover.jpg")
}


function setup() {
  createCanvas(600, 400);
  
  obstacleGroup = createGroup();
  
  spaceback = createSprite (400,200,30,80);
  spaceback.scale = 2.5
  spaceback.addImage(spacebackImage);
  
  rocket = createSprite(60,200,30,30);
  rocket.scale = 0.25 
  rocket.addImage(rocketImage) 
  
}

function draw() {
  background(220);
  spawnObstacles();

  
  if(gameState === "play"){
  if (rocket.isTouching(obstacleGroup)){
       gameState = "end"; 
  }
  
  
  spaceback.velocityX = -2
  if(spaceback.x < 198){
    spaceback.x=spaceback.width/2
  }
  
  if(keyDown("up")) {
    rocket.y = rocket.y - 4
  }
  
  if(keyDown("down")){
    rocket.y = rocket.y + 4
  }
  }
  
  if(gameState === "end"){
    obstacleGroup.destroyEach(); 
    obstacleGroup.x=700
    obstacle.lifetime = 10;
    gameOver = createSprite(300,200,600,600)
    gameOver.shapeColor = "black";
    gameOver.addImage(gameoverImage);
    gameOver.scale=2.2
    gameState = "end";
  }
    drawSprites();
}

function spawnObstacles(){
 if (frameCount%60===0){
  x = random(50,400)
  obstacle = createSprite(550,x,20,20);
  obstacle.scale=0.2
  obstacle.addImage(obstacleImage) 
  obstacle.velocityX = -7
  obstacleGroup.add(obstacle)
 } 
}

