# photography-backend


[![Build Status](https://travis-ci.org/rockchalkwushock/photography-backend.svg?branch=master)](https://travis-ci.org/rockchalkwushock/photography-backend?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/rockchalkwushock/photography-backend/badge.svg?branch=master)](https://coveralls.io/github/rockchalkwushock/photography-backend?branch=master)
[![Dependencies Status](https://david-dm.org/rockchalkwushock/photography-backend.svg?branch=master)](https://david-dm.org/rockchalkwushock/photography-backend.svg?branch=master)

API server for Masha's Photography Website.

## Purpose
The purpose of this repository is to design and implement a backend structure for my friend Masha Eltsova's photography website.

## About the Backend
The ultimate goal of the server is to host the build the user will interact with; however, the backend code will also contain User Authentication via Passport.js for authenticated routes leading to an interface for Masha to upload her portfolio and other photos to the Cloudinary API. The Cloudinary API will provide a request object back to the server where it will extract the `public_id` & `base_URL` for each image. These items will be stored in the database for future use with the front-end structure.

## Authentication Interface
The authentication interface will be built using Facebook's `create-react-app`. This front-end will strictly be to interact with the Cloudinary API from a management perspective. By using the Cloudinary Upload Widget Masha will be provided with a seamless interface for uploading through a drop zone. The views represented in this repository will not be available to the end user (Masha's Customers) and will only be accessible by the authenticated user's in the database. The UI/UX will be provided via `semantic-ui-react`. This phase of the application will be responsive only for desktop usage. It is not intended for mobile usage; whereas, the front-end structure specifically for the end-user will be fully responsive to all viewports.

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
- [NYC](https://github.com/istanbuljs/nyc)

## External API
- [Cloudinary](http://cloudinary.com)

## API Endpoints
| Route | Type | Info | Active
| :-------------| :------------- | :---- | :----- |
| /api/v1/signup | POST | Create Authenticated User | Temporary
| /api/v1/signin | POST | Authenticate User | Active
| /api/v1/admin | GET | Authenticated Access Point | Active


## Mockups
![Admin View #1](https://github.com/rockchalkwushock/photography-backend/blob/master/mockups/_admin.png "Admin View 1")

![Admin View #2](https://github.com/rockchalkwushock/photography-backend/blob/master/mockups/_admin_photobooth.png "Admin View 2")

![Admin View #3](https://github.com/rockchalkwushock/photography-backend/blob/master/mockups/_admin_photobooth__collection.png "Admin View 3")
