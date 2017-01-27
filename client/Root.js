import React from 'react';
import { Provider } from 'react-redux/es';
import { IntlProvider } from 'react-redux-multilingual';
import { Router } from 'react-router/es';
import ReduxToastr from 'react-redux-toastr';
import { history, store } from './redux/store';
import componentRoutes from './dynamicRouting';
import { translations } from './modules';

const Root = () => (
  <Provider store={store}>
    <IntlProvider translations={translations}>
      <div className='provider'>
        <Router history={history} routes={componentRoutes} />
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
  </Provider>
);

export default Root;
