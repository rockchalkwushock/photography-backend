import React from 'react';
import { render } from 'react-dom';
import { IntlActions } from 'react-redux-multilingual';
import { store } from './redux/store';
import Root from './Root';
import '../public/styles.css';

const DEFAULT_LANGUAGE = 'ru';
store.dispatch(IntlActions.setLocale(DEFAULT_LANGUAGE));

render(<Root />, document.getElementById('root'));
