import { UserAuthWrapper } from 'redux-auth-wrapper';

const VisibleOnlyNoUser = UserAuthWrapper({
  authSelector: state => state.auth,
  wrapperDisplayName: 'VisibleOnlyIfNotUser',
  predicate: auth => !auth.token,
  failureRedirectPath: '/'
});

const NonAuthViews = VisibleOnlyNoUser(({ children }) => children);

export default NonAuthViews;
