import { handle } from 'redux-pack';
import { CLOUDINARY_DATA, DATABASE_IMAGES } from './types';

const initialState = {
  error: false,
  isFetched: false,
  message: null,
  cloudinary: null,
  server: null
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case CLOUDINARY_DATA:
      return handle(state, action, {
        start: s => ({ ...s, isFetched: false }),
        finish: s => ({ ...s, isFetched: true }),
        failure: s => ({ ...s, error: true, message: 'Upload failed!' }),
        success: s => ({
          ...s,
          message: 'Upload Successful!',
          cloudinary: payload,
          server: [...s.server, ...payload.data.cloudinary]
        }),
      });
    case DATABASE_IMAGES:
      return handle(state, action, {
        start: s => ({ ...s, isFetched: false }),
        finish: s => ({ ...s, isFetched: true }),
        failure: s => ({ ...s, error: true, message: 'Database Error!' }),
        success: s => ({
          ...s,
          server: payload.data.payload
        }),
      });
    default:
      return state;
  }
};
