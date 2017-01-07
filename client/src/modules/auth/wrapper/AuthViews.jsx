import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';
import Loading from 'react-loading';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth, // how to get the user state
  authenticatingSelector: state => state.auth.isLoading,
  LoadingComponent: Loading,
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
});

const AuthViews = UserIsAuthenticated(({ children }) => children);

export default AuthViews;
