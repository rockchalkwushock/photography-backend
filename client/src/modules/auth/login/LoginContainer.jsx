import { connect } from 'react-redux';
import Login from './Login';
import { loginUser } from '../actions';

export default connect(
  null,
  { loginUser }
)(Login);
