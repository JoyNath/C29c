const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var block1
var block2
var block3
var ground
var pvimage
var slingshot
function preload(){
    pvimage=loadImage("polygon.png")
}
function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground= new Ground()
block1= new Block(300,235,30,40);
block2= new Block(333,235,30,40);
block3= new Block(357,235,30,40);
block4= new Block(393,235,30,40);
block5= new Block(417,235,30,40);
block6= new Block(453,235,30,40);
block7= new Block(477,235,30,40);
block8= new Block(333,195,30,40);
block9= new Block(357,195,30,40);
block10= new Block(393,195,30,40);
block11= new Block(417,195,30,40);
block12= new Block(453,195,30,40);
block13= new Block(357,155,30,40);
block14= new Block(393,155,30,40);
block15= new Block(417,155,30,40);
block16= new Block(393,115,30,40);
ball= Bodies.circle(50,200,20)   // radius is also given here
World.add(world,ball)
slingshot=new Slingshot(this.ball,{x:100,y:100})
}
function draw(){
    background("pink")
    ground.display()
    fill("blue")
    block1.display()
    fill("blue")
    block2.display()
    fill("blue")
    block3.display()
    fill("blue");
    block4.display()
    fill("blue")
    block5.display()
    fill("blue")
    block6.display()
    fill("blue")
    block7.display()
    fill("green")
    block8.display()
    fill("green")
    block9.display()
    fill("green")
    block10.display()
    fill("green")
    block11.display()
    fill("green")
    block12.display()
    fill("white")
    block13.display()
    fill(" white")
    block14.display()
    fill("white")
    block15.display()
    fill("purple")
    block16.display()
    fill("purple")
    imageMode(CENTER)
    image(pvimage ,ball.position.x,ball.position.y,40,40);
  
    slingshot.display();
    
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingshot.fly();
  }
  