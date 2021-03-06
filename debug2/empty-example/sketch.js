var selectedLine;
var xCoordinates;
var y;
var lineSpeed;
//use conditional statements
//use arrays

function setup() {
	createCanvas(windowWidth, windowHeight); 
	var fifth = (width/5);
	xCoordinates = [0, fifth, fifth*2, fifth*3, fifth*4, width];
	selectedLine = 0;
	lineSpeed = 1;
	y = 0;
}

function draw() {
	background(0);
	ellipse(xCoordinates[0], y, 20, 20);
	ellipse(xCoordinates[1], y, 20, 20);
	ellipse(xCoordinates[2], y, 20, 20);
	ellipse(xCoordinates[3], y, 20, 20);
	ellipse(xCoordinates[4], y, 20, 20);
	ellipse(xCoordinates[5], y, 20, 20);
	ellipse(xCoordinates[6], y, 20, 20);

	stroke(255);
	line(xCoordinates[selectedLine], y, width/2, height/2);
	y+=lineSpeed;
	if (y > height && y < 0) {
		lineSpeed = lineSpeed * -1;
	}
}

function mousePressed() {
	lineSpeed = lineSpeed * 1.5;
}

function keyPressed() {
	if(keyCode == RIGHT_ARROW) {
		selectedLine++;
	}
	else if (keyCode == LEFT_ARROW) {
		selectedLine--;
	}
	if (selectedLine >= xCoordinates.length) {
		selectedLine = xCoordinates.length - 1;
	}
	if (selectedLine < 0) {
		selectedLine = 0;
	}

}