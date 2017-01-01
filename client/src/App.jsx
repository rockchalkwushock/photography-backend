import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { Navbar } from './modules';

class App extends Component {
  componentWillMount() {
    if (this.props.auth.user) {
      this.props.checkToken();
    }
  }
  render() {
    const { auth, children, location } = this.props;
    const { user, token } = auth;
    if (user) axios.defaults.headers.common['Authorization'] = token; // eslint-disable-line
    return (
      <div className="application">
        <Navbar path={location.pathname} />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default App;
