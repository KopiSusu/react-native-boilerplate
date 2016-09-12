export default (state = {
  	isFetching: false,
  	messages: null
}, action) => {
    switch (action.type) {
		case '_FETCH_MESSAGES':
		  return Object.assign({}, state, {
		        isFetching: false,
		        messages: action.data
			});
		    break;
		case '_SUBMIT_MESSAGE':
            let newMessages = [...state.messages]
            newMessages.push(action.payload)
			return Object.assign({}, state, {
		        isFetching: false,
		        messages: newMessages
			});
    	default:
      		return state
      		break;
  	}

}; 