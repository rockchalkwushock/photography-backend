import { connect } from 'react-redux/es';
import { withTranslate } from 'react-redux-multilingual';
import { UserIsAuthenticated } from '../../auth/wrapper';
import Sidebar from './Sidebar';
import { getCloudinaryData } from '../actions';

export default connect(
  null,
  { getCloudinaryData }
)(UserIsAuthenticated(withTranslate(Sidebar)));
