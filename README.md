# photography-backend - 2.1.0

[![Build Status](https://travis-ci.org/rockchalkwushock/photography-backend.svg?branch=master)](https://travis-ci.org/rockchalkwushock/photography-backend?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/rockchalkwushock/photography-backend/badge.svg?branch=master)](https://coveralls.io/github/rockchalkwushock/photography-backend?branch=master)
[![codecov](https://codecov.io/gh/rockchalkwushock/photography-backend/branch/master/graph/badge.svg)](https://codecov.io/gh/rockchalkwushock/photography-backend)
[![Dependencies Status](https://david-dm.org/rockchalkwushock/photography-backend.svg?branch=master)](https://david-dm.org/rockchalkwushock/photography-backend.svg?branch=master)

## Purpose
Provide Masha with an interface for uploading images to the Cloudinary API and collecting the image urls for rendering on her website.

## Demo
Watch a demo of the working interface at the following youtube link:
[![Demo Video](http://img.youtube.com/vi/3XH3yslyCRI/0.jpg)](https://www.youtube.com/watch?v=3XH3yslyCRI)

## How to use this repository:

***NOTE: You must setup your own env vars for this repository to function.***

```bash
$ git clone https://github.com/rockchalkwushock/photography-backend.git
$ cd photography-backend
photography-backend $ yarn install
photography-backend $ mv .env.example .env
photography-backend $ yarn build
photography-backend $ yarn start
```
Open your browser to [http://localhost:3000/](http://localhost:3000/).

## About the Backend
The ultimate goal of the server is to act as a RESTful API for authenticated routes & storage of Cloudinary urls. This giving myself and Masha access to admin routes for uploading and managing the photo library for the front end views. The authentication is built using Passport.js, bcrypt, & jsonwebtoken. The Cloudinary API will be accessed through the Cloudinary Widget that offers a drop zone for uploading pictures to the cloud. The Cloudinary API will send back a url for each image that will be stored in the database for later rendering on the front-end.

## User Interface
The interface will be built using Facebook's React Javascript library. These front-end views will strictly be to interact with the Cloudinary API from a management perspective. By using the Cloudinary Upload Widget Masha will be provided with a seamless interface for uploading through a drop zone. The views represented in this repository will not be available to the end user (Masha's Customers) and will only be accessible by the authenticated user's in the database. Authenticated & Non-Authenticated routes are managed through `redux-auth-wrapper` & `react-router`. The UI/UX will be provided via `semantic-ui-react`. The application is only designed for desktop usage.

## Technology
- [React.js](https://facebook.github.io/react/)
- [Redux.js](http://redux.js.org)
- [React-Router](https://github.com/ReactTraining/react-router)
- [React-Redux](https://github.com/reactjs/react-redux)
- [Webpack](https://webpack.js.org)
- [Semantic-UI-React](http://react.semantic-ui.com/introduction)
- [Redux-Auth-Wrapper](https://github.com/mjrussell/redux-auth-wrapper)
- [React-Redux-Multilingual](https://github.com/rmdort/react-redux-multilingual)
- [Redux-Form](https://github.com/erikras/redux-form/)
- [Redux-Pack](https://github.com/lelandrichardson/redux-pack)
- [Express.js](https://expressjs.com)
- [Dotenv-Safe](https://github.com/rolodato/dotenv-safe)
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
| Route | Type | Info | Status
| :-------------| :------------- | :---- | :----- |
| /api/v1/signup | POST | Create Authenticated User | Active
| /api/v1/login | POST | Authenticate User | Active
| /api/v1/checkToken | POST | Check JWT / Issue new JWT | Active


### Photo
| Route | Type | Info | Status
| :-------------| :------------- | :---- | :----- |
| /api/v1/library | GET | Call up `public_id` to front-end | Active
| /api/v1/library | POST | Send `public_id` to database | Active
| /api/v1/library/:id | DELETE | Remove from Cloud & API Server | Inactive


### Performance Enhancements
As the application is not intended to be a mobile application or viewed on a mobile viewport I am only testing performance based on *Wi-fi* for throttling. The PWA Score from [Lighthouse](https://github.com/GoogleChrome/lighthouse) is for a *progressive web application* thus a lower score for ignoring some settings specifically for mobile. I would still like to get this number at least to 60.

##### Todo's

- [] Add manifest.
- [] Setup SLL Certificate.
- [] HTTPS
- [] HTTP/2 Setup

| Version | PWA Score | Bundle Size | Vendor Size | Throttling: Wi-Fi
| :--------| :------ | :---- | :----- | :----- |
| 2.0.0 | 22/100 | 1.42 MB | 12.4 MB | 8.00s / 8.24s
| 2.1.0 | 39/100 | 185 kB | 1.09 MB | 622ms / 725ms

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

## Testing
***NOTE: You must create your own .env or testing will not run!!!***

You will also need to add your repository token from Coveralls to the `.coveralls.yml`. This can be found on the repository's homepage in Coveralls once you sync to the coverage API.

```bash
photography-backend $ yarn test
```

## Acknowledgements

- [@EQuimper](https://github.com/EQuimper) for his help with OAuth & Redux issues as well as using Webpack 2 & React-Router for code-splitting & dynamic routing to make the interface more performant.
- [@lelandrichardson](https://github.com/lelandrichardson) for his assistance in using `redux-pack` for the first time, very cool tech!
- Cloudinary support === rockstar status!
