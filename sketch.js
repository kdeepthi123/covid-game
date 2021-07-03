const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload(){
  bg=loadAnimation('bg/bg1.gif','bg/bg2.gif','bg/bg3.gif','bg/bg3.gif','bg/bg4.gif','bg/bg6.gif','bg/bg7.gif')
  virus=loadAnimation("virus/v1.gif","virus/v3.gif","virus/v4.gif","virus/v5.gif","virus/v6.gif","virus/v7.gif","virus/v8.gif","virus/v9.gif")
  helicoper=loadAnimation("helicopter/h1.gif","helicopter/h2.gif","helicopter/h3.gif","helicopter/h4.gif","helicopter/h5.gif","helicopter/h6.gif","helicopter/h7.gif","helicopter/h8.gif")
  jumpingAnimation = loadAnimation(
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump00.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump01.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump02.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump03.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump04.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump05.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump06.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump07.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump08.png',     
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump09.png'    
  );
  runningAnimation = loadAnimation( 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run01.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run02.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run03.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/Run04.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run05.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run06.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run07.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run08.png',     
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run09.png'    
  );
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create();
	world = engine.world; 
  spawnVirus();
  
  bgSprite=createSprite(windowWidth/2,windowHeight/2)
  bgSprite.addAnimation("bg",bg);
  bgSprite.scale = 1.7;
  bgSprite.frameDelay = 10;

  ground=createSprite(windowWidth/2,windowHeight-50,windowWidth,20)
  ground.visible=false
  ground = new Ground(windowWidth/2,windowHeight-50,windowWidth,20)
  
  warrior = new Player(50,windowHeight-50,50,50)

  warrior1=createSprite(50,windowHeight-50,50,50);
  warrior1.addAnimation('run',runningAnimation);
  warrior1.scale=2;
  
  heli = new Heli(windowWidth/2,100,100,100)
  
  helicoperSprite=createSprite(windowWidth/2,100,100,100);
  helicoperSprite.addAnimation('heli',helicoper)
  helicoperSprite.scale=2;

  var options={
    bodyA:heli.body,
    bodyB:warrior.body,
    length:10,
    stiffness:0.4
  }
  //console.log(options);
  rope=Constraint.create(options)
  World.add(world,rope)
  console.log(rope)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  warrior1.x=warrior.body.position.x
  warrior1.y=warrior.body.position.y
  helicoperSprite.x=heli.body.position.x
  helicoperSprite.y=heli.body.position.y
  warrior.display()
  heli.display()
  ground.display()
  drawSprites();
}

function keyPressed(){
if(keyCode== 69){
   rope.bodyB=null
}
if(keyCode== 68){
  rope.bodyB=warrior.body
}


}
function spawnVirus() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var virus = createSprite(600,120,40,10);
    virus.y = Math.round(random(80,120));
    virus.addImage();
    virus.scale = 0.5;
    virus.velocityX = -3;
    virus.lifetime = 200;
    virus.depth = trex.depth;
    player.depth = trex.depth + 1;
    virusGroup.add(virus);
  }
}