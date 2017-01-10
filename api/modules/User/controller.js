import { isEmail } from 'validator';
import User from './model';
import { generateToken, setUserInfo } from '../../helpers';
import '../../config/passportConfig';

// ############################
// NOTE: SIGNUP IS TEMPORARY
// ############################

// CREATE USER THROUGH SIGNUP METHOD
export const signup = (req, res) => {
  const { email, password } = req.body;
  // Check User submitted an email.
  if (!email) res.status(422).json({ success: false, message: 'Email is required!' });
  // Check User submitted a password.
  if (!password) res.status(422).json({ success: false, message: 'Password is required!' });
  // Check that email submitted is a valid email.
  if (!isEmail(email)) res.status(422).json({ success: false, message: 'Email is not valid!' });

  // Search the database for a user object with the submitted email.
  User.findOne({ 'local.email': email })
    .then(auth => {
      if (auth) res.status(422).json({ success: false, message: 'Email already used!' });

      // Create a new instance of the user model for the new user.
      const newUser = new User({ local: { email, password } });
      // Save the new user object to the database.
      newUser.save()
        .then(user => res.status(201).json({
            success: true,
            message: 'Successfully Registerd',
            token: `JWT ${generateToken(user)}`,
            user: setUserInfo(user)
          }))
        .catch(err => {
          let error;
          if (err.code === 11000) error = 'Duplicate email, please provide another one!';
          res.status(422).json({ success: false, message: error || err });
        });
    });
};

// VALIDATE USER WITH JWT TOKEN
export const login = (req, res, next) => {
  const user = setUserInfo(req.user);
  res.status(201).json({ success: true, token: `JWT ${generateToken(user)}`, user });
  next();
};
