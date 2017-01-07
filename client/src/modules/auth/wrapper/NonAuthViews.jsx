import { UserAuthWrapper } from 'redux-auth-wrapper';
import Loading from 'react-loading';

const VisibleOnlyNoUser = UserAuthWrapper({
  authSelector: state => state.auth,
  LoadingComponent: Loading,
  wrapperDisplayName: 'VisibleOnlyIfNotUser',
  predicate: auth => !auth.authenticated,
  failureRedirectPath: '/'
});

const NonAuthViews = VisibleOnlyNoUser(({ children }) => children);

export default NonAuthViews;
