import React, { PropTypes } from 'react';
import { IntlActions, withTranslate } from 'react-redux-multilingual';
import { browserHistory } from 'react-router/es';
import { Dropdown, Menu } from 'semantic-ui-react';
import { store } from '../../redux/store';

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

const Navbar = ({ auth, logout, translate }) => (
    <Menu style={!auth ? styles.root : styles.root.auth}>
      {!auth ? (
        // Masha Eltsova (non-auth)
        <Menu.Menu>
          <Menu.Item
            onClick={() => browserHistory.push(auth ? '/admin' : '/')}
            style={{ color: 'black' }}
          >
            {translate('title')}
          </Menu.Item>
        </Menu.Menu>
      ) : (
        // Masha Eltsova (auth)
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
          // Language Dropdown (non-auth)
          // Signup Button (non-auth)
          <Menu.Menu position='right'>
            <Dropdown item text={translate('lang')}>
              <Dropdown.Menu>
                <Dropdown.Item
                  flag='ru'
                  text={translate('russian')}
                  onClick={() => store.dispatch(IntlActions.setLocale('ru'))}
                />
                <Dropdown.Item
                  flag='us'
                  text={translate('english')}
                  onClick={() => store.dispatch(IntlActions.setLocale('en'))}
                />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        ) : (
          // Language Dropdown (auth)
          // Logout Button (auth)
          <Menu.Menu position="right">
            <Dropdown
              item
              style={{ color: '#82BB5D' }}
              text={translate('lang')}
            >
              <Dropdown.Menu
                style={{ backgroundColor: '#2E4172' }}
              >
                <Dropdown.Item
                  flag='ru'
                  text={translate('russian')}
                  onClick={() => store.dispatch(IntlActions.setLocale('ru'))}
                />
                <Dropdown.Item
                  flag='us'
                  text={translate('english')}
                  onClick={() => store.dispatch(IntlActions.setLocale('en'))}
                />
              </Dropdown.Menu>
            </Dropdown>
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
  translate: PropTypes.func
};

export default withTranslate(Navbar);
