import dotenv from 'dotenv';

// Configure Envvars.
dotenv.config();

// Bring in Envvars from .env.
const envVariables = [
  'API_KEY',
  'API_SECRET',
  'CLOUD_NAME',
  'JWT_TOKEN_EXPIRE_TIME',
  'JWT_SECRET',
  'MONGO_URL',
  'NODE_ENV',
  'PORT'
];

// Check that Envvars are set.
envVariables.forEach((env) => {
  if (!process.env[env]) {
    throw new Error(`Env variable ${env} not set.`);
  }
});
