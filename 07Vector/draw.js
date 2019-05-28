var pic = document.getElementById("svg");
var clrButton = document.getElementById("clear");

var numCircles = 0;
var prevX = 0;
var prevY = 0;

var addCircle = function(e) {

  if (numCircles > 0) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", prevX);
    line.setAttribute("y1", prevY);
    line.setAttribute("x2", e.offsetX);
    line.setAttribute("y2", e.offsetY);
    line.setAttribute("stroke", "black");
    pic.appendChild(line);
  };

  var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circ.setAttribute("cx",e.offsetX);
  circ.setAttribute("cy",e.offsetY);
  circ.setAttribute("r",10);
  circ.setAttribute("fill","lightsteelblue");
  circ.setAttribute("stroke","black");
  circ.setAttribute("id","dot");
  pic.appendChild(circ);

  prevX = e.offsetX;
  prevY = e.offsetY;
  numCircles++;
};

var clearCircles = function(e) {
  while(pic.hasChildNodes()) {
    pic.removeChild(pic.firstChild);
    numCircles = 0;
  };
};

pic.addEventListener("click", addCircle);
clrButton.addEventListener("click", clearCircles);
