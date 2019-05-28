var pic = document.getElementById("svg");
var clrButton = document.getElementById("clear");
var stpButton = document.getElementById("stop");
var crcButton = document.getElementById("circle");
var svrButton = document.getElementById("saver");
var timer;

var animateCircle = function(e) {
  var r = 0;
  var grow = -1;

  stopIt();

  var drawCircle = function() {

    // draw circle
    clear();
    var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circ.setAttribute("cx",250);
    circ.setAttribute("cy",250);
    circ.setAttribute("r",r);
    circ.setAttribute("fill","lightsteelblue");
    circ.setAttribute("stroke","black");
    pic.appendChild(circ);

    // change variables for growing and shrinking
    if (r == 250 || r == 0) {
      grow = grow * -1;
    };
    r += grow * 1;
  };

  timer = setInterval(drawCircle, 10);
};

var animateSaver = function() {
  var x = 250;
  var y = 250;
  var dx = 1;
  var dy = Math.random()*2 - 1;

  stopIt();

  var drawScreen = function() {

    // draw rectangle
    clear();
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x-30);
    rect.setAttribute("y", y-20);
    rect.setAttribute("width", 60);
    rect.setAttribute("height", 40);
    rect.setAttribute("fill","lightsteelblue");
    rect.setAttribute("stroke","black");
    pic.appendChild(rect);

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

  timer = setInterval(drawScreen, 10);
};

var stopIt = function() {
  clearInterval(timer);
};

var clear = function(e) {
  while(pic.hasChildNodes()) {
    pic.removeChild(pic.firstChild);
    numCircles = 0;
  };
};

stpButton.addEventListener("click", stopIt);
clrButton.addEventListener("click", clear);
crcButton.addEventListener("click", animateCircle);
svrButton.addEventListener("click", animateSaver);
