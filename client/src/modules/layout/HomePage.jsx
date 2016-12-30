import React from 'react';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '80vh',
    flexDirection: 'column'
  }
};

const HomePage = () => (
  <div className='homepage' style={styles.root}>
    <h1>YOU ARE ON THE HOMEPAGE</h1>
  </div>
);

export default HomePage;
