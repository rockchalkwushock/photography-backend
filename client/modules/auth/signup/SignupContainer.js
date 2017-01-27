import { connect } from 'react-redux/es';
import { withTranslate } from 'react-redux-multilingual';
import { VisibleOnlyIfNotUser } from '../wrapper';
import Signup from './Signup';
import { signupUser } from '../actions';

export default connect(
  null,
  { signupUser }
)(VisibleOnlyIfNotUser(withTranslate(Signup)));
