import express from 'express';
import { MenuController } from './menu.controller';
import validateRequest from '../../middlewares/validateRequest';
import { MenuValidation } from './menu.validation';
const router = express.Router();

router.post('/create',
    validateRequest(MenuValidation.createMenuZodSchema),
    MenuController.createMenu)


router.get('/',
    validateRequest(MenuValidation.createMenuZodSchema),
    MenuController.getAllMenu)

export const MenuRoutes = router;
