import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import Login from './Login';
import { loginUser } from '../actions';

export default connect(
  null,
  { loginUser }
)(withTranslate(Login));
