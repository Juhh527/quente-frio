let x;
let y;

function setup() {
  createCanvas(600, 600);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background(150);
  x = x + random(-5,5);
  y = y + random(-5,5);
  x = constrain(x,0,400);
  y = constrain(y,0,400);
  let distancia;
  distancia = dist(mouseX, mouseY, x, y); 
  
  fill(0, 520, 300)
  circle(mouseX, mouseY, distancia);
  //circle(x, y, 10);

  if (distancia < 10) {
    text("Achei!", 100, 100);
    noLoop();
  }
}
