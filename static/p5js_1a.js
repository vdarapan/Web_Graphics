<<<<<<< HEAD
let angle = 0;

function setup() {
    createCanvas(400,400);
    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {
    background(0);
    
    push();
    translate(50, 50);
    rotate(angle);
    fill(255, 100, 50);
    rect(0, 0, 50, 50);
    pop();

    translate(300, 300);
    rotate(-angle * 3);
    fill(50, 100, 255);
    rect(0,0,100,50);
    
   // translate(mouseX, mouseY);
    //rect(0,0,100,50);

    angle = angle + 5;
   // rect(50, 50, 100, 50);
=======
let angle = 0;

function setup() {
    createCanvas(400,400);
    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {
    background(0);
    
    push();
    translate(50, 50);
    rotate(angle);
    fill(255, 100, 50);
    rect(0, 0, 50, 50);
    pop();

    translate(300, 300);
    rotate(-angle * 3);
    fill(50, 100, 255);
    rect(0,0,100,50);
    
   // translate(mouseX, mouseY);
    //rect(0,0,100,50);

    angle = angle + 5;
   // rect(50, 50, 100, 50);
>>>>>>> ac4f01e39558da94ac7a93e86b64e6ed60c97f53
}