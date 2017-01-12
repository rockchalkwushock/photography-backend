import React, { PropTypes } from 'react';
import { withTranslate } from 'react-redux-multilingual';
import { Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

const Page404 = ({ translate }) => (
  <div className='page404'>
     <h1>{translate('page404')}</h1>
     <Button onClick={() => browserHistory.push('/')}>{translate('home')}</Button>
  </div>
);

Page404.propTypes = {
  translate: PropTypes.func
};

export default withTranslate(Page404);
