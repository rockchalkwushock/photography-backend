import React from 'react';
import { Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

const Page404 = () => (
  <div className='page404'>
     <h1>Page Not Found</h1>
     <Button onClick={() => browserHistory.push('/login')}>Return Home</Button>
  </div>
);

export default Page404;
