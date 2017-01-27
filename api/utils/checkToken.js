/*
Check Token is responsible for verifying:
* 1. The user has a JWT.
* 2. The JWT is valid/active.
* 3. Refreshing a user's JWT.
*
* STATUS CODES:
*
* 1. 401: No JWT present --OR-- JWT refresh issue.
* 2. 422: JWT expired --OR-- JWT verification issue.
* 3. 201: JWT refreshed successfully.
*/

import jwt from 'jsonwebtoken';
import { generateToken, setUserInfo } from './index';
import { User } from '../modules';

const secret = process.env.JWT_SECRET;

// CHECK JWT TOKEN STATUS.
export const checkToken = (req, res) => {
  const { token } = req.body;

  // Does the user possess a JWT?
  if (!token) {
    return res.status(401).json({ success: false, message: 'Must have JWT.' });
  }

  // Verify the status of user's JWT.
  jwt.verify(token.replace(/^JWT\s/, ''), secret, (err, decoded) => {
    if (err) {
      // If status = expired, prompt user to login again.
      if (err.name === 'TokenExpiredError') {
        return res.status(422).json({
          success: false,
          expireTime: true,
          message: 'JWT has expired. Please login again, this is for your security!'
        });
      }
      // If this can't be done return error message.
      return res.status(422).json({
        success: false,
        message: 'JWT Verification Issue.'
      });
    }

    // Find user in db and generate a new JWT.
    User.findById(decoded.sub)
      .then(user => res.status(201).json({
        success: true,
        message: 'JWT Refreshed.',
        token: `JWT ${generateToken(user)}`,
        user: setUserInfo(user)
      }))
      // If this can't be done return error message.
      .catch(error => res.status(401).json({
        success: false,
        message: 'JWT Refresh Issue.',
        error
      }));
  });
};
