var pic = document.getElementById("svg");
var swp = document.getElementById("swap");
var ttl = document.getElementById("h1");
var norway = [14, 14, 11, "Norway"];
var france = [5, 4, 6, "France"];
var gold;
var silver;
var bronze;
var dispNorway = false;

var createCircle = function(x, y, r, fill){
  var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circ.setAttribute("cx", x);
  circ.setAttribute("cy", y);
  circ.setAttribute("r", r);
  circ.setAttribute("fill", fill);
  pic.appendChild(circ);
  return circ;
};

var updateCircles = function() {
  if (dispNorway) {
    ttl.innerHTML = norway[3];
    gold.setAttribute("r", 6*norway[0]);
    silver.setAttribute("r", 6*norway[1]);
    bronze.setAttribute("r", 6*norway[2]);
    dispNorway = false;
  }
  else {
    ttl.innerHTML = france[3];
    gold.setAttribute("r", 6*france[0]);
    silver.setAttribute("r", 6*france[1]);
    bronze.setAttribute("r", 6*france[2]);
    dispNorway = true;
  };
};

var setup = function() {
  gold = createCircle(120, 120, 6*france[0], "gold");
  silver = createCircle(250, 250, 6*france[1], "silver");
  bronze = createCircle(380, 380, 6*france[2], "goldenrod");
}

setup();
swp.addEventListener("click", updateCircles);
