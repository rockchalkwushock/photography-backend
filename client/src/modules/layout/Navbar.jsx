import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Menu } from 'semantic-ui-react';


const Navbar = ({ path }) => (
    <Menu>
    <Menu.Menu>
      <Menu.Item onClick={() => browserHistory.push('/')}>
        MashaEltsovaPhotography
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position='right'>
      <Menu.Item active={path === '/signup'} onClick={() => browserHistory.push('/signup')}>
        Sign Up
      </Menu.Item>
      <Menu.Item active={path === '/login'} onClick={() => browserHistory.push('/login')}>
        Login
      </Menu.Item>
    </Menu.Menu>
  </Menu>
  );

Navbar.propTypes = {
  path: PropTypes.string.isRequired
};

export default Navbar;
