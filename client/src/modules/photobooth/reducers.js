import { handle } from 'redux-pack';
import { CLOUDINARY_DATA, DATABASE_IMAGES } from './types';

const initialState = {
  error: false,
  isLoading: false,
  message: null,
  cloudinary: null,
  server: null
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case CLOUDINARY_DATA:
      return handle(state, action, {
        start: s => ({ ...s, isLoading: true }),
        finish: s => ({ ...s, isLoading: false }),
        failure: s => ({ ...s, error: true, message: 'Upload failed!' }),
        success: s => ({
          ...s,
          message: 'Upload Successful!',
          cloudinary: payload
        }),
      });
    case DATABASE_IMAGES:
      return handle(state, action, {
        start: s => ({ ...s, isLoading: true }),
        finish: s => ({ ...s, isLoading: false }),
        failure: s => ({ ...s, error: true, message: '' }),
        success: s => ({
          ...s,
          server: payload
        }),
      });
    default:
      return state;
  }
};
