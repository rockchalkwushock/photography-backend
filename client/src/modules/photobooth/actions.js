import { toastr } from 'react-redux-toastr';
import { CLOUDINARY_DATA, DATABASE_IMAGES } from './types';
import { fetchFromBackEnd, sendToBackEnd } from './apiMethods';

export const getCloudinaryData = (error, result) => (
  {
    type: CLOUDINARY_DATA,
    promise: sendToBackEnd(result), // POST Request to API Server
    meta: {
      onFailure: () => toastr.warning('Failure!', 'Upload Failed!'),
      onSuccess: () => toastr.success('Success!', 'Successfully Uploaded!')
    }
  }
);

export const getFromBackEnd = () => (
  {
    type: DATABASE_IMAGES,
    promise: fetchFromBackEnd(), // GET Request to API Server
    meta: {
      onFailure: () => toastr.warning('Failure!', 'Database Error.'),
    }
  }
);
