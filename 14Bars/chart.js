var data1 = [92.1, 9.56, 345, 41.1, 18.4];
var data2 = [122, 14.1, 477, 75.7, 27.5];
var names = ["Agriculture", "Commerce","Defense","Education","Energy"];
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data1);
var barEnter = barUpdate.enter().append("div");
var swp = document.getElementById("swap");
var ttl = document.getElementById("title");
disp00 = false;

var swapYear = function(e) {
  if (disp00) {
    swp.innerHTML = "Swap to 2000";
    ttl.innerHTML = "United States 2020 Budget in Billions";
    d3.select(".chart").selectAll("div").remove();
    bar = chart.selectAll("div");
    barUpdate = bar.data(data2);
    barEnter = barUpdate.enter().append("div");
    barEnter.transition()
	          .duration(2000)
	          .style("width",function(d){return d*2 + "px";})
	          .text(function(d){return d;})
    disp00 = false;
  }
  else {
    swp.innerHTML = "Swap to 2020";
    ttl.innerHTML = "United States 2000 Budget in Billions";
    d3.select(".chart").selectAll("div").remove();
    bar = chart.selectAll("div");
    barUpdate = bar.data(data1);
    barEnter = barUpdate.enter().append("div");
    barEnter.transition()
            .duration(2000)
            .style("width",function(d){return d*2 + "px";})
            .text(function(d){return d;})
    disp00 = true;
  };
};

var setup = function() {
  d3.select(".chart").selectAll("div").remove();
  bar = chart.selectAll("div");
  barUpdate = bar.data(data1);
  barEnter = barUpdate.enter().append("div");
  barEnter.style("width",function(d){return d*2 + "px";})
          .text(function(d){return d;})
}

setup();
swp.addEventListener("click",swapYear);



/* 2020
Dept. of Agriculture	$122 billion USD
Dept. of Commerce	$14.1 billion USD
Dept. of Defense - Military Programs	$477 billion USD
Dept. of Education	$75.7 billion USD
Dept. of Energy	$27.5 billion USD
Dept. of Health and Human Services	$1.08 trillion USD
Dept. of Homeland Security	$35.5 billion USD
Dept. of Housing and Urban Development	$31.5 billion USD
Dept. of the Interior	$14.1 billion USD
Dept. of Justice	$29.6 billion USD
Dept. of Labor	$46.1 billion USD
Dept. of State	$20.8 billion USD
Dept. of Transportation	$91 billion USD
Dept. of the Treasury	$752 billion USD
Dept. of Veterans Affairs	$166 billion USD
Environmental Protection Agency	$6.95 billion USD
General Services Administration	$283 million USD
International Assistance Programs	$22.7 billion USD
NASA	$16.4 billion USD
Social Security Administration	$1.02 trillion USD
+Other Departments and Agencies	$188 billion USD
Allowances	$20.2 billion USD
Undistributed Offsetting Receipts	-$208 billion USD

*/

/* 2000
Dept. of Agriculture	$92.1 billion USD
Dept. of Commerce	$9.56 billion USD
Dept. of Defense - Military Programs	$345 billion USD
Dept. of Education	$41.1 billion USD
Dept. of Energy	$18.4 billion USD
Dept. of Health and Human Services	$469 billion USD
Dept. of Homeland Security	$16.2 billion USD
Dept. of Housing and Urban Development	$37.8 billion USD
Dept. of the Interior	$9.82 billion USD
Dept. of Justice	$20.7 billion USD
Dept. of Labor	$39.1 billion USD
Dept. of State	$8.21 billion USD
Dept. of Transportation	$51 billion USD
Dept. of the Treasury	$479 billion USD
Dept. of Veterans Affairs	$57.7 billion USD
Environmental Protection Agency	$8.87 billion USD
General Services Administration	$90.8 million USD
International Assistance Programs	$14.8 billion USD
NASA	$16.5 billion USD
Social Security Administration	$542 billion USD
+Other Departments and Agencies	$131 billion USD
Undistributed Offsetting Receipts	-$212 billion USD
*/
