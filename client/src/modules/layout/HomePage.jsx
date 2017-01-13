import React, { PropTypes } from 'react';
import { IntlActions, withTranslate } from 'react-redux-multilingual';
import { Flag } from 'semantic-ui-react';
import { store } from '../../redux/store';

const HomePage = ({ translate }) => (
  <div className='homepage'>
    <div className="flags">
      <Flag
        name='ru'
        onClick={() => store.dispatch(IntlActions.setLocale('ru'))}
      />
      <Flag
        name='us'
        onClick={() => store.dispatch(IntlActions.setLocale('en'))}
      />
    </div>
    <h1>{translate('home:h1')}</h1>
    <h2>{translate('home:h2')}</h2>
    <h3>{translate('home:h3')}</h3>
  </div>
);

HomePage.propTypes = {
  translate: PropTypes.func
};

export default withTranslate(HomePage);
