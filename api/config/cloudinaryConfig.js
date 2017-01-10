import cloudinary from 'cloudinary';
import './envConfig';
import '../../.env';

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
