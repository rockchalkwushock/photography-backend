import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer, photoReducer } from '../../modules';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  photo: photoReducer,
  routing: routerReducer
});
