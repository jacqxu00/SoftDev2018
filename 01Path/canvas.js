// setup.html code credit to Mr. DW

// default shape circle (0)
var shape = 0;

// clear the context and reset path
var clearContext = function(e) {
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  ctx.beginPath();
};

// toggle between square (1) and circle (0)
var toggleShape = function(e) {
  if (shape == 0) {
    shape = 1;
  } else {
    shape = 0;
  };
};

// stamp shape and draw a line from the previous location
var stampShape = function(e) {
  if (shape == 0) {
    
    //connect the shapes
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    //draw the circle
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 10, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();

    //set the path to the center of the shape
    ctx.moveTo(e.offsetX, e.offsetY);
  } else {

    //connect the shapes
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    //draw the square
    ctx.strokeRect(e.offsetX-10, e.offsetY-10, 20, 20);
    ctx.fillRect(e.offsetX-10, e.offsetY-10, 20, 20);

    //set the path to the center of the shape
    ctx.moveTo(e.offsetX, e.offsetY);
  };
};

// context
var cvs = document.getElementById('slate');
var ctx = cvs.getContext('2d');
cvs.addEventListener('click', stampShape);

// clear button
var clr = document.getElementById('clear');
clr.addEventListener('click', clearContext);

// toggle button
var tgl = document.getElementById('toggle');
tgl.addEventListener('click', toggleShape);
