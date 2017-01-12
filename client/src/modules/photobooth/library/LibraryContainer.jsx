import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import Library from './Library';
import { getFromBackEnd } from '../actions';

const mapStateToProps = ({ photo }) => (
  { photos: photo }
);

export default connect(
  mapStateToProps,
  { getFromBackEnd }
)(withTranslate(Library));
