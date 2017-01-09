import React from 'react';
import { IndexRoute, Route, Router } from 'react-router';
import { history } from './redux/store';

import {
  AppContainer,
  AuthViews,
  SidebarContainer,
  HomePage,
  LoginContainer,
  NonAuthViews,
  Page404,
  SignupContainer
} from './modules';

export default () => (
  <Router history={history}>
    {/* App has 2 children */}
    <Route path='/' component={AppContainer}>
    {/* Anyone can visit these routes. */}
      <Route component={NonAuthViews}>
        <IndexRoute component={HomePage} />
        <Route path='/signup' component={SignupContainer} />
        <Route path='/login' component={LoginContainer} />
      </Route>
    {/* Only Authenticated Users may visit these routes. */}
      <Route component={AuthViews}>
        <Route path='/admin'>
          <IndexRoute component={SidebarContainer} />
        </Route>
      </Route>
    </Route>
    {/* Reachable by any route Auth or Non-Auth */}
    <Route path='*' component={Page404} />
  </Router>
);
