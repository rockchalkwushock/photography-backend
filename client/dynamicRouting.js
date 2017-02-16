import AppContainer from './modules/entry/AppContainer';
import LoginContainer from './modules/auth/login/LoginContainer';

const errorLoading = err => (
  console.error('Dynamic page loading failed', err)
);

const componentRoutes = {
  component: AppContainer,
  path: '/',
  indexRoute: { component: LoginContainer },
  childRoutes: [
    {
      path: '/signup',
      async getComponent(location, cb) {
        try {
          const module = await import('./modules/auth/signup/SignupContainer');
          cb(null, module.default);
        } catch (e) {
          errorLoading(e);
        }
      }
    },
    {
      path: '/admin',
      async getComponent(location, cb) {
        try {
          const module = await import('./modules/photobooth/sidebar/SidebarContainer');
          cb(null, module.default);
        } catch (e) {
          errorLoading(e);
        }
      }
    },
    {
      path: '*',
      async getComponent(location, cb) {
        try {
          const module = await import('./modules/layout/Page404');
          cb(null, module.default);
        } catch (e) {
          errorLoading(e);
        }
      }
    }
  ]
};

export default componentRoutes;
