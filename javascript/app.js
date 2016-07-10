// GIPHY API key
const API_KEY = 'dc6zaTOxFJmzC';

// when user clicks on a thing with
// className = js-search
// then, run the whenSearchClicked function
$('.js-search').on('click', whenSearchClicked);

// this function will be called when the user 
// clicks the search button
function whenSearchClicked() {
	let searchQuery = $('.js-input').val();
	let URL = `http://api.giphy.com/v1/gifs/search?q=${ searchQuery }&api_key=${ API_KEY }`;
	$.get( URL ).then(function( results ){
		// when the request comes back
		let imageURL = results.data[ 0 ].images.downsized_large.url;
		$('.js-results').html(`<img src=${ imageURL }>`);
	});
}





