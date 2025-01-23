import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { MenuDataValidation } from './menudata.validation';
import { MenuDataController } from './menudata.controller';
const router = express.Router();

router.post(
  '/create',
//   validateRequest(MenuDataValidation.MenuDataZodSchema),
  MenuDataController.createMenuData,
);

router.get('/', MenuDataController.getAllMenuData);

// get single blog
router.get('/:menu', MenuDataController.getSingleMenuData);

// update single blog
router.patch(
  '/:id',
  validateRequest(MenuDataValidation.UpdateMenuDataSchema),
  MenuDataController.updateMenuData,
);

// delete single blog
router.delete('/:slug', MenuDataController.deleteMenuData);

export const MenuDataRoutes = router;
