const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var oof1, oof2;
var log1, log2, log3, log4;
var birb1;

function setup(){
    var canvas = createCanvas(1440,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,550,70,70);
    box2 = new Box(1200,550,70,70);
    box3 = new Box(1000, 450, 70, 70);
    box4 = new Box(1200, 450, 70, 70);
    box5 = new Box(1100, 350, 70, 70);
    ground = new Ground(720,height,1440,50)
    oof1 = new OoF(1100,550);
    oof2 = new OoF(1100, 450);
    log1 = new Yeet(1100, 500, 270, PI/2)
    log2 = new Yeet(1100, 400, 270, PI/2)
    log3 = new Yeet(1050, 350, 150, PI/4)
    log4 = new Yeet(1150, 350, 150, -PI/4)
    birb1 = new Pika(50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    oof1.display();
    oof2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    birb1.display();
}