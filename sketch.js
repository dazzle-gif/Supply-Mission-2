var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState = 1;
var gameState_play  = 1;
//var gameState_end = 0;
var gameState_start = 0;
var basket;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//creating box
	box1Sprite = createSprite(width/2, 650, 200, 20);
	box1Sprite.shapeColor="red";

	box2Sprite = createSprite(width/2-90, 600, 20, 100 );
	box2Sprite.shapeColor="red";

	box3Sprite = createSprite(width/2+90, 600, 20, 100 );
	box3Sprite.shapeColor="red";
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	 //Invisible holder
	 iH = Bodies.rectangle(width/2, 619, width, 10 , {isStatic:true} );
	World.add(world,iH );

	box1 = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	World.add(world, box1);
	box2 = Bodies.rectangle(width/2-90, 600, 20, 100 , {isStatic:true} );
	World.add(world, box2);
	box3 = Bodies.rectangle(width/2+90, 600, 20, 100 , {isStatic:true} );
	World.add(world, box3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (keyCode === UP_ARROW) {
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.x;
}
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  textSize(25)
  textFont("Bradley Hand ITC");
  stroke("white")
  text("Press ' DOWN ARROW KEY ' to drop the package body " , 80,50)
//}

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

Matter.Body.setStatic(packageBody,false);
  }
}

function keyPressed_up (){
	if (keyCode === UP_ARROW) {
		packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
		//packageBody.x = width/2;
	    //packageBody.y = 200;
	}
}

function reset(){
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.x;
}