let autocomplete; 

function initAutocomplete() {

    let input = document.getElementById('autocomplete')
    autocomplete = new google.maps.places.Autocomplete(input , {types: ['geocode']});
}

function geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
      });
    }
}

