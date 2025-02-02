import jwt, { JwtPayload } from 'jsonwebtoken';

const createToken = (
  payload: Record<string, unknown>,
  secret: string, // Ensure secret is explicitly a string
  expireTime: string
): string => {
  return jwt.sign(payload, secret, {
    expiresIn: '1d',
  });
};

const createResetToken = (
  payload: Record<string, unknown>, // Use a more specific type instead of 'any'
  secret: string, // Ensure secret is explicitly a string
  expireTime: string
): string => {
  return jwt.sign(payload, secret, {
    expiresIn: '1d',
  });
};

const verifyToken = (token: string, secret: string): JwtPayload => {
  const decoded = jwt.verify(token, secret);

  // Ensure the return type is always JwtPayload
  if (typeof decoded === 'string') {
    throw new Error('Invalid token payload'); // Handle string return case
  }

  return decoded as JwtPayload;
};

export const jwtHelpers = {
  createToken,
  verifyToken,
  createResetToken,
};
