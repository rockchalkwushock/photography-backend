import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';
import { LoadingScreen } from '../../../commons';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  authenticatingSelector: state => state.auth.isLoading,
  LoadingComponent: LoadingScreen,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

const AuthViews = UserIsAuthenticated(({ children }) => children);

export default AuthViews;
