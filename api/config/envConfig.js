import dotenv from 'dotenv';

// Configure Envvars.
dotenv.config();

// Bring in Envvars from .env.
const envVariables = [
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
