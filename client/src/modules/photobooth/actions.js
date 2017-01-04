import { CLOUDINARY_DATA } from './types';
import { sendToBackEnd } from './apiMethods';

export const getCloudinaryData = result => (
  { type: CLOUDINARY_DATA, promise: sendToBackEnd(result) }
);
