import { handle } from 'redux-pack';
import { CLOUDINARY_DATA } from './types';

const initialState = {
  error: false,
  isLoading: false,
  message: null,
  cloudinary: null,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case CLOUDINARY_DATA:
      return handle(state, action, {
        start: s => ({ ...s, isLoading: true }),
        finish: s => ({ ...s, isLoading: false }),
        failure: s => ({ ...s, error: true, message: payload.message }),
        success: s => ({
          ...s,
          message: payload.message,
          cloudinary: payload
        }),
      });
    default:
      return state;
  }
};
