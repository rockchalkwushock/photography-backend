import mongoose, { Schema } from 'mongoose';

// PHOTO SCHEMA
const photoSchema = new Schema({
  public_id: {
    type: String,
    lowercase: true,
    unique: true,
  },
  thumbnail_url: String,
  url: String
}, { timestamps: true });

// PHOTO MODEL
const Photo = mongoose.model('photos', photoSchema);

export default Photo;
