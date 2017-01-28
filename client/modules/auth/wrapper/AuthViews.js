import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';
import { LoadingScreen } from '../../../commons';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth.user,
  authenticatingSelector: state => state.auth.isLoading,
  LoadingComponent: LoadingScreen,
  redirectAction: routerActions.replace,
  failureRedirectPath: '/',
  wrapperDisplayName: 'UserIsAuthenticated'
});

export default UserIsAuthenticated;
