import mongoose from 'mongoose';

export default conf => {
  mongoose.Promise = global.Promise;
  mongoose.connect(conf);
  mongoose.connection
    .once('open', () => console.log(`Connected to MongoDB: ${conf}`)) // eslint-disable-line
    .on('error', err => console.warn('Warning', err)); // eslint-disable-line
};
