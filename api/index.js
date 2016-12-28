import express from 'express';
import { Server } from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import { userRoutes } from './modules';

// Configurations
import './config/envConfig';
import './config/dbConfig';

// Envvars
const port = process.env.PORT;
const mode = process.env.NODE_ENV;

export const app = express();

// Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', port);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'); // eslint-disable-line
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  return res.status(err.status || port).render('500');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());

// Routing
app.use('/api/v1', [userRoutes]);

// Express Server
const server = Server(app);
server.listen(port, err => {
  if (err) console.log(`Error happned: ${err}`);
  console.log(`Server listening on http://localhost:${port} in ${mode}.`);
});
