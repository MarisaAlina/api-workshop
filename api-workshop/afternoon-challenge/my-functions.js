//
// $("#trigger").click(function(){
//   console.log("clicked");
// })
//
// $("button").click(function(){
//   $("#trigger").$("#trigger").click(function(){
//     console.log("clicked");
//   })
// })


// Function definition with variable
var onClick = function(){
  alert('Clicked');
};
// Function call
$('#trigger').click(onClick);

// Function call & definition in one
$("#test").click(function(){
  alert("Clicked");
});

$("#test2").click(function(){
  alert("Clicked");
});

$("#air").click(function(){
  $.ajax({
    dataType: "json",
    type:"GET",
    url: api.tfl.gov.uk/AirQuality,
    success: function(result) {
      console.log(result);
    },
    error: function(error){
      console.console.log(`Error ${error}`);
    }
  });
});

const URL = "https://api.tfl.gov.uk/AirQuality";

$("button").click(function(){
  $("#air").get(URL, function(data, status){
    console.log(`${data}`)
  });
});

// $.getJSON(theUrlYouneed, function (data){
// \\ leave this blank for now but inside this function we will write the code to manipulate the API requests
// });
// data.map(function(arrival)){
//   console.log(arrival);
// });

// <button onclick="getResponse()">the button text</button>
//
// <script>
// function getResponse(){
// var request = new HttpRequest();
// request.open("GET", "TARGET URL (EX http://127.0.0.1:8000/)", false(async flag), "userName", "password");
// request.send();
// }
// </script>
-->
