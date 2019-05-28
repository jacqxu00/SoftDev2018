var pic = document.getElementById("svg");
var clrButton = document.getElementById("clear");
var timer;
var frame;
var balls;

var stop = function(){
  window.cancelAnimationFrame(frame);
}

var addCircle = function(e) {
  var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  if (e.offsetX > 480) {
    circ.setAttribute("cx", 480);
  }
  else if (e.offsetX < 20) {
    circ.setAttribute("cx", 20);
  }
  else {
    circ.setAttribute("cx", e.offsetX);
  };
  if (e.offsetY > 480) {
    circ.setAttribute("cy", 480);
  }
  else if (e.offsetY < 20) {
    circ.setAttribute("cy", 20);
  }
  else {
    circ.setAttribute("cy", e.offsetY);
  };
  circ.setAttribute("r", 20);
  circ.setAttribute("fill","lightsteelblue");
  circ.setAttribute("dx", 2);
  circ.setAttribute("dy", 2);
  circ.setAttribute("stroke", "black");
  pic.appendChild(circ);
  balls.push(circ);
};

var animateSaver = function() {
  balls = [];
  var drawScreen = function() {
    var x;
    var y;
    var circle;
    for(var i = 0; i < balls.length; i++){
      circle = balls[i];
      circle.setAttribute("cx",parseInt(circle.getAttribute("cx")) + parseInt(circle.getAttribute("dx")));
      circle.setAttribute("cy",parseInt(circle.getAttribute("cy")) + parseInt(circle.getAttribute("dy")));
      if (parseInt(circle.getAttribute("cx"))-20 <= 0 || parseInt(circle.getAttribute("cx")) + 20 >= pic.getBoundingClientRect().width){
        circle.setAttribute("dx",parseInt(circle.getAttribute("dx"))*-1);
      }
      if(parseInt(circle.getAttribute("cy")) - 20 <= 0 || parseInt(circle.getAttribute("cy")) + 20 >= pic.getBoundingClientRect().height){
        circle.setAttribute("dy",parseInt(circle.getAttribute("dy"))*-1);
      }
    }
    frame = window.requestAnimationFrame(drawScreen);
  }
  drawScreen();
}

var clear = function(e) {
  stop();
  while(pic.hasChildNodes()) {
    pic.removeChild(pic.firstChild);
    numCircles = 0;
  }
  animateSaver();
}

svg.addEventListener("click", addCircle);
clrButton.addEventListener("click", clear);
animateSaver();
