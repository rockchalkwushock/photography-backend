import React from 'react';
import { IndexRoute, Route, Router } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';
import { history } from './redux/store';

import App from './App';
import { Loading } from './commons';
import {
  Dashboard,
  HomePage,
  LoginContainer,
  Page404,
  PhotoBooth,
  SignupContainer
} from './modules';


/*
  Redux-Auth-Wrapper

*/
// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth, // how to get the user state
  authenticatingSelector: state => state.auth.isLoading,
  LoadingComponent: Loading,
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
});

const VisibleOnlyNoUser = UserAuthWrapper({
  authSelector: state => state.auth,
  LoadingComponent: Loading,
  wrapperDisplayName: 'VisibleOnlyIfNotUser',
  predicate: auth => !auth.authenticated,
  failureRedirectPath: '/'
});

const AuthView = UserIsAuthenticated(({ children }) => children);
const NonAuthView = VisibleOnlyNoUser(({ children }) => children);

export default () => (
  <Router history={history}>
    {/* App has 2 children */}
    <Route path='/' component={App}>
    {/* Anyone can visit these routes. */}
      <Route component={NonAuthView}>
        <IndexRoute component={HomePage} />
        <Route path='/signup' component={SignupContainer} />
        <Route path='/login' component={LoginContainer} />
      </Route>
    {/* Only Authenticated Users may visit these routes. */}
      <Route component={AuthView}>
        <Route path='/admin'>
          <IndexRoute component={Dashboard} />
          <Route path='/photo-booth' component={PhotoBooth} />
        </Route>
      </Route>
    </Route>
    {/* Reachable by any route Auth or Non-Auth */}
    <Route path='*' component={Page404} />
  </Router>
);
