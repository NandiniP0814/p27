
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	Engine.run(engine);
	bob1 = new Bob(200,300,40);
	bob2 = new Bob(300,300,40);
	bob3 = new Bob(400,300,40);
	bob4 = new Bob(500,300,40);
	bob5 = new Bob(600,300,40);

	ground = new Roof(600,650,1200,20);
	rope1 = new Rope(bob1.body,{x:200,y:100});
	rope2 = new Rope(bob2.body,{x:300,y:100});
	rope3 = new Rope(bob3.body,{x:400,y:100});
	rope4 = new Rope(bob4.body,{x:500,y:100});
	rope5 = new Rope(bob5.body,{x:600,y:100});
	roof = new Roof(400,100,500,10);
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine)
  
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 ground.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 roof.display();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});

}

