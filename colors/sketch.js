
var r,g,b;


function setup() { 
  createCanvas(600, 600);
	background(250,250,250)

 r = random(225);
g = random(225);
b= random(225);

	
}

	function mouseDragged(){
	noStroke();

	fill(r,g,b,100)
	stroke(r,g,b,200)
 ellipse(mouseX,mouseY,100,100)
}

function mousePressed(){
	
r = random(225);
g = random(225);
b= random(225);
}
 function mouseWheel(){
	background(250,250,250);
}

