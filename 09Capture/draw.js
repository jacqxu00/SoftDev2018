var pic = document.getElementById("svg");
var clrButton = document.getElementById("clear");

var addCircle = function(e) {
  var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circ.setAttribute("cx",e.offsetX);
  circ.setAttribute("cy",e.offsetY);
  circ.setAttribute("r",30);
  circ.setAttribute("fill","lightsteelblue");
  circ.setAttribute("stroke","black");
  pic.appendChild(circ);
  circ.addEventListener("click", editCircle);
};

var addRandomCircle = function() {
  var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circ.setAttribute("cx", Math.floor(pic.getAttribute("width")) * Math.random());
  circ.setAttribute("cy", Math.floor(pic.getAttribute("height")) * Math.random());
  circ.setAttribute("r",30);
  circ.setAttribute("fill","lightsteelblue");
  circ.setAttribute("stroke","black");
  pic.appendChild(circ);
  circ.addEventListener("click", editCircle);
};

var editCircle = function(e) {
  if (this.getAttribute("fill") == "lightsteelblue") {
    this.setAttribute("fill", "#ffe6ff");
    e.stopPropagation();
  }
  else {
    pic.removeChild(this);
    e.stopPropagation();
    addRandomCircle();
  };
};

var clearCircles = function(e) {
  while(pic.hasChildNodes()) {
    pic.removeChild(pic.firstChild);
  };
};

pic.addEventListener("click", addCircle);
clrButton.addEventListener("click", clearCircles);
