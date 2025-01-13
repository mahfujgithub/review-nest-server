import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { PostValidation } from './post.validation';
import { postController } from './post.controller';
import upload from '../../../config/multer.config';
const router = express.Router();

const createPostFields = [
  { name: 'ogImage', maxCount: 1 },
  { name: 'productFeaturesImage', maxCount: 1 },
];

// Dynamically create fields for products (adjust based on max products expected)
const maxProducts = 10; // Maximum number of products you want to handle dynamically
for (let i = 0; i < maxProducts; i++) {
  createPostFields.push(
    { name: `allProducts[${i}][productMainImage]`, maxCount: 1 },
    { name: `allProducts[${i}][productImages][]`, maxCount: 10 },
  );
}

// create post
router.post(
  '/create-post',
  upload.fields(createPostFields),
  validateRequest(PostValidation.postZodSchema),
  postController.createPosts,
);

// get all post
router.get('/', postController.getAllPosts)

router.get('/popular', postController.getPopularPosts);

// get single post
router.get(`/:slug`, postController.getSinglePosts)

// update post
router.patch('/:slug', postController.updatePosts)

// remove post
router.delete('/:slug', postController.removePosts)

export const PostRouter = router;
