const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
var left;
var right;
var top_wall;
var button
var button2
function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  button = createImg("up.png")
  button.position(10,20)
  button.size(50,50)

 button.mouseClicked(vForce)
 button2 = createImg("right.png")
 button2.position (50,40)
 button2.size(50,50)
 button2.mouseClicked(hForce)
 
  var ball_options = {
    restitution: 0.80,
  frictionAir: 0.02
  }
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  ball = Bodies.circle (200,100,20, ball_options);
  World.add (world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
 
}

function draw() 
{

  background(51)
  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  
}
function hForce ()
{
  Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.05,y:0})
}

function vForce ()
{
Matter.Body.applyForce(ball,{x:0,y:0}, {x:0,y:-0.05})
}

