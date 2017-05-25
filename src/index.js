import React from 'react'
import ReactDOM from 'react-dom'
import { Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import 'bootstrap-css-only'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
//import recoverFromStorage from './middlewares/recoverFromStorage'
import { createLogger } from 'redux-logger'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { stringify, parse } from 'qs'
import qhistory from 'qhistory'

import rootReducer from './reducers'
import Header from './containers/Header'
import PhotoGrid from './containers/PhotoGrid'
import History from './containers/History'
import './App.css'
import App from './App'

const logger = createLogger()
const store = createStore(
  rootReducer,

  compose(
    applyMiddleware(
      promiseMiddleware(),
      thunk,
      //recoverFromStorage,
      logger
    )
    //,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
// if(localStorage.getItem("PS_ENGINE_STATE")){
//   store.dispatch({ type: 'INIT' })
// }

const history = qhistory(createBrowserHistory(), stringify, parse)
if(typeof history.location.key === 'undefined'){
//First visit in inner url, we prevent the crush of no state object.
  history.replace({
      pathname: history.location.pathname,
      query: {
        q:history.location.query.q
      },
      search: stringify({ q: history.location.search }),
      state: {
        topic: history.location.query.q
      }
    })
}

const router = (
  <Provider store={store}>
    <Router history={history} basename="/react-photos-search-engine">
      <App>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/Search" component={PhotoGrid} />
        </Switch>
        <Route exact path="/History" component={History} />
      </App>
    </Router>
  </Provider>
)
ReactDOM.render(
  router,
  document.getElementById('root')
);