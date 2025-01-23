import express from 'express';
import { BlogController } from './blog.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidation } from './blog.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();

router.post(
  '/create',
//   validateRequest(BlogValidation.BlogZodSchema),
  BlogController.createBlog,
);

router.get('/', BlogController.getAllBlog);

// get single blog
router.get('/:menu', BlogController.getSingleBlog);

// update single blog
router.patch(
  '/:id',
  validateRequest(BlogValidation.UpdateBlogSchema),
  BlogController.updateBlog,
);

// delete single blog
router.delete('/:slug', BlogController.deleteBlog);

export const BlogRoutes = router;
