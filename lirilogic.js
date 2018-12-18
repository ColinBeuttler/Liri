var Spotify = require('spotifyAPI');
 
var spotify = new Spotify({
  id: "20f35dac25f143f1b881aadfddb797a5",
  secret: "6d1df37bd2dd41698697851e4043074f"
});
 
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
  $(document).ready(function() {

    $('form').submit(function(evt) {
    
        evt.preventDefault();
    
        var $searchField = $('#song');
    
        var spotifyApi = "https://api.spotify.com/v1/search" 

    })
  });
