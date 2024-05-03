let cx = 20;
let cy = 300;
let d = 40;
let r = 60;
let rx = 0;
let ry = 0;
let red = 0;
let g = 0;
let b = 255;
let mayola = false;
let xvel = 2;
let yvel = 3;
function setup() {
createCanvas(700,600);

}

function draw() {
background(100);
fill(red,g,b);
ellipse(cx,cy,d,d);



fill(0,255,0);
rect(rx,ry,r,r);

rx= mouseX - 30;
ry= mouseY - 30;

if(cx < d/2 || cx > 700 - d/2){
  xvel = xvel * (-1);
}
  cx = cx + xvel;

if(cy < d/2 || cy > 600 - d/2){
  yvel = yvel * (-1);
}
  cy = cy + yvel;
  
  if( mouseIsPressed === false){
    if (cx > rx && cx < rx + r){
  if ( cy+d/2 > ry && cy - d/2 < ry + r){
      yvel = yvel * (-1);
      cc();
  }
}

if (cy > ry && cy < ry + r){
  if ( cx+d/2 > rx && cx - d/2 < rx + r){
      xvel = xvel * (-1);
      cc();
  }
}
  }

if (cy < d/2){
  d = d + 4;
  cy = cy + 4;
}
if (cy > 600-d/2){
  d = d - 4;
  cy = cy - 4;
  yvel = yvel * (-1);
}
}

function cc(){
      red = int(random(0,255));
      g = int(random(0,255));
      b = int(random(0,255));
}
