import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';
import Loading from 'react-loading';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  authenticatingSelector: state => state.auth.isLoading,
  LoadingComponent: Loading,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

const AuthViews = UserIsAuthenticated(({ children }) => children);

export default AuthViews;
