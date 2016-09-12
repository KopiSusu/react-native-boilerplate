/* @flow */
/*global setTimeout*/
import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

export const selectGroup = (group) => {
    return {
        type: 'SELECT_GROUP',
        payload: group
    }
}

export const submitMessage = (message) => {
  return {
    meta: {remote: true},
    type: 'SUBMIT_MESSAGE',
    payload: message
  }
}
export const receiveData = (json, returnType, nestedKey) => {
	let returnResponse = {
		type: returnType,
		data: json,
		receivedAt: Date.now()
	}
	if (nestedKey)
		returnResponse.nestedKey = nestedKey

	return returnResponse
}
export function fetchData(url, returnType, nestedKey) {
  return function (dispatch) {
    return fetch(`https://s3.amazonaws.com/datadummy/${url}.json`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveData(json, returnType, nestedKey))
      )
  }
}