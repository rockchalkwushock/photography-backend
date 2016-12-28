import { applyMiddleware, compose, createStore } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import promise from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const routingMiddleware = routerMiddleware(browserHistory);
const middlewares = [promise(), routingMiddleware, reduxPackMiddleware];
const middlewareDev = [createLogger()];
let enhancers;

if (process.env.NODE_ENV !== 'production') {
  enhancers = compose(
    applyMiddleware(...middlewares, ...middlewareDev)
  );
} else {
  enhancers = compose(applyMiddleware(...middlewares));
}

const store = createStore(rootReducer, {}, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);
export { store };
