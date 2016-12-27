import mongoose, { Schema } from 'mongoose';
import { compare, hash } from 'bcrypt';
import { isEmail } from 'validator';

// USER SCHEMA
const userSchema = new Schema({
  local: {
    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      validate: [isEmail, 'You must provide a valid email.']
    },
    password: {
      type: String,
      trim: true
    }
  }
});

// ENCRYPTING PASSWORD
userSchema.pre('save', function (next) {
  // check if it's new password or update one so we don't touch it
  if (!this.isModified('local.password')) next();
  const salt = 10;
  hash(this.local.password, salt, (err, hashed) => {
    if (err) next(err);
    this.local.password = hashed;
    next();
  });
});

// PASSWORD COMPARISSON
userSchema.methods.comparePassword = function (canditePassword, callback) {
  // compare the submitted password to encrypted password in database.
  compare(canditePassword, this.local.password, (err, isMatch) => {
    if (err) callback(err);
    callback(null, isMatch);
  });
};

// USER MODEL
const User = mongoose.model('users', userSchema);

export default User;
