import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { store } from './redux/store';
import Routes from './Routes';

render(
  <Provider store={store}>
    <div className='provider'>
      <Routes />
      <ReduxToastr
        timeOut={2500}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="bounceIn"
        transitionOut="bounceOut"
        progressBar
      />
    </div>
  </Provider>,
  document.getElementById('root')
);
