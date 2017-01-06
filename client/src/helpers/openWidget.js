import './cloudinary';
import { catchResults } from './catchResults';

// My Cloudinary presets.
const cloudinaryOptions = {
  cloud_name: 'rockchalkwushock',
  upload_preset: 'dzaahj3m'
};

// callback will fire when upload is complete.
// (unless I implement it to do so onClose of widget)
// error = null if success, error message if error.
// result = [of photos uploaded]
const callback = (error, result) => {
  catchResults(result);
};

// Function for opening the widet onClick event with button.
export const openWidget = () => {
  // takes options={}, callback()
  cloudinary.openUploadWidget(cloudinaryOptions, callback); // eslint-disable-line
};
