let potatoIMG;
let eyespacing = 35;
function setup() {
  createCanvas(400, 400);
  potatoIMG = loadImage('potato.png');
}

function draw() {
  background(220);
  // fill(255,0,0);
  // ellipse(width/2, height/2-50, 160,200);
  fill(100,100,60);
  console.log("x: " + mouseX + ", y: " + mouseY);
   
  
  
  
  fill (200,150,130);
  ellipse(width/2, height/2, 160,200);
  
   push();
   fill(255);
  translate(0,175);
   push();
  translate(width/2-eyespacing, 0);
  ellipse(0, 0, 30, 20);
  push();
  fill(130,90,0);
  ellipse(0,0,15,15);
  push();
  fill(0);
  ellipse(0,0,5,5);
  pop();
  pop();
  pop();
  translate(width/2+eyespacing, 0);
  ellipse(0, 0, 30, 20);
  push();
  fill(130,90,0);
  ellipse(0,0,15,15);
  push();
  fill(0);
  ellipse(0,0,5,5);
   pop();
   pop();
   pop();
  
  
  
  
  
   //hair
  fill(130,90,0);
  push();
    translate(width/2-20,148);
    rotate(-PI/8);
    arc(0,0,155,90,PI,PI*.01); 
  pop(); 
  push();
    translate(width/2+58,155);
    rotate(PI*.4);
    arc(0,0,90,35,PI*1.02,15*PI/8); 
  pop();
  
  
   
    
    
  //beginShape();
  //vertex(120,177);
  //vertex(270,177);
  //vertex(width/2, 99);
  //endShape(CLOSE);

  
  
}
