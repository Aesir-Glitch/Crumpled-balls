const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var part1,part2,part3;
var paperObject;
var ground;

function preload()
{
	
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  
    //Img = loadImage("dustbin.png");

    ground = new Ground(600,height,1200,20);
    
    boxleftSprite=createSprite(800,585,120,10);
    boxleftSprite.shapeColor=color(165,42,42);
 
    boxLeftBody = Bodies.rectangle(800,585,120,10,{isStatic:true} );
    World.add(world, boxLeftBody);
 
    boxBase=createSprite(740,560,10,50);
    boxBase.shapeColor=color(165,42,42);
 
    boxBottomBody = Bodies.rectangle(740,560,10,50,{isStatic:true} );
    World.add(world, boxBottomBody);
 
    boxleftSprite=createSprite(860,560,10,50);
    boxleftSprite.shapeColor=color(165,42,42);
 
    boxRightBody = Bodies.rectangle(860,560,10,50,{isStatic:true} );
    World.add(world, boxRightBody);    

    paperObject = new Paper(250,580,20,20);

    Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255,255,255);

  text("Press up-arrow then the down-arrow to make it land in the dustbin",400,200);

  ground.display();
  paperObject.display();  

  upkeyPressed();
  downkeyPressed();
  
  drawSprites();
  }

function upkeyPressed() {
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:2,y:-3})
  }
}

function downkeyPressed() {
  if (keyCode === DOWN_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0,y:0})
  }
}