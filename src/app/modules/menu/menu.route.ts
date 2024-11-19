import express from 'express';
import { MenuController } from './menu.controller';
import validateRequest from '../../middlewares/validateRequest';
import { MenuValidation } from './menu.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();

router.post('/create',
    validateRequest(MenuValidation.createMenuZodSchema),
    MenuController.createMenu)


router.get('/', auth(ENUM_USER_ROLE.ADMIN), MenuController.getAllMenu)

export const MenuRoutes = router;
