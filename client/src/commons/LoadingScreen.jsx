import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
};

const LoadingScreen = ({ size }) => (
  <div style={styles.root}>
      <Dimmer active>
        <Loader size={size}>Preparing Files</Loader>
      </Dimmer>
  </div>
);

export default LoadingScreen;
