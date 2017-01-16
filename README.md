# photography-backend


[![Build Status](https://travis-ci.org/rockchalkwushock/photography-backend.svg?branch=master)](https://travis-ci.org/rockchalkwushock/photography-backend?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/rockchalkwushock/photography-backend/badge.svg?branch=master)](https://coveralls.io/github/rockchalkwushock/photography-backend?branch=master)
[![Dependencies Status](https://david-dm.org/rockchalkwushock/photography-backend.svg?branch=master)](https://david-dm.org/rockchalkwushock/photography-backend.svg?branch=master)

API server with Authenticated Interface for a Cloudinary Upload Interface on Masha's Photography Website.

## Purpose
The purpose of this repository is to design and implement a backend structure for my friend Masha Eltsova's photography website.

## Demo
Watch a demo of the working interface at the following youtube link:
[![Demo Video](http://img.youtube.com/vi/3XH3yslyCRI/0.jpg)](https://www.youtube.com/watch?v=3XH3yslyCRI)

## How to use this repository:
```bash
$ git clone https://github.com/rockchalkwushock/photography-backend.git
$ cd photography-backend
photography-backend $ yarn install
photography-backend $ cd client
client $ yarn install
client $ cd ..
photography-backend $ mv .env_sample .env
```
```plaintext
NOTE: Update the env vars to your own or the repository will not run.
NOTE: The API Server port is set to 8000 because the web-dev-server is set
to proxy http://localhost:8000 in the client/package.json.

API_KEY='YOUR API_KEY HERE'
```
```bash
photography-backend $ npm start
```
Open browser to `http://localhost:3000/`

## About the Backend
The ultimate goal of the server is to act as a RESTful API for authenticated routes & storage of Cloudinary urls. This giving myself and Masha access to admin routes for uploading and managing the photo library for the front end views. The authentication is built using Passport.js, bcrypt, & jsonwebtoken. Authenticated & Non-Authenticated routes are managed through `redux-auth-wrapper` & `react-router`. The Cloudinary API will be accessed through the Cloudinary Widget that offers a drop zone for uploading pictures to the cloud. The Cloudinary API will send back a url for each image that will be stored in the database for later rendering on the front-end.

## Cloudinary Interface
The Cloudinary interface will be built using Facebook's `create-react-app`. These front-end views will strictly be to interact with the Cloudinary API from a management perspective. By using the Cloudinary Upload Widget Masha will be provided with a seamless interface for uploading through a drop zone. The views represented in this repository will not be available to the end user (Masha's Customers) and will only be accessible by the authenticated user's in the database. The UI/UX will be provided via `semantic-ui-react`. This phase of the application will be responsive only for desktop usage. It is not intended for mobile usage; whereas, the front-end structure specifically for the end-user will be fully responsive on all viewports.

## Technology
- [Create-React-App](https://github.com/facebookincubator/create-react-app)
- [Semantic-UI-React](http://react.semantic-ui.com/introduction)
- [Redux-Auth-Wrapper](https://github.com/mjrussell/redux-auth-wrapper)
- [React-Redux-Multilingual](https://github.com/rmdort/react-redux-multilingual)
- [Redux-Form](https://github.com/erikras/redux-form/)
- [Redux-Pack](https://github.com/lelandrichardson/redux-pack)
- [Express.js](https://expressjs.com)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Passport.js](http://passportjs.org)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [Mongoose](http://mongoosejs.com)
- [Babel](http://babeljs.io)
- [Eslint](http://eslint.org)
- [Mocha](https://mochajs.org)
- [Chai](http://chaijs.com)
- [Supertest](https://github.com/visionmedia/supertest)
- [NYC](https://github.com/istanbuljs/nyc)

## External API
- [Cloudinary](http://cloudinary.com)

## API Endpoints

### Authentication
| Route | Type | Info | Active
| :-------------| :------------- | :---- | :----- |
| /api/v1/signup | POST | Create Authenticated User | Active
| /api/v1/login | POST | Authenticate User | Active
| /api/v1/checkToken | POST | Check JWT / Issue new JWT | Active


### Photo
| Route | Type | Info | Active
| :-------------| :------------- | :---- | :----- |
| /api/v1/library | GET | Call up `public_id` to front-end | Active
| /api/v1/library | POST | Send `public_id` to database | Active
| /api/v1/library/:id | DELETE | Remove from Cloud & API Server | Inactive



## Mockups
![Admin View #1](https://github.com/rockchalkwushock/photography-backend/blob/master/mockups/_admin.png "Admin View 1")

![Admin View #2](https://github.com/rockchalkwushock/photography-backend/blob/master/mockups/_admin_photobooth.png "Admin View 2")

![Admin View #3](https://github.com/rockchalkwushock/photography-backend/blob/master/mockups/_admin_photobooth__collection.png "Admin View 3")


## Future Features

- Add delete photo functionality: Delete from Cloudinary & API Server simultaneously.
- Add active status to photos that are actively hosted in website's views.
- Add filter photos by params: all, active, newest-oldest, oldest-newest.
- Add chat feature.
  * Leave messages for developer/owner.
  * Catch messages from customers and make available to owner.
- Add help modal for basic functionality instructions.

## Change Log
See [CHANGELOG.md](https://github.com/rockchalkwushock/photography-backend/blob/master/CHANGELOG.md)

## Acknowledgements
Many thanks to my coding buddy [@EQuimper](https://github.com/EQuimper) for his help when I ran into problems with some of the Auth & Redux code. Also many thanks to [@lelandrichardson](https://github.com/lelandrichardson) for his assistance in using `redux-pack` for the first time; very cool tech! Cloudinary support is rockstar status as well
