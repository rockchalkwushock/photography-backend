import express from 'express';
import { Server } from 'http';
import path from 'path';
import { dbConfig, middlewaresConfig } from './config';

const app = express();

// ENVIRONMENT VARIABLES
const MODE = process.env.NODE_ENV;
export const PORT = process.env.PORT || 3000;

// MIDDLEWARE
middlewaresConfig(app);

let mongoConf;

// NODE ENVIRONMENT SETUP
switch (MODE) {
  case 'production': {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    });
    mongoConf = process.env.MONGO_URI;
    break;
  }
  case 'test': {
    mongoConf = 'mongodb://localhost/photography-dev';
    break;
  }
  default: {
    mongoConf = 'mongodb://localhost/photography-dev';
    break;
  }
}

// DATABASE
dbConfig(mongoConf);

// EXPRESS SERVER
export const server = Server(app);
server.listen(PORT, err => {
  if (err) { return console.error(err); }
  console.log(`App running on port: ${PORT} in ${MODE} mode.`);
});
