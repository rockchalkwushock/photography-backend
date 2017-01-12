import React, { PropTypes } from 'react';
import { withTranslate } from 'react-redux-multilingual';

const HomePage = ({ translate }) => (
  <div className='homepage'>
    <h1>{translate('home:h1')}</h1>
    <h2>{translate('home:h2')}</h2>
    <h3>{translate('home:h3')}</h3>
  </div>
);

HomePage.propTypes = {
  translate: PropTypes.func
};

export default withTranslate(HomePage);
