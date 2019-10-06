/*-----------------Autocomplete locations*/
function activatePlacesSearch() {
   var input = document.getElementById('search_term');
   var Autocomplete = new google.maps.places.Autocomplete(input);
}

/*-----------------Fetch and display packages to match search criteria*/





function fetchhotels(event) {



    var username = $("#city").val();

    if (!username) {

        $("#hotelpic").html(`<h2>Please enter search criteria</h2>`);

        return;

    }
}