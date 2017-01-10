import React, { PropTypes } from 'react';

const styles = {
  root: {
    auth: {
      backgroundColor: '#2185D0',
      color: 'white',
      fontStyle: 'italic',
      fontWeight: 'bold',
    },
    backgroundColor: '#FFF',
    color: 'black',
    fontSize: '1em',
    position: 'absolute',
    bottom: 0,
    left: 0
  }
};

const Footer = ({ auth }) => (
  <footer style={!auth ? styles.root : styles.root.auth}>
    <div className="containter" style={{ padding: '0.5em' }}>
      <ul>
        <li>Name</li>
        <li>Contact</li>
        <li>Copyright</li>
      </ul>
    </div>
  </footer>
);

Footer.propTypes = {
  auth: PropTypes.object,
};

export default Footer;
