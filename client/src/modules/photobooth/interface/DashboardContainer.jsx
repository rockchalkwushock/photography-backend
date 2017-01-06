import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { getCloudinaryData } from '../actions';

export default connect(
  null,
  { getCloudinaryData }
)(Dashboard);
