import express from 'express';
import { Server } from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

// Configurations
import './config/envConfig';
import './config/dbConfig';

// Envvars
const port = process.env.PORT;
const mode = process.env.NODE_ENV;

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// Routing

// Express Server
const server = Server(app);
server.listen(port, err => {
  if (err) console.log(`Error happned: ${err}`);
  console.log(`Server listening on http://localhost:${port} in ${mode}.`);
});
