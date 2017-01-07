import { CLOUDINARY_DATA, DATABASE_IMAGES } from './types';
import { fetchFromBackEnd, sendToBackEnd } from './apiMethods';

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

export const getFromBackEnd = () => (
  {
    type: DATABASE_IMAGES,
    promise: fetchFromBackEnd(),
    meta: {
      onFailure: err => console.log(err),
      onSuccess: res => console.log(res)
    }
  }
);
