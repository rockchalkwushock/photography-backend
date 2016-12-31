import { Router } from 'express';
import * as UserController from './controller';
import { checkToken, requireAuth, requireLogin } from '../../helpers';

const routes = new Router();

routes.route('/signup').post(UserController.signup);
routes.route('/login').post(requireLogin, UserController.login);
routes.route('/checkToken').post(checkToken);
routes.route('/admin').get(requireAuth, (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

export default routes;
