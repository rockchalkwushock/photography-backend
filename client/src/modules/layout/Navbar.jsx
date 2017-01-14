import React, { PropTypes } from 'react';
import { withTranslate } from 'react-redux-multilingual';
import { browserHistory } from 'react-router';
import { Menu } from 'semantic-ui-react';

const styles = {
  root: {
    auth: {
      backgroundColor: '#2E4172',
      fontStyle: 'italic',
      fontWeight: 'bold'
    },
    backgroundColor: '#FFF',
    fontSize: '1em'
  }
};

const Navbar = ({ auth, logout, path, translate }) => (
    <Menu style={!auth ? styles.root : styles.root.auth}>
      {!auth ? (
        <Menu.Menu>
          <Menu.Item
            onClick={() => browserHistory.push(auth ? '/admin' : '/')}
            style={{ color: 'black' }}
          >
            {translate('title')}
          </Menu.Item>
        </Menu.Menu>
      ) : (
        <Menu.Menu>
          <Menu.Item
            onClick={() => browserHistory.push(auth ? '/admin' : '/')}
            style={{ color: '#82BB5D' }}
          >
            {translate('title')}
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
              {translate('signup')}
            </Menu.Item>
            <Menu.Item
              active={path === '/login'}
              onClick={() => browserHistory.push('/login')}
              style={{ color: 'black' }}
            >
              {translate('login')}
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
          <Menu.Item
            onClick={() => logout()}
            style={{ color: '#82BB5D' }}
          >
            {translate('nav:logout')}
          </Menu.Item>
        </Menu.Menu>
        )}
    </Menu>
  );

Navbar.propTypes = {
  auth: PropTypes.object,
  logout: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  translate: PropTypes.func
};

export default withTranslate(Navbar);
