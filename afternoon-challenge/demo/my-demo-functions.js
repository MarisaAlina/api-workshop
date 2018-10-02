$(document).ready(function(){

  // 1. Example function definition & call
  console.log("ready"); // prints "ready" in the console log

  var clicked = function triggered(){ // function definition within the variable "clicked"
  alert("Clicked"); // shows "Clicked" in the popup alert message box
  console.log("clicked"); // check to see that this line has been reached
};

$("#trigger").click(clicked); // function "triggered" is called, using the selector on the HTML element "trigger" and .click() jQuery function

console.log("ready again");

// 2. Exmample ajax() function use
$("#demo").click(function(){ // ajax function definition that will be executed with the selector of the button
  $.ajax({
    url: "demo.txt", // making a call to our own static resource in the same folder
    success: function(result){ // this is where we define the callback function in the success case.
      $("#textbox").html(result); // puts the success result into the div selector element
      console.log("demo has been loaded");
    }
  });
});

});
