import { Router } from 'express';
import * as PhotoController from './controller';
import { requireAuth } from '../../helpers/authHelpers';

const routes = new Router();

routes.route('/library').post(requireAuth, PhotoController.getPublicID);
routes.route('/library').get(requireAuth, PhotoController.sendToFrontEnd);

export default routes;
