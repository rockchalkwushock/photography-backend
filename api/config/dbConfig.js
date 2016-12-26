import mongoose from 'mongoose';
import './envConfig';

// ENVVARS
let MONGO_URL = process.env.MONGO_URL;
const mode = process.env.NODE_ENV;

if (mode !== 'production') {
  MONGO_URL = 'mongodb://localhost/photography-backend-dev';
}

// CONNECT TO MONGO_DB
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL);
mongoose.connection
  .once('open', () => console.log(`Connected to MongoDb: running on ${MONGO_URL}`))
  .on('error', err => console.warn('Warning', err));
