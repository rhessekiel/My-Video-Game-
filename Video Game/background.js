let rx;
let ry;

function setup() {
createCanvas(800,500);

}


function draw() {


  background(51,204,255);

  noStroke();
  fill(0,153,51);
  rect(0,400,800,200);

  noStroke();
  fill(255,204,0);
  rect(0,400,800,5);

  stroke(1);
  fill(0,0,0);
  line(0,400,800,400);

  rx = 50;
  ry = 50;
  cloud();

  rx = 350;
  ry = 200;
  cloud();

  rx = 600;
  ry = 167;
  cloud();

  rx = 150;
  ry = 150;
  cloud();

  rx = 450;
  ry = 75;
  cloud();

  rx = 140;
  ry = 360;
  new Spiky();

  rx = 400;
  ry = 360;
  new Spiky();

  new Character();
}

function cloud() {


  noStroke();
  fill(255,255,255);
  ellipse(rx,ry,20,20);
  ellipse(rx+10,ry-10,20,20);
  ellipse(rx+10,ry+10,20,20);
  ellipse(rx+20,ry,20,20);
  ellipse(rx+25,ry+15,20,20);
  ellipse(rx+30,ry-10,20,20);
  ellipse(rx+40,ry,20,20);
  ellipse(rx+35,ry+10,20,20);


}

class Spiky {

constructor(rx,ry){
  this.rx = rx;
  this.ry = ry;
}

drawSpiky(){
  //original rx = 140
  //original ry = 360

    noStroke();
    fill(0,0,153);
    rect(this.rx,this.ry,80,40);
    triangle(this.rx,this.ry,this.rx,this.ry+40,this.rx-40,this.ry+40);
    triangle(this.rx+80,this.ry,this.rx+80,this.ry+40,this.rx+120,this.ry+40);

    stroke(1);
    fill(0,0,0);
    line(this.rx,this.ry,this.rx,this.ry+40);
    line(this.rx+79,this.ry,this.rx+79,this.ry+40);
    line(this.rx+40,this.ry,this.rx+40,this.ry+40);
    line(this.rx-13,this.ry+13,this.rx+92,this.ry+13); //line across
    line(this.rx-25,this.ry+26,this.rx+104,this.ry+26); //line across

    noStroke();
    fill(128,128,128);
    triangle(this.rx,this.ry,this.rx+5,this.ry-10,this.rx+10,this.ry);

    noStroke();
    fill(128,128,128);
    triangle(this.rx+10,this.ry,this.rx+15,this.ry-10,this.rx+20,this.ry);

    noStroke();
    fill(128,128,128);
    triangle(this.rx+20,this.ry,this.rx+25,this.ry-10,this.rx+30,this.ry);

    noStroke();
    fill(128,128,128);
    triangle(this.rx+30,this.ry,this.rx+35,this.ry-10,this.rx+40,this.ry);

    noStroke();
    fill(128,128,128);
    triangle(this.rx+40,this.ry,this.rx+45,this.ry-10,this.rx+50,this.ry);

    noStroke();
    fill(128,128,128);
    triangle(this.rx+50,this.ry,this.rx+55,this.ry-10,this.rx+60,this.ry);

    noStroke();
    fill(128,128,128);
    triangle(this.rx+60,this.ry,this.rx+65,this.ry-10,this.rx+70,this.ry);

    noStroke();
    fill(128,128,128);
    triangle(this.rx+70,this.ry,this.rx+75,this.ry-10,this.rx+80,this.ry);

    }
}

class Character{

  constructor(x,y){
        this.x = x;
        this.y = y;

  }

  drawCharacter(){  // draw a ball on the screen at x,y
    		stroke(0);
        strokeWeight(3);
    		fill(250,131,32);
		    ellipse(this.x,this.y,30,30);
        stroke(0,0,0);
        bezier(this.x + 12, this.y - 8,this.x + 6,this.y - 3,this.x + 6, this.y + 3, this.x + 12, this.y + 9);
        bezier(this.x - 12, this.y + 8, this.x - 6, this.y + 3, this.x - 6, this.y - 3, this.x - 12, this.y - 9);
        bezier(this.x, this.y + 15, this.x - 2, this.y + 3, this.x - 2, this.y - 3, this.x, this.y -15);
	}

}
