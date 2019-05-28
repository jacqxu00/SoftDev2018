var canvas = document.getElementById('slate');
var context = canvas.getContext('2d');
var stopButton = document.getElementById("stop");
var clearButton = document.getElementById("clear");
var requestID;

context.fillStyle = "lightsteelblue";

var animate = function() {
  var r = 0;
  var grow = 1;

  stopIt();

  var drawCircle = function() {
    clear();

    // draw circle
    context.arc(250, 250, r, 0, 2*Math.PI);
    context.fill();
    context.stroke();
    requestID = window.requestAnimationFrame(drawCircle);
    r += grow;

    // change variables for growing and shrinking
    if (r <= 0 || r >= 250) {
      grow = -grow;
    };
  };

  drawCircle();
};

var stopIt = function() {
  window.cancelAnimationFrame(requestID);
};

var clear = function() {
  context.clearRect(0, 0, canvas.height, canvas.width);
  context.beginPath();
};

canvas.addEventListener("click", animate);
stopButton.addEventListener("click", stopIt);
clearButton.addEventListener("click", clear);
