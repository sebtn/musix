import axios from 'axios'
// import Spotify from 'node-spotify-api'
var Spotify = require('spotify-web-api-js');
import {clientId, clientSecret} from '../../config.js'
var spotifyApi = new Spotify();
// var spotifyApi = new SpotifyWebApi();

spotifyApi.setAccessToken('BQBbJbFih3O9iM9bszik59JlRg02uAh2Q4jWPHNcx6HNPke02ADxAvq5jYFHU1XnshnWIhcTB8sRs7NGHYE2rZjqBhsNq-TcGDyRWiUjv63PjyP3JtuhNuDg1tqOfAF0_HQ1NhKfXQHilvrZEBs3cnXqS3LS&refresh_token=AQAVxhutOTmyZTPU1XhTNIe7F095juox-YfwnVXhFsqHbGYtmLeObpXwgs-B9HpwjNktKm77nR1cW7w9o0Geeky-4MJZiI8mkFCOdi_7b8bf0p-KaKRiQIL9i07xoQjcS8g');
export let setSearchText = (searchText) => {
	return {
		type: "SET_SEARCH_TEXT",
		searchText
	}
}
// return {
// 	type: "FETCH_ARTIST",
// 	request
// }

export let fetchArtist = (artist_name) => {
	return spotifyApi.searchArtists(artist_name)
  .then(function(data) {
    console.log('Search artists by', data);
  }, function(err) {
    console.error(err);
  });

}

