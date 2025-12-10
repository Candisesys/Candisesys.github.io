/*
----- Coding Tutorial by Patt Vira ----- 
Name: Intro to matter.js (with p5.js)
Video Tutorial: https://youtu.be/cLXNxn5N-2Y

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

const { Engine, Body, Bodies, Composite } = Matter;

let engine;
let sampleBody;
let initialAngle;
async function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  engine.gravity.scale = 0;
  sampleBody = Bodies.rectangle(
    width / 2,
    height / 2 + height / 3,
    width / 1.5,
    10
  );
  Body.setMass(sampleBody, Infinity);
  Body.setInertia(sampleBody, Infinity);
  Body.setPosition(
    sampleBody,
    Matter.Vector.create(width / 2, height / 2 + height / 3)
  );
  initialAngle = random(-0.07, 0.05);
  Body.setAngularVelocity(sampleBody, initialAngle);
  sampleCharacter = Bodies.circle(width / 2, 0, 15);
  sampleBody.frictionAir = 0;
  sampleCharacter.slop = 0;
  Composite.add(engine.world, sampleBody);
  Composite.add(engine.world, sampleCharacter);
}

function draw() {
  background(220);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
  Body.setPosition(
    sampleBody,
    Matter.Vector.create(width / 2, height / 2 + height / 3)
  );
  Body.applyForce(
    sampleCharacter,
    sampleCharacter.position,
    Matter.Vector.create(0, 0.001)
  );

  if (keyIsPressed) {
    if (keyCode == 37) {
      Body.setAngularVelocity(
        sampleBody,
        (sampleBody.angularVelocity -= 0.002)
      );
    } else if (keyCode == 39) {
      Body.setAngularVelocity(
        sampleBody,
        (sampleBody.angularVelocity += 0.002)
      );
    }
  } else {
    Body.setAngularVelocity(
      sampleBody,
      lerp(sampleBody.angularVelocity, initialAngle, 0.1)
    );
  }

  if (sampleCharacter.position.y > height + 15) {
    Body.setPosition(sampleCharacter, Matter.Vector.create(width / 2, 0));
    Body.setVelocity(sampleCharacter, Matter.Vector.create(0, 0));
  }
  Engine.update(engine);

  push();
  translate(sampleBody.position.x, sampleBody.position.y);
  rotate(sampleBody.angle);
  rect(0, 0, width / 1.5, 10);
  pop();

  push();
  fill(171, 171, 171);
  translate(sampleCharacter.position.x, sampleCharacter.position.y);
  rotate(sampleCharacter.angle);
  ellipse(0, 0, 30, 30);
  pop();
}
