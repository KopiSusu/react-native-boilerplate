/* @flow */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import groups from './sidenav/groups'
import auth from './auth/auth'
import chat from './chat/chat'

const rootReducer = combineReducers({
  groups: groups,
  auth: auth,
  chat: chat,
  routing: routerReducer
});

export default rootReducer;

