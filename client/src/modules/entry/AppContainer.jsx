import { connect } from 'react-redux';
import { checkToken, logoutUser } from '../auth/actions';
import '../../helpers/axiosConfigs';
import App from './App';

const mapStateToProps = state => (
  { auth: state.auth }
);

export default connect(
  mapStateToProps,
  { checkToken, logoutUser }
)(App);
