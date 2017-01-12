import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as formReducer } from 'redux-form';
import { IntlReducer as Intl } from 'react-redux-multilingual';
import { authReducer, photoReducer } from '../../modules';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  Intl,
  photo: photoReducer,
  routing: routerReducer,
  toastr: toastrReducer
});
