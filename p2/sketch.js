let num;
let img;
let params;

function setup() {
  let canvas = createCanvas(0.5*windowWidth, 0.5*windowWidth); //create canvas half screen width
  canvas.addClass('centered'); //add centered class to canvas (see style.css)
   //get color value from URL
  params = getParams();
  let clr = params.color;
  num = params.num;
  //add color values in link to next page
  var a = document.getElementsByTagName('a')[0];
  var href = setParams(a.href, 'color', clr);
  a.href = href;

  background(clr);
  fill('yellow');
  noStroke();

  img = loadImage('statu2.jpg');
  frameRate(60);
}

function draw() {
  for (var i = 0; i < num; i++){
    ellipse(width/2, 50+i*30, 20);
  }

  if (frameCount < 300) {
    image(img, 0, 0);
    tint(params.color);
  }
}