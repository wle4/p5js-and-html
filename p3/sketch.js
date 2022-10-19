let clr;

function setup() {
  let canvas = createCanvas(200, 200); //create canvas half screen width
  canvas.addClass('positioned'); //add positioned class to canvas (see style.css)
  let params = getParams(); //get values from URL
  clr = params.color; 
  background('yellow');
  noStroke();
}

function draw() {
  fill(clr);
  ellipse(random(200), random(200), 20);
}
