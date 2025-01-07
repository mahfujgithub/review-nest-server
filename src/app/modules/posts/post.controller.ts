import catchAsync from '../../../shared/catchAsync';
import { Response, Request } from 'express';
import sendResponse from '../../../shared/sendResponse';
import { IPosts } from './post.interface';
import { PostService } from './post.service';
import pick from '../../../shared/pick';
import { postFilterableFields } from './post.constant';
import { paginationFields } from '../../../constants/pagination';
import config from '../../../config';

// create post
const createPosts = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const post = req.body;

  // Base URL for the images (replace with your app's URL)
  const baseUrl = config.server_address;

  // Process uploaded files
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  // Handle the ogImage
  if (files['ogImage']) {
    post.ogImage = `${baseUrl}uploads/${files['ogImage'][0].originalname}`;
  }

  // Handle the productFeaturesImage
  if (files['productFeaturesImage']) {
    post.productFeaturesImage = `${baseUrl}uploads/${files['productFeaturesImage'][0].originalname}`;
  }

  // Loop through all allProducts dynamically based on the keys in files
  Object.keys(files).forEach(field => {
    // Check if the field corresponds to a product's image
    const match = field.match(
      /^allProducts\[(\d+)]\[(productMainImage|productImages)]/,
    );
    if (match) {
      const productIndex = match[1]; // Extract product index from the field
      const imageType = match[2]; // Either productMainImage or productImages

      if (!post.allProducts[productIndex]) {
        post.allProducts[productIndex] = {}; // Initialize the product if not yet set
      }

      // Assign the image(s) to the correct product
      if (imageType === 'productMainImage' && files[field]) {
        post.allProducts[productIndex].productMainImage =
          `${baseUrl}uploads/${files[field][0].originalname}`;
      } else if (imageType === 'productImages' && files[field]) {
        post.allProducts[productIndex].productImages = files[field].map(
          file => `${baseUrl}uploads/${file.originalname}`,
        );
      }
    }
  });

  // Call the service to create the post
  const result = await PostService.createPost(post);

  // Construct the full URLs for images in the response
  const constructImageUrl = (imagePath: string) => {
    return `${baseUrl}uploads/${imagePath}`; // Replace with your app's domain
  };

  // Modify the post object to include full URLs for image paths
  if (post.ogImage) post.ogImage = constructImageUrl(post.ogImage);
  if (post.productFeaturesImage)
    post.productFeaturesImage = constructImageUrl(post.productFeaturesImage);

  if (post.allProducts) {
    post.allProducts.forEach((product: any) => {
      if (product.productMainImage)
        product.productMainImage = constructImageUrl(product.productMainImage);
      if (product.productImages) {
        product.productImages = product.productImages.map(constructImageUrl);
      }
    });
  }

  sendResponse<IPosts>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Post Created Successfully',
    data: result,
  });
});

// get all post
const getAllPosts = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');

  const filters = pick(req.query, postFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await PostService.getAllPost(paginationOptions, filters);

  // console.log(filters)

  sendResponse<IPosts[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Get All Post SuccessFullly`,
    meta: result.meta,
    data: result.data,
  });
});

// get single post by id
const getSinglePosts = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { slug } = req.params;
  const result = await PostService.getSinglePost(slug);
  sendResponse<IPosts>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Get Single Post SuccessFully`,
    data: result,
  });
});

// update post
const updatePosts = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;
  const updatedPost = req.body;

  const result = await PostService.updatePost(id, updatedPost);
  sendResponse<IPosts>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Update Post SuccessFullly`,
    data: result,
  });
});

// remove post
const removePosts = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;
  const result = await PostService.removePost(id);
  sendResponse<IPosts>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Remove Post SuccessFullly`,
    data: result,
  });
});

export const postController = {
  createPosts,
  getAllPosts,
  getSinglePosts,
  removePosts,
  updatePosts,
};
