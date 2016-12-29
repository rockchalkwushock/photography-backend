import { applyMiddleware, createStore } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const routingMiddleware = routerMiddleware(browserHistory);
const middlewares = [promise(), routingMiddleware, reduxPackMiddleware];
const middlewareDev = [createLogger()];
let enhancers;

if (process.env.NODE_ENV !== 'production') {
  enhancers = composeWithDevTools(
    applyMiddleware(...middlewares, ...middlewareDev)
  );
} else {
  enhancers = composeWithDevTools(applyMiddleware(...middlewares));
}

const store = createStore(rootReducer, {}, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);
export { store };
