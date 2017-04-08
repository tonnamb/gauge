import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import ReduxPromise from 'redux-promise'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import App from './components/App'

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const composeArray = [applyMiddleware(ReduxPromise), applyMiddleware(thunk)]

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  composeArray.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}

let store = createStore(rootReducer, compose.apply(null, composeArray))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
