// $(document).ready(function() {
//   console.log( "ready!" );
// });

function msg(){
  alert("Hi");
  console.log("Ho");
}

//
// // Function definition with variable
// var onClick = function() {
//   alert('Clicked');
// };
// // Function call
// $('#trigger').click(onClick);
//
// // Combined
// $("#test").click(function() {
//   alert("Clicked me now");
// });
//
// // doesn't work
// $('#button tag').click(function() {
//   alert('simple button');
// });
//
// // https://medium.freecodecamp.org/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa
//
// $("#air").click(function(){
//   $.ajax({
//     dataType: "json",
//     type:"GET",
//     url: api.tfl.gov.uk/AirQuality,
//     success: function(result) {
//       console.log(result);
//     },
//     error: function(error){
//       console.console.log(`Error ${error}`);
//     }
//   });
// });
//
// const URL = "https://api.tfl.gov.uk/AirQuality";
//
// $("button").click(function(){
//   $("#air").get(URL, function(data, status){
//     console.log(`${data}`)
//   });
// });
