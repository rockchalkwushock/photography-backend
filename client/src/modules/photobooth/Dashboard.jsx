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

const Dashboard = () => (
  <div className='dashboard' style={styles.root}>
    <h1>YOU ARE ON THE DASHBOARD PAGE</h1>
    <h3>This is an auth protected view</h3>
  </div>
);

export default Dashboard;
