
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stoneObj, ground, tree;
var mango1, mango2, mango3, mango4, mango5, mango6;
var boy;
var engine, world;

function preload()
{
	stoneObj = loadImage(stone/"stone.png");
	boy = loadImage(boy/"boy.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;

	boy = new Boy(200,651);
	boy.addImage(boy);
	boy.scale = 0.1;
	tree = new Tree(650,500,30,300);
	ground = new Ground(400,670,800,20);
	mango1 = new Mangoes(650,400,15);
	mango2 = new Mangoes(600,400,15);
	mango3 = new Mangoes(650,370,15);
	mango4 = new Mangoes(630,450,15);
	mango5 = new Mangoes(670,430,15);
	stone = new Stone(150,550,20);
	shot = new Shot(stone.body,{x:150,y:550});
    




	Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);

  ground.display();
  stoneObj.display();
  boy.display();
  tree.display();
  shot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);



  drawSprites();
 
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		launcherObject.attach(stone.body);
	}
}



