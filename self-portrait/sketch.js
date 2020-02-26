let potatoIMG;
let eyeSpacing = 35;
let eyeMotion = 0;

function setup() {
  createCanvas(400, 400);
  potatoIMG = loadImage('potato.png');
}

function draw() {
  
  background(225);
  
  push();
  translate(width/2-(potatoIMG.width/2), 50);
  rotate(frameCount * PI/64);
  image(potatoIMG, -potatoIMG.width/4,-potatoIMG.height/4, potatoIMG.width/2, potatoIMG.height/2);
  pop();
  
  eyeMotion = constrain(map(mouseX, 0, width, -5, 5), -5, 5);
  
  //noStroke();
  fill(100,100,60);
  console.log("x: " + mouseX + ", y: " + mouseY);


  fill(200,150,130);
  ellipse(width/2, height/2, 160,200);

  
  //hair
  fill('#222222');
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
  
  //mouth
  fill('#ffffff');
  arc(199, 242, 80, 70, 0, PI);
  
  //eyes
  push();
    fill(255);
    translate(0,175);
    //eye on left
    push();
      translate(width/2-eyeSpacing, 0);
      ellipse(0, 0, 30, 20);
      push();
        translate(eyeMotion,0);
        fill(130,90,0);
        ellipse(0,0,15,15);
        push();
          fill(0);
          ellipse(0,0,5,5);
        pop();
      pop();
    pop();
  
    //eye on right
    push();
      translate(width/2+eyeSpacing, 0);
      ellipse(0, 0, 30, 20);
      push();
        translate(eyeMotion,0);
        fill(130,90,0);
        ellipse(0,0,15,15);
        push();
          fill(0);
          ellipse(0,0,5,5);
        pop();
      pop();
    pop();
  pop();
  
  
noFill();
  strokeWeight(3);
  ellipse(199, 202, 12, 12);
  

  
}