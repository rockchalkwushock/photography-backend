import { toastr } from 'react-redux-toastr';
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
      onFailure: (res) => toastr.warning('Failure!', res.message),
      onSuccess: (res) => toastr.success('Success!', res.message)
    }
  }
);

export const getFromBackEnd = () => (
  {
    type: DATABASE_IMAGES,
    promise: fetchFromBackEnd(),
    meta: {
      onFailure: () => toastr.warning('Failure!', 'Database Error.'),
    }
  }
);
