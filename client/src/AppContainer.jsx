import { connect } from 'react-redux';
import { checkToken, logoutUser } from './modules/auth/actions';
import './helpers/axiosConfigs';
import { App } from './modules';

const mapStateToProps = state => (
  { auth: state.auth }
);

export default connect(
  mapStateToProps,
  { checkToken, logoutUser }
)(App);
