import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {fetchData} from './../actions';
import _ from 'lodash';
import {configureStore} from "./../store/configure-store";
import Scene from "./scene/scene.js"
// import {configListener} from './../socket/chat.socket.js'

const user = 'admin'

// Add the reducer to your store on the `routing` key
const store = configureStore();
// const socket = configListener(store, socketConnection());


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

// Configure View
store.dispatch(fetchData(user, '_FETCH_USER'))

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={Scene}>
      	<Route path="/admin" component={Scene}/>
      	<Route path="/user" component={Scene}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('Gong')
)