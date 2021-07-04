const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var msg = "swipe";
var connected = true;


function preload(){
  injecttionImg=loadImage("injection.png")
  bg=loadAnimation('bg/bg1.gif','bg/bg2.gif','bg/bg3.gif','bg/bg3.gif','bg/bg4.gif','bg/bg6.gif','bg/bg7.gif')
  virus1=loadAnimation("virus/v1.gif","virus/v3.gif","virus/v4.gif","virus/v5.gif","virus/v6.gif","virus/v7.gif","virus/v8.gif","virus/v9.gif")
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
  virusGroup = new Group();
  injectionGroup = new Group();
  bgSprite=createSprite(windowWidth/2,windowHeight/2)
  bgSprite.addAnimation("bg",bg);
  bgSprite.scale = 1.7;
  bgSprite.frameDelay = 10;

  var options = {
    preventDefault: true
  };
  
  // document.body registers gestures anywhere on the page
  var hammer = new Hammer(document.body, options);
  hammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
  });

  hammer.on("swipe", swiped);
  

 

  ground=createSprite(windowWidth/2,windowHeight,windowWidth,20)
  ground.visible=false
  ground = new Ground(windowWidth/2,windowHeight,windowWidth,20)
  
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
  spawnVirus();
  //if(keyDown('space')){
    //warrior1.velocityY=-5;
    //warrior.body.velocity.y=-5
    //console.log(warrior)
  //}
  if(injectionGroup.isTouching(virusGroup)){
    virusGroup.destroyEach();
    injectionGroup.destroyEach();
  }
  if(warrior1.isTouching(virusGroup)){
    virusGroup.setVelocityXEach(0);
  }
  if(connected){
    rope.bodyB=warrior.body
  }
  else{
    rope.bodyB=null
  }
  warrior1.velocityY+=0.5;
  warrior.body.velocity.y +=0.5
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
if(keyCode==39){
  warrior1.x += 2;
  warrior.body.position.x += 2;
}
if(keyCode==38){
  warrior1.y += -2;
  warrior.body.position.y += -2;
}
if(keyCode==37){
  warrior1.x += -2;
  warrior.body.position.x += -2;
}
if(keyCode==40){
  warrior1.y += 2;
  warrior.body.position.y += 2;
}
if(keyCode== 69){
   rope.bodyB=null
}
if(keyCode== 68){
  rope.bodyB=warrior.body
}
if(keyCode== 73){
  spawnInjection();
}

}
function spawnVirus() {
 rand = Math.round(random(1,5))
 rand1 = Math.round(random(1,2))
 switch(rand){
   case 1: fc=300;
   break;
   case 2: fc=400;
   break;
   case 3: fc=200;
   break;
   case 4: fc=600;
   break;
   case 5: fc=150;
   break;
 }
  if (frameCount % fc === 0) {
    var virus = createSprite(displayWidth,120,40,10);
    virus.y = Math.round(random(400,600));
    virus.addAnimation('virus1',virus1);
    virus.scale = 0.25;
    if(rand1===1){
      virus.x=displayWidth;
      virus.velocityX = -3
    }
    else if(rand1===2){
      virus.x=0;
      virus.velocityX = 3
    }
    virus.debug=true;
    //virus.velocityY= -Math.round(random(-5,2));
    virus.lifetime = displayWidth;
    virus.depth = warrior1.depth;
    warrior.depth = warrior1.depth + 1;
    virusGroup.add(virus);
  }
}

function spawnInjection() {
 var virus = createSprite(displayWidth,120,40,10);
     virus.x = warrior1.x
     virus.y = warrior1.y
     virus.addImage(injecttionImg)
     virus.scale = 0.1;
     virus.lifetime = displayWidth;
     virus.depth = warrior1.depth;
     warrior.depth = warrior1.depth + 1;
     injectionGroup.add(virus);
     virus.velocityX=3;
     injection.debug=true
     virus.velocityY=4;
   
 }


function swiped(event) {
  console.log(event);
  if (event.direction == 4) {
   console.log("you swiped right");
   warrior1.x += 2;
  warrior.body.position.x += 2;
  } else if (event.direction == 8) {
   console.log("you swiped up");
   warrior1.y += -2;
   warrior.body.position.y += -2;
  } else if (event.direction == 16) {
   console.log("you swiped down");
  connected = !connected
  } else if (event.direction == 2) {
   console.log("you swiped left");
   warrior1.x += -2;
  warrior.body.position.x += -2;
  }
}
function tapped(){
  spawnInjection();
}