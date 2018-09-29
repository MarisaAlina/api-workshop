$(document).ready(function(){

  console.log("TFL Journey Planner Challenge");

  const URL = "https://api.tfl.gov.uk/Journey/JourneyResults/" + from + "/to/" + to;
  // var from = $("#from").val();
  // var to = $("#to").val();

  var from = $("#from").attr("id");
  var from = $("#myform input[id=from]").val();

  console.log("params: " +from +" " +to);
  console.log("params: " +from +" " +to);

});
// https://medium.freecodecamp.org/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa
