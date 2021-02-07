
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter=40;
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;
	bobObject1=new bob(10,150,20)
	bobObject2=new bob(70,150,20)
	bobObject3=new bob(110,150,20)
	bobObject4=new bob(150,150,20)
	bobObject5=new bob(190,150,20)
	roof1=new roof(150,100,350,10)
	

	//Create the Bodies Here.
	

	Engine.run(engine);
	rope1=new rope(bobObject1.body,roof1.body,-bobDiameter*2,0)
	rope2=new rope(bobObject2.body,roof1.body,-bobDiameter*2,0)
	rope3=new rope(bobObject3.body,roof1.body,-bobDiameter*2,0)
	rope4=new rope(bobObject4.body,roof1.body,-bobDiameter*2,0)
	rope5=new rope(bobObject5.body,roof1.body,-bobDiameter*2,0)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 roof1.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}



