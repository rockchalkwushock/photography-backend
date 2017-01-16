import mongoose from 'mongoose';

if (process.env.NODE_ENV !== 'production') {
  process.env.MONGO_URL = 'mongodb://localhost/photography-backend-dev';
}

// CONNECT TO MONGO_DB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL);
mongoose.connection
  .once('open', () => console.log(`Connected to MongoDb: running on ${process.env.MONGO_URL}`))
  .on('error', err => console.warn('Warning', err));
