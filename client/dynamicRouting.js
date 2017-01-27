import AppContainer from './modules/entry/AppContainer';
import HomePage from './modules/layout/HomePage';

const errorLoading = err => (
  console.error('Dynamic page loading failed', err)
);
const loadRoute = cb => (
  module => cb(null, module.default)
);

const componentRoutes = {
  component: AppContainer,
  path: '/',
  indexRoute: { component: HomePage },
  childRoutes: [
    {
      path: '/signup',
      getComponent(location, cb) {
        System.import('./modules/auth/signup/SignupContainer')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }
    },
    {
      path: '/login',
      getComponent(location, cb) {
        System.import('./modules/auth/login/LoginContainer')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }
    },
    {
      path: '/admin',
      getComponent(location, cb) {
        System.import('./modules/photobooth/sidebar/SidebarContainer')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }
    },
    {
      path: '*',
      getComponent(location, cb) {
        System.import('./modules/layout/Page404')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }
    }
  ]
};

export default componentRoutes;
