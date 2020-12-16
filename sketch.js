
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = []
var plinkos = []
var divisions= []

var dh = 300

function setup() {
	createCanvas(500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width/2,690,500,10)
    





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("violet");
  
  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
    particles.x = Math.round(random(1,500))
  }
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  for (var k = 0; k <=width; k = k + 70) {
   
    divisions.push(new Division(k,height-dh/2,10,dh))

  }
  for (var k = 0; k < particles.length; k++) {
   
    divisions[k].display();
  }

   ground.display();
  drawSprites();
 
}



