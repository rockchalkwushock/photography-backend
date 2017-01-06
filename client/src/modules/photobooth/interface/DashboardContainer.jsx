import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { getFromBackEnd, getCloudinaryData } from '../actions';

const mapStateToProps = ({ photo }) => (
  { cloudinary: photo.cloudinary } // array of object(s)
);
export default connect(
  mapStateToProps,
  { getFromBackEnd,
    getCloudinaryData }
)(Dashboard);
