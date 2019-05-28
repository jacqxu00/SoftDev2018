var canvas = document.getElementById('slate');
var context = canvas.getContext('2d');
var stopButton = document.getElementById("stop");
var clearButton = document.getElementById("clear");
var circleButton = document.getElementById("circle");
var saverButton = document.getElementById("saver");
var requestID;

context.fillStyle = "lightsteelblue";

var animateCircle = function() {
  var r = 0;
  var grow = true;

  stopIt();

  var drawCircle = function() {

    // draw circle
    clear();
    context.arc(250, 250, r, 0, 2*Math.PI);
    context.fill();
    context.stroke();
    requestID = window.requestAnimationFrame(drawCircle);

    // change variables for growing and shrinking
    if (grow) {
      r++;
      if (r == 250) {
        grow = false;
      };
    } else {
      r--;
      if (r == 0) {
        grow = true;
      };
    };
  };

  drawCircle();
};

var animateScreensaver = function() {
  var x = 250;
  var y = 250;
  var dx = 1;
  var dy = Math.random()*2 - 1;

  stopIt();

  var drawScreen = function() {

    // draw rectangle
    clear();
    context.fillStyle = "lightsteelblue";
    context.fillRect(x-30, y-20, 60, 40);
    requestID = window.requestAnimationFrame(drawScreen);

    // change variables for movement
    if (x+30<500 && x-30>0 && y+20<500 && y-20>0) {
      x += dx;
      y += dy;
    } else {
      if (x+30>=500 || x-30<=0) {
        dx = -1 * dx;

      }
      if (y+20>=500 || y-20<=0) {
        dy = -1 * dy;

      }
      x += dx;
      y += dy;
    };

  };

  drawScreen();
};

var stopIt = function() {
  window.cancelAnimationFrame(requestID);
};

var clear = function() {
  context.clearRect(0, 0, canvas.height, canvas.width);
  context.beginPath();
};

circleButton.addEventListener("click", animateCircle);
saverButton.addEventListener("click", animateScreensaver);
stopButton.addEventListener("click", stopIt);
clearButton.addEventListener("click", clear);
