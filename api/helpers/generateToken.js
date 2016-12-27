import jwt from 'jwt-simple';
import '../config/envConfig';

const secret = process.env.JWT_SECRET;

// CREATE JWT TOKEN FOR USER
export const generateToken = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, secret);
};
