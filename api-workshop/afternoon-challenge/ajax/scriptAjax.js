$("get-mood").on("click", function(){
  // api request to be sent on button click
  console.log( "ready!" );
  $.ajax({
    method: "GET",
    url: `https://api.spotify.com/v1/search?q=track:antarctica&type=track`
  }).done(function(data) {
    console.log(data);
  });
});
