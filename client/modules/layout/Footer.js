import React, { PropTypes } from 'react';

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

const Footer = ({ auth }) => (
  <footer style={!auth ? styles.root : styles.root.auth} />
);

Footer.propTypes = {
  auth: PropTypes.object
};

export default Footer;
