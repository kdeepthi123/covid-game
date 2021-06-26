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
  createCanvas(displayWidth,displayHeight);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}