
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,550,1200,20);
	tree = new Tree(800,540,250,500)
	mango1 = new Mango(890,90,40,40)
	mango3= new Mango(1000,95,40,40)
	mango2= new Mango(950,90,40,40)
	mango4= new Mango(1008,200,40,40)
	mango5= new Mango(770,500,40,40)
	boy = new Boy(300,470,120,300)
	stone = new Stone(270,390,30,30)
	slingshot = new Chain(stone.body,boy.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display()
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  stone.display();
  slingshot.display();
  drawSprites();
 
}
function mouseDragged(){
     Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly()
}

