# photography-backend


[![Build Status](https://travis-ci.org/rockchalkwushock/photography-backend.svg?branch=beta)](https://travis-ci.org/rockchalkwushock/photography-backend?branch=beta)
[![Coverage Status](https://coveralls.io/repos/github/rockchalkwushock/photography-backend/badge.svg?branch=beta)](https://coveralls.io/github/rockchalkwushock/photography-backend?branch=beta)
[![Dependencies Status](https://david-dm.org/rockchalkwushock/photography-backend.svg?branch=beta)](https://david-dm.org/rockchalkwushock/photography-backend.svg?branch=beta)

API server with Authenticated Interface & Cloudinary Upload Interface for Masha's Photography Website.

## Purpose
The purpose of this repository is to design and implement a backend structure for my friend Masha Eltsova's photography website.

## About the Backend
The ultimate goal of the server is to act as a RESTful API for authenticated routes & storage of Cloudinary urls. This giving myself and Masha access to admin routes for uploading and managing the photo library for the front end views. The authentication is built using Passport.js, bcrypt, & jwt-simple. The Cloudinary API will be accessed through the Cloudinary Widget that offers a drop zone for uploading pictures to the cloud. The Cloudinary API will send back a url for each image that will be stored in the database for later rendering on the front-end.

## Cloudinary Interface
The Cloudinary interface will be built using Facebook's `create-react-app`. These front-end views will strictly be to interact with the Cloudinary API from a management perspective. By using the Cloudinary Upload Widget Masha will be provided with a seamless interface for uploading through a drop zone. The views represented in this repository will not be available to the end user (Masha's Customers) and will only be accessible by the authenticated user's in the database. The UI/UX will be provided via `semantic-ui-react`. This phase of the application will be responsive only for desktop usage. It is not intended for mobile usage; whereas, the front-end structure specifically for the end-user will be fully responsive to all viewports.

## Technology
- [Create-React-App](https://github.com/facebookincubator/create-react-app)
- [Semantic-UI-React](http://react.semantic-ui.com/introduction)
- [Express.js](https://expressjs.com)
- [Passport.js](http://passportjs.org)
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
| Route | Type | Info | Active
| :-------------| :------------- | :---- | :----- |
| /api/v1/signup | POST | Create Authenticated User | Temporary
| /api/v1/signin | POST | Authenticate User | Active
| /api/v1/checkToken | POST | Check JWT / Issue new JWT | Active
| /api/v1/admin | GET | Authenticated Access Point | Testing


## Mockups
![Admin View #1](https://github.com/rockchalkwushock/photography-backend/blob/master/mockups/_admin.png "Admin View 1")

![Admin View #2](https://github.com/rockchalkwushock/photography-backend/blob/master/mockups/_admin_photobooth.png "Admin View 2")

![Admin View #3](https://github.com/rockchalkwushock/photography-backend/blob/master/mockups/_admin_photobooth__collection.png "Admin View 3")
