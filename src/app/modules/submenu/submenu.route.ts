import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { SubMenuValidation } from './submenu.validation';
import { SubMenuController } from './submenu.controller';
const router = express.Router();

router.post(
  '/create',
//   validateRequest(BlogValidation.BlogZodSchema),
  SubMenuController.createBlog,
);

router.get('/', SubMenuController.getAllBlog);

// get single blog
router.get('/:slug', SubMenuController.getSingleBlog);

// update single blog
router.patch(
  '/:id',
  validateRequest(SubMenuValidation.UpdateBlogSchema),
  SubMenuController.updateBlog,
);

// delete single blog
router.delete('/:slug', SubMenuController.deleteBlog);

export const SubMenuRoute = router;
