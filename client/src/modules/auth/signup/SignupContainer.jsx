import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import Signup from './Signup';
import { signupUser } from '../actions';

export default connect(
  null,
  { signupUser }
)(withTranslate(Signup));
