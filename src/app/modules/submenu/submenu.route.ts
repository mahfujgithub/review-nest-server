import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { SubMenuValidation } from './submenu.validation';
import { SubMenuController } from './submenu.controller';
const router = express.Router();

router.post(
  '/create',
//   validateRequest(BlogValidation.SubMenuZodSchema),
  SubMenuController.createSubMenu,
);

router.get('/', SubMenuController.getAllSubMenu);

// get single blog
router.get('/:slug', SubMenuController.getSingleSubMenu);

// update single blog
router.patch(
  '/:id',
  validateRequest(SubMenuValidation.UpdateSubMenuSchema),
  SubMenuController.updateSubMenu,
);

// delete single blog
router.delete('/:slug', SubMenuController.deleteSubMenu);

export const SubMenuRoute = router;
