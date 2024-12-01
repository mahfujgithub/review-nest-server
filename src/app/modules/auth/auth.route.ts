import express from 'express';
import { AuthValidation } from './auth.validation';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.createAuthZodSchema),
  AuthController.loginUser,
);

router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenZodSchema),
  AuthController.refreshToken,
);

router.post(
  '/change-password',
  validateRequest(AuthValidation.changePasswordZodSchema),
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.CONTENT_WRITER,
  ),
  AuthController.changePassword,
);

router.post('/forgot-password', AuthController.forgotPass);

router.post('/reset-password', AuthController.resetPassword);

router.post('/logout', AuthController.logout);

export const AuthRoutes = router;
