import React, { PropTypes } from 'react';
import { Navbar } from './modules';
import './helpers/axiosConfigs';

const App = ({ children, location }) => (
  <div className="application">
    <Navbar path={location.pathname} />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default App;
