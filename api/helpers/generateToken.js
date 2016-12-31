import jwt from 'jsonwebtoken';
import '../config/envConfig';

const secret = process.env.JWT_SECRET;

// CREATE JWT TOKEN FOR USER
export const generateToken = user => jwt.sign({
  sub: user.id }, secret, { expiresIn: '1h' }
);
