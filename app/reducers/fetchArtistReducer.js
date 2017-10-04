export let fetchArtistReducer = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_ARTIST':
    return Object.assign({}, state, {
      artist: Object.assign({}, action.data)
    })
		default: 
			return state			
	}
}