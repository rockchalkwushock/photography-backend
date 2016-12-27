import passport from 'passport';
import '../config/passportConfig';

export const requireLogin = passport.authenticate('local', { session: false });
export const requireAuth = passport.authenticate('jwt', { session: false });
