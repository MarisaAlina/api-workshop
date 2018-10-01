$(document).ready(function(){

  console.log("TFL Air Quality Challenge");

// 1. Which URL do you have to use? Check the documentation!
  const URL = "";

// 2. Add the correct method type & URL
  console.log("tfl air quality call in log");
  $("#request").click(function(){
    $.ajax({
      dataType: "json" // this is an example for a parameter of the API request. Add the remaining in the same manner.
      // Add the method type of the call
      // Add the URL to use
      success: function(data) {
       // 3. Tell the console to print the response in the log
      }
    });
  });


  // 4. Now "print" the response to the console. Define a function for this (hint: check the my-demo-functions.js script in the demo folder)
  console.log("")
  $("#request").click(function(){ // ajax function definition that will be executed with the selector button
    $.ajax({url: URL, success: function(data){ //.ajax() returns the result of the API call, which contains the returned data by standard in JSON format.
      // We want to use the response object immediately and therefore set it as parameter for the callback success function.
      // Define a function for this and update the div selector element with the response object (hint: you can use the .html() method).
      // Log the data in the console
    }});
  });

// 5. jQuery "understands" JSON, google for the use of the stringify() method. Define a function for this and update the div element and selector with the response object
  console.log("tfl call in html with JSON.stringify")
  $("#request").click(function(){
    $.ajax({url: URL, success: function(data){
      // Make jQuery "understand" JSON
    }});
  });

// 6. Make it even prettier! Use HTML <pre> tags
  console.log("tfl call in html with JSON.stringify and HTML `<pre>` tags")
  $("#request").click(function(){
    $.ajax({url: URL, success: function(data){
      // make it pretty! Use HTML `<pre>` tags
    }});
  });

// 7. Make it even prettier! Use HTML <pre> tags
  console.log("tfl call in html and pick up a specific element from the JSON response")
  $("#request").click(function(){
    $.ajax({url: URL, success: function(data){
      // extract the JSON property first forecastSummary
    }});
  });

});
