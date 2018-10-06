$(document).ready(function(){

  console.log("TFL Air Quality Challenge");

  const URL = "https://api.tfl.gov.uk/AirQuality"; // ?

  console.log("tfl air quality call in log");
  $("#request").click(function(){
    $.ajax({
      dataType: "json",
      type:"GET", // ?
      url: URL, // ?
      success: function(data) {
        console.log(data); // ?
      }
    });
  });

  console.log("tfl call in html") //only prints JSON to console
  $("#request").click(function(){ // ajax function definition that will be executed with the selector button
    $.ajax({url: URL, success: function(data){ //.ajax returns result, which contains the returned data in JSON format and us used here immediately as param for the callback success function
      $("#response").html("<pre>" + data + "</pre>"); // puts the success result into the div selector element via the .html function. We again pass the result as the param to be printed.
      console.log(data);
    }});
  });

  console.log("tfl call in html with JSON.stringify")
  $("#request").click(function(){
    $.ajax({url: URL, success: function(data){
      $("#response").html(JSON.stringify(data)); // We can make our page "understand" JSON by using the function JSON.stringify
      console.log(data);
    }});
  });

  console.log("tfl call in html with JSON.stringify and HTML `<pre>` tags")
  $("#request").click(function(){
    $.ajax({url: URL, success: function(data){
      $("#response").html("<pre>" +JSON.stringify(data) +"</pre>"); // make it pretty! Use HTML `<pre>` tags
      console.log(data);
    }});
  });

  console.log("tfl call in html and pick up a specific element from the JSON response")
  $("#request").click(function(){
    $.ajax({url: URL, success: function(data){
      $("#response").html("<pre>" + data.currentForecast[0].forecastSummary +"</pre>"); // extracting the first forecastSummary
      console.log(data);
    }});
  });

});
// https://medium.freecodecamp.org/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa
