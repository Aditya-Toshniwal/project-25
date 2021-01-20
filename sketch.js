var ground, paper;
var rect1,rect2,rect3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
  var ground_options={
    isStatic:true
  }
  var image= loadImage("");
  ground = Bodies.rectangle(400,680,800,20,ground_options);
  World.add(world,ground);
  var paper_options={
    isStatic:false,
    restitution:0.8,
    friction:0.5,
    density:1.0
  }
  paper= Bodies.circle(200,100,20,paper_options);
  World.add(world,paper);
  var rect_options= {
    isStatic: true
  }
  rect1= Bodies.rectangle(530,620,15,100,rect_options);
  World.add(world,rect1);
  rect2= Bodies.rectangle(700,620,15,100,rect_options);
  World.add(world,rect2);
  rect3= Bodies.rectangle(613,662,200,15,rect_options);
  World.add(world,rect3);
  
  //Create the Bodies Here.


	Engine.run(engine);
  
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  rectMode(CENTER);
  rect(rect1.position.x,rect1.position.y,15,100);
  rectMode(CENTER);
  rect(rect2.position.x,rect2.position.y,15,100);
  rectMode(CENTER);
  rect(rect1.position.x,rect1.position.y,15,100);
  rectMode(CENTER);
  rect(rect3.position.x,rect3.position.y,180,15);
  ellipseMode(RADIUS);
  ellipse(paper.position.x, paper.position.y, 20,20);
 
  
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
		
	}
}

