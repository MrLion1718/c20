
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine;
var world;
var ground;
var ball;

function setup()
{
  createCanvas(400,400);
engine=Engine.create()
world=engine.world;
var groundoptions={
  isStatic:true
}
ground=Bodies.rectangle(200,375,400,20,groundoptions)
World.add(world,ground)
var balloptions={
  restitution:1.0
}
ball=Bodies.circle(200,5,30,balloptions)
World.add(world,ball)
}

function draw() 
{
  background(51);
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
  
 
}

