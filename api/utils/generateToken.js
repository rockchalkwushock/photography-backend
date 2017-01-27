import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;
const time = process.env.NODE_ENV === 'test' ?
                '1s' : process.env.JWT_TOKEN_EXPIRE_TIME;

// CREATE JWT TOKEN FOR USER
export const generateToken = user => jwt.sign({
  sub: user.id }, secret, { expiresIn: time }
);
