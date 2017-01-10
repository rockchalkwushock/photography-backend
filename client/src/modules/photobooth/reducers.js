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
  console.log(payload);
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
          server: [...s.server, { url: payload[0].url, _id: payload[0]._id }]
        }),
      });
    case DATABASE_IMAGES:
      return handle(state, action, {
        start: s => ({ ...s, isFetched: false }),
        finish: s => ({ ...s, isFetched: true }),
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
