import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { User } from '../modules';

// #################
// LOCAL STRATEGY
// #################

const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // Search database for this email (user).
  User.findOne({ 'local.email': email })
      .then(user => {
        // if not present...
        // return no error and no user.
        if (!user) done(null, false);
        // if present...
        // Validate password through comparison.
        user.comparePassword(password, (err, isMatch) => {
          if (err) done(err);
          if (!isMatch) done(null, false, { message: 'User does not exist.' });
          // return user.
          done(null, user);
        });
      })
      .catch(err => done(err));
});

// ###############
// JWT STRATEGY
// ###############

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader('authorization'),
  secretOrKey: process.env.JWT_SECRET
};

const jwtLogin = new JWTStrategy(jwtOptions, (payload, done) => {
  // Search user._id in payload.
  User.findById(payload.sub) // payload.subject - conatins user._id if valid.
      .then(user => {
        // if not present...
        // return no error and no user.
        if (!user) done(null, false);
        // return user.
        done(null, user);
      })
      .catch((err) => done(err));
});

// Tell passport to use these Strategies.
passport.use(jwtLogin);
passport.use(localLogin);
