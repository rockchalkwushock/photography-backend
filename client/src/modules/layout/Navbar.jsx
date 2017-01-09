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
    <Menu style={!auth ? styles.root : styles.root.auth}>
      {!auth ? (
        <Menu.Menu>
          <Menu.Item
            onClick={() => browserHistory.push(auth ? '/admin' : '/')}
            style={{ color: 'black' }}
          >
            MashaEltsovaPhotography
          </Menu.Item>
        </Menu.Menu>
      ) : (
        <Menu.Menu>
          <Menu.Item
            onClick={() => browserHistory.push(auth ? '/admin' : '/')}
            style={{ color: 'white' }}
          >
            MashaEltsovaPhotography
          </Menu.Item>
        </Menu.Menu>
      )}

        {!auth ? (
          <Menu.Menu position='right'>
            <Menu.Item
              active={path === '/signup'}
              onClick={() => browserHistory.push('/signup')}
              style={{ color: 'black' }}
            >
              Sign Up
            </Menu.Item>
            <Menu.Item
              active={path === '/login'}
              onClick={() => browserHistory.push('/login')}
              style={{ color: 'black' }}
            >
              Login
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
          <Menu.Item
            onClick={() => logout()}
            style={{ color: 'white' }}
          >
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
