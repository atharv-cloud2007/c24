const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,log3;
var box1,box2,pig1,log2,bird1;
var log1,box3,box4,pig2,log4;
function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    pig1= new Pig(810,580)
    box1 = new Box(720,580,70,70);
    box2 = new Box(900,580,70,70);
    log1=new Log(810,450,250,PI/2)
    ground = new Ground(500,height,1000,20)
    box3 = new Box(720,400,70,70);
    box4 = new Box(900,400,70,70);
    pig2= new Pig(810,400)
    log2=new Log(810,350,250,PI/2)
    box5 = new Box(810,200,70,70);
    log3=new Log(750,170,200,PI/7)
    log4=new Log(850,170,200,-(PI/7))
    bird1= new bird(200,200)
}

function draw(){
    background("green");
    Engine.update(engine);
    box1.display();
    pig1.display()
    box2.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display()
    log2.display()
    box5.display()
    log3.display()
    log4.display()
    bird1.display()
}