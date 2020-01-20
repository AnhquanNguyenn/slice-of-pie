jQuery(document).ready(function() {       
  $("#google-reviews").googlePlaces({          
     placeId: 'ChIJ3-4b3qPHS4YR3apMFUkFVsk',          
     render: ['reviews'],          
     min_rating: 5,          
     max_rows: 3       
   });    
}); 