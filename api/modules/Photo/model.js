import mongoose, { Schema } from 'mongoose';

// PHOTO SCHEMA
// NOTE: May or may not use public_id. (provides use of transformations after the fact)
const photoSchema = new Schema({
  createdAt: Date,
  public_id: {
    type: String,
    lowercase: true
  },
  url: String
});

// PHOTO MODEL
const Photo = mongoose.model('photos', photoSchema);

export default Photo;
