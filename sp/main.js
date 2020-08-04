//$("#apiButton").on("click",function(e){


execute();

  function execute(){
   console.log(window.location)
   var uriHash= window.location.hash //holds my access token
   var accessToken = uriHash.replace('#access_token=', '')
   var apiURL= "https://api.spotify.com/v1/me/player/currently-playing"
  $.ajax({

      url: apiURL,
      headers: {
       'Authorization': 'Bearer ' + accessToken
     },
      success: function(response){
          console.log(response);
          document.getElementById("song").innerHTML = response['item']['name'];
          document.getElementById("album").innerHTML = response['item']['album']['name'];
          $("img").attr("src", response['item']['album']['images']['0']['url']);
          var length = response['item']['duration_ms'] - response['progress_ms'];
          var length_once = response['item']['duration_ms']
          var length2 = (length-(length%1000))/1000;
          var length_twice = (length_once-(length_once%1000))/1000;

          $("input").attr("value", length_twice - length2 );
          $("input").attr("max", length_twice );
          document.getElementById("title").innerHTML = "Currently Playing - " + response['item']['name'];
          if(response['is_playing'] === false){
            $("img").attr("src", "paused.png")
          }
          if(response['currently_playing_type'] === "ad"){
            document.getElementById("song").innerHTML = "Advertisement";
          }
        },

      error: function(r){
        console.log(r);
  }
  })
  
  setTimeout(function (){

    execute();
    
    }, 1000);


}

