import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import App from './components/App';
import Alarms from './components/Alarms';
import reducers from './redux';
import dependencies from './dependencies';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like here name, actionsBlacklist, actionsCreators or immutablejs support
    }) : compose;

let store = createStore(
  combineReducers({
    ...reducers,
    form: formReducer
  }),
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(dependencies)),
  )
);

export default (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="alarms" component={Alarms} />
      </Route>
    </Router>
  </Provider>
);