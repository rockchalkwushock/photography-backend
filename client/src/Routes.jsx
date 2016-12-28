import React from 'react';
import { Router, Route } from 'react-router';
import { history } from './redux/store';

import App from './App';
import { LoginContainer, Page404, SignupContainer } from './modules';

export default () => (
  <Router history={history}>
    <Route path='/' component={App}>
      <Route path='/signup' component={SignupContainer} />
      <Route path='/login' component={LoginContainer} />
    </Route>
    <Route path='*' component={Page404} />
  </Router>
);


/*
 TODO:
 Setup Routes:
 Need a HomePage route '/'.
   - this route will be the landing page for the actual application.
   - this will be what the logo in Navbar pushes too.
   - this will be what the Page404 button pushes too.
 Need to have an Signup route '/admin/signup'.
   NOTE: This temporary and will be replaced with the LoginContainer.
         Will become '/admin/login' later.
 Need to have a Admin route '/admin'.
   NOTE: This will be an authRoute wrapped in the HOC to check user auth.
   - it will NOT be accessible without being authenticated against the API.
 Need to have a Cloudinary route for viewing '/admin/library'.
   - it will house a component for viewing what is available in the cloud.
   - the collections should be clickable.
 Need to have a Cloudinary route for uploading '/admin/photo-booth'.
   - it will house the component with the Cloudinary Widget.
   - it should allow for uploading to the Cloudinary API via the Widget.
   - it should receive back the corresponding url(s) for the image(s) uploaded.
   - Will need to dispatch these url(s) from Redux to the API server for storage in the database.
*/
