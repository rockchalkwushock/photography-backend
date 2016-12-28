import { connect } from 'react-redux';
import Signup from './Signup';
import signupUser from '../actions'; // TODO: Create actionCreator.

export default connect(
  null,
  signupUser
)(Signup);
