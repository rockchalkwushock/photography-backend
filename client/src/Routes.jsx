import React from 'react';
import { Router, Route } from 'react-router';
import { history } from './redux/store';

import App from './App';

export default () => (
  <Router history={history}>
    <Route path='/home' component={App} />
  </Router>
);
