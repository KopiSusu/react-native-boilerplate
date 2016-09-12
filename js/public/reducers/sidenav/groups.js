const initStart = {
	"id": 1,
	"name": "Select Direct or Channel to start chatting!",
	"icon": "WhatsApp",
	"query": {}
}


export default (state = {
  	isFetching: false,
  	channels: null,
  	direct: null,
  	selected: initStart
}, action) => {
  	switch (action.type) {
  		case 'SELECT_GROUP':
  			return Object.assign({}, state, {
		        isFetching: false,
		        selected: action.payload
			});
			break;
		case '_FETCH_LIST':
			let newState = state;
			newState.isFetching = false;
			newState[action.nestedKey] = action.data;
		    return Object.assign({}, state, newState);
		    break;
    	default:
      		return state
      		break;
  	}

}; 