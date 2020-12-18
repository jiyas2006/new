const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,box1,box2,grnd;



function setup() {
  createCanvas(800,400);
 engine=Engine.create();
 world=engine.world;
 
 box1=new Box(200,100,50,50);
 box2=new Box(240,200,40,40);

 grnd=new Ground(400,390,800,10);

}

function draw() {
  background(0); 
  Engine.update(engine); 
 
  box1.display();
  box2.display();

  grnd.display();
}