let button1;
let button2;
let button3;



function setup() {
createCanvas (1000,600);
background(80); // gray background
button1 = createButton('turn red');
button1.position(100, 100);
button1.mousePressed(changered);
angleMode(DEGREES); // Change the mode to DEGREES

button2 = createButton('turn blue');
button2.position(120, 120);
button2.mousePressed(changeblue);
angleMode(DEGREES); // Change the mode to DEGREES

button3 = createButton('turn green');
button3.position(140, 140);
button3.mousePressed(changegreen);
angleMode(DEGREES); // Change the mode to DEGREES
//


}

function draw() {
beginShape ();
// Draw a rectangle at location (30, 20) with a width and height of 55.
rect(30, 20, 55, 55);

ellipse(45, 35, 15, 15);

ellipse(70, 35, 15, 15);





// Draw a rectangle at location (50, 30) with a width and height of 55.
rect(30, 75, 20, 50);

// Draw a rectangle at location (50, 30) with a width and height of 55.
rect(65, 75, 20, 50);
endShape();

arc(58, 50, 30, 30, 0, 180);

}

function changered() {
  fill('red');
}

function changeblue() {
  fill('blue');
}

function changegreen() {
  fill('green');
}

