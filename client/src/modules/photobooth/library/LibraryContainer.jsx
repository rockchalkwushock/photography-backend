import { connect } from 'react-redux';
import Library from './Library';
import { getFromBackEnd } from '../actions';

const mapStateToProps = ({ photo }) => (
  { photos: photo }
);

export default connect(
  mapStateToProps,
  { getFromBackEnd }
)(Library);
