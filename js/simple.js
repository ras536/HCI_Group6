//
// simple.js
//
// April 22, 2017
// The main javascript file for simple.html
//

window.onload = function(){
};

// Updates the numerical value in the text object
// that displays the value of the throughput slider
function update_throughput(){
  var dom_throughput = document.getElementById("range_throughput");
  var dom_text = document.getElementById("text_throughput"); // it's a div
  
  dom_text.value = Math.floor( dom_throughput.value / 100 * 10000 );
}