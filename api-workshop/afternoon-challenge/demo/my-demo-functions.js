$(document).ready(function(){

  console.log("ready");

  $("#demo").click(function(){ // ajax function definition that will be executed with the selector button
    $.ajax({url: "demo.txt", success: function(result){
      $("#div1").html(result); // puts the success result into the div selector element
      console.log("demo has been loaded");
    }
  });
});

// $(document).ready(function(){ // everything has to be wrapped within this function for that one to work
//   function msg(){
//     alert("Hi");
//     console.log("Ho");
//   };
// });

console.log("ready again");

// function definition at call
// $(document).ready(function(){
//   $("#trigger").click(function(){
//     alert ("Clicked");
//     console.log("clicked");
//   })
// });

var clicked = function triggered(){
  alert ("Clicked");
  console.log("clicked");
};
$("#trigger").click(clicked);

});
