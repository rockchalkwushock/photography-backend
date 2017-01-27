import { connect } from 'react-redux/es';
import { checkToken, logoutUser } from '../auth/actions';
import '../../utils/axiosConfig';
import App from './App';

const mapStateToProps = state => (
  { auth: state.auth }
);

export default connect(
  mapStateToProps,
  { checkToken, logoutUser }
)(App);
