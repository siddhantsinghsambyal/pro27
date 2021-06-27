
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob,bob2,bob3,bob4,bob5;
var roof;
var rope;


function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 bob= new Bob(940,580,150)
	 bob2=new Bob(340,580,150)
	 bob3=new Bob(490,580,150)
	 bob4=new Bob(640,580,150)
	 bob5=new Bob(790,580,150)
	 roof=new Roof(650,50,1000,50)
	 rope = new Rope(roof.body, { x: 500, y: 50 });



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

  drawSprites();
 
}



