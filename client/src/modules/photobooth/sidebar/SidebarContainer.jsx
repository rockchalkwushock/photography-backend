import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { getCloudinaryData } from '../actions';

export default connect(
  null,
  { getCloudinaryData }
)(Sidebar);
