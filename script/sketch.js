var canvas;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1')
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  stroke(255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyPressed(){
	clear();
}
