import React from 'react';
import { Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '80vh',
    flexDirection: 'column'
  }
};

const Page404 = () => (
  <div style={styles.root}>
     <h1>Page Not Found</h1>
     <Button onClick={() => browserHistory.push('/login')}>Return Home</Button>
  </div>
);

export default Page404;
