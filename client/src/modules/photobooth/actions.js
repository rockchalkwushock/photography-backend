import { CLOUDINARY_DATA } from './types';
import { sendToBackEnd } from './apiMethods';

/*
  NOTE: Use onFailure() & onSuccess for rendering message to user.
*/

export const getCloudinaryData = (error, result) => (
  {
    type: CLOUDINARY_DATA,
    promise: sendToBackEnd(result),
    meta: {
      onFailure: err => console.log(err),
      onSuccess: res => console.log(res)
    }
  }
);
