import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import Sidebar from './Sidebar';
import { getCloudinaryData } from '../actions';

export default connect(
  null,
  { getCloudinaryData }
)(withTranslate(Sidebar));
