// This is a JavaScript file
var person;
//var obstacle;
function setup() {
  createCanvas(640, 360);
  person = new Person();
}

function keyPressed() {
    if (key === " ") {
        var jump = createVector(0, -6);
        person.applyForce(jump);
    }
}
//
// function draw() {
//   background(51);
//
//   translate(-person.pos.x+50, 0);
//
//
// }

function createCharacter() {
  person = new Person();
  var gravity = createVector(0, 0.1);
  person.applyForce(gravity);

  person.update();
  person.edges();
  person.display();

  fill(255, 0, 100);
  rect(400, height-50, 50, 50);
  return person;
}