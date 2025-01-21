import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { MenusController } from './menus.controller';
import { MenuValidation } from '../menu/menu.validation';
const router = express.Router();

router.post(
  '/create',
//   validateRequest(BlogValidation.MenusZodSchema),
  MenusController.createMenus,
);

router.get('/menus', MenusController.getAllMenus);

// get single blog
router.get('/:slug', MenusController.getSingleMenus);

// update single blog
router.patch(
  '/:id',
  validateRequest(MenuValidation.UpdateMenusSchema),
  MenusController.updateMenus,
);

// delete single blog
router.delete('/:slug', MenusController.deleteMenus);

export const MenusRoute = router;
