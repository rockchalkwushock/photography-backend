import { Cloudinary } from 'cloudinary-core';
import './envConfig';

const cloudinary = Cloudinary.new({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

export default cloudinary;
