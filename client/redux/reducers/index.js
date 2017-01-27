import { combineReducers } from 'redux/es';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as formReducer } from 'redux-form/es';
import { IntlReducer as Intl } from 'react-redux-multilingual';

export default combineReducers({
  form: formReducer,
  Intl,
  routing: routerReducer,
  toastr: toastrReducer
});
