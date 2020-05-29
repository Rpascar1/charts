// import ReactOnRails from 'react-on-rails';
//
// import { App } from '../components/App.jsx';
//
//
// ReactOnRails.register({
//   SiteHeader,
//   ProductRow
// });


import React from 'react'
import ReactDom from 'react-dom'
import {
  Provider
} from 'react-redux'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import reduxThunk from 'redux-thunk'
import App from '../components/App'
import reducers from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)


ReactDom.render(

  React.createElement(
    Provider, {
      store: store
    },

    React.createElement(
      App
    )
  ),


  document.querySelector('#root')

)
