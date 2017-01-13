import { Router } from 'express';
import * as UserController from './controller';
import { checkToken, requireLogin } from '../../helpers';

const routes = new Router();

routes.route('/signup').post(UserController.signup);
routes.route('/login').post(requireLogin, UserController.login);
routes.route('/checkToken').post(checkToken);

export default routes;
