import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { IntlActions } from 'react-redux-multilingual';
import { store } from './redux/store';
import Root from './Root';
import './styles.css';

const DEFAULT_LANGUAGE = 'ru';
store.dispatch(IntlActions.setLocale(DEFAULT_LANGUAGE));

const renderApp = Component => {
  render(
    <AppContainer>
        <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewApp = require('./Root').default;

    renderApp(NewApp);
  });
}
