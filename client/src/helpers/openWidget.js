import './cloudinary';

// My Cloudinary presets.
const cloudinaryOptions = {
  cloud_name: process.env.REACT_APP_CLOUD_NAME,
  upload_preset: process.env.REACT_APP_UPLOAD_PRESET,
  theme: 'minimal'
};

// Function for opening the widet onClick event with button.
export const openWidget = (action) => {
  // takes options={}, callback()
  cloudinary.openUploadWidget(cloudinaryOptions, action); // eslint-disable-line
};
