const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var gameState= "Play"
var fire, fireImg;
var gameOver, gameOverImg;
var visiblity=1;
var particle = [];
var newX =500;

function preload(){
  bg1=loadImage("images/bg5.png")
  p_walking1= loadAnimation("images/shooter_player (3).png","images/shooter_player (4).png","images/shooter_player (5).png"
  ,"images/shooter_player (6).png","images/shooter_player (7).png")
  e_walking1= loadAnimation("images/enemy11.png")
  platformImg= loadImage("images/platform2.png")
  shootImg= loadAnimation("images/shooter_player_shoot (1).png")
  groundImg= loadImage("images/ground.png")
  playerImg= loadAnimation("images/shooter_player (1).png")
  winImg= loadImage("images/medal1.png")
  fireImg= loadImage("images/fire.png")
  gameOverImg= loadImage("images/game_over.png")
  BallImg= loadAnimation("images/obstacle1.png")
}
function setup(){
  var canvas=createCanvas(1700,displayHeight);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)

  platformGroup= new Group()
  enemyGroup= new Group()
  BallGroup= new Group()
  player= new Player()
  ground= new Ground()
  for(var i=0; i<110; i++){
    platform= new Platform(newX)
    newX= newX+platform.width
    platformGroup.add(platform.body)
    if(i%2===0){
      enemy= new Enemy(newX)
      enemyGroup.add(enemy.body)
    }
    //if(i%1===0){
     // ball= new Ball(newX)
      //BallGroup.add(ball.body)
   // }
  }
  win= new Win(newX)
}
function draw()
{
  Engine.update(engine)
  
  background(bg1);
  
  if(gameState==="Play"){
  if(frameCount%50===0)
  player.body.changeAnimation("walk")
 // translate(-player.body.x+150,0)
 camera.position.x=player.body.x+500
 camera.position.y=height/2
  if(keyDown("right")){
    player.moveRight()
  }
  if(keyDown("left")){
    player.moveLeft()
  }
  if(keyDown("up") && player.body.velocityY===0){
    player.moveUp()
  }
  player.gravity()
  enemy.gravity()
  if(player.body.collide(enemyGroup)){
    gameState="End"
  }

  if(frameCount%10===0){
    particle.push(new Particle(newX+200))
    }
  
    for(i=0;i<particle.length;i++){
    particle[i].display()
    }



  player.body.collide(platformGroup)
  player.body.collide(enemyGroup)
  player.body.collide(ground.body)
  player.body.collide(win.body)
}
  drawSprites()

  if(fire){
    fire.collide(enemyGroup,kill)
  }

  
  if(gameState==="End"){
    player.body.destroy()
    enemyGroup.setVelocityXEach(0)
    gameOver = createSprite(850,height/2,20,20)
    gameOver.addImage(gameOverImg)
    gameOver.scale=2.2
  }
  if(player.body.y>800){
    player.body.destroy()
  }
  
}
function keyPressed(){
  if(keyCode===32 && gameState==="Play"){
    player.body.changeAnimation("shoot")
    fire= createSprite(player.body.x,player.body.y,20,20)
    fire.addImage(fireImg)
    fire.scale=0.09
    fire.velocityX=60
  }
}
function kill(fire,enemy){
  tint(255,visiblity)
  enemy.alpha=visiblity
  fire.destroy()
  enemy.destroy()
  visiblity-=0.1
}