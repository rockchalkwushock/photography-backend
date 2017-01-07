import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Menu } from 'semantic-ui-react';

const styles = {
  root: {
    auth: {
      backgroundColor: '#2185D0',
      fontStyle: 'italic',
      fontWeight: 'bold'
    },
    backgroundColor: '#FFF',
    fontSize: '1em'
  }
};

const Navbar = ({ auth, logout, path }) => (
    <Menu style={auth ? styles.root.auth : styles.root}>
      {!auth ? (
        <Menu.Menu>
          <Menu.Item onClick={() => browserHistory.push(auth ? '/admin' : '/')}>
            MashaEltsovaPhotography
          </Menu.Item>
        </Menu.Menu>
      ) : (
        <Menu.Menu>
          <Menu.Item onClick={() => browserHistory.push(auth ? '/admin' : '/')}>
            MashaEltsovaPhotography
          </Menu.Item>
        </Menu.Menu>
      )}

        {!auth ? (
          <Menu.Menu position='right'>
            <Menu.Item active={path === '/signup'} onClick={() => browserHistory.push('/signup')}>
              Sign Up
            </Menu.Item>
            <Menu.Item active={path === '/login'} onClick={() => browserHistory.push('/login')}>
              Login
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
          <Menu.Item onClick={() => logout()}>
            Logout
          </Menu.Item>
        </Menu.Menu>
        )}
    </Menu>
  );

Navbar.propTypes = {
  auth: PropTypes.object,
  logout: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};

export default Navbar;
