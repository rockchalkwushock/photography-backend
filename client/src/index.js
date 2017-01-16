import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider, IntlActions } from 'react-redux-multilingual';
import ReduxToastr from 'react-redux-toastr';
import { store } from './redux/store';
import Routes from './Routes';
import { translations } from './modules';

const DEFAULT_LANGUAGE = 'ru';
store.dispatch(IntlActions.setLocale(DEFAULT_LANGUAGE));

render(
  <Provider store={store}>
    <IntlProvider translations={translations}>
      <div className='provider'>
        <Routes />
        <ReduxToastr
          timeOut={1500}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          transitionIn="bounceIn"
          transitionOut="bounceOut"
          progressBar
        />
      </div>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
