import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { Footer, Navbar } from '../layout';

class App extends Component {
  componentWillMount() {
    if (this.props.auth.user) {
      this.props.checkToken();
    }
  }
  render() {
    const { auth, children, location, logoutUser } = this.props;
    const { user, token } = auth;
    if (user) axios.defaults.headers.common['Authorization'] = token; // eslint-disable-line
    return (
      <div className="application">
        <Navbar
          auth={user}
          logout={logoutUser}
          path={location.pathname}
        />
        {children}
        <Footer auth={user} />
      </div>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

export default App;
