import './cloudinary';

// My Cloudinary presets.
const cloudinaryOptions = {
  cloud_name: 'rockchalkwushock',
  upload_preset: 'ogwn4skf',
  theme: 'minimal'
};

// Function for opening the widet onClick event with button.
export const openWidget = (action) => {
  // takes options={}, callback()
  cloudinary.openUploadWidget(cloudinaryOptions, action); // eslint-disable-line
};
