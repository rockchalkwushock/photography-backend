import React, { PropTypes } from 'react';
import { withTranslate } from 'react-redux-multilingual';

const styles = {
  root: {
    auth: {
      backgroundColor: '#2E4172',
      color: '#82BB5D',
      fontStyle: 'italic',
      fontWeight: 'bold',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    },
    backgroundColor: '#FFF',
    color: 'black',
    fontSize: '1em',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
  }
};

const Footer = ({ auth, translate }) => (
  <footer style={!auth ? styles.root : styles.root.auth}>
    <div className="containter" style={{ padding: '0.5em' }}>
      <ul>
        <li>{translate('temp')}</li>
        <li>{translate('temp')}</li>
        <li>{translate('temp')}</li>
      </ul>
    </div>
  </footer>
);

Footer.propTypes = {
  auth: PropTypes.object,
  translate: PropTypes.func
};

export default withTranslate(Footer);
