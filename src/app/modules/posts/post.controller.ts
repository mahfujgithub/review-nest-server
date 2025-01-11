import catchAsync from '../../../shared/catchAsync';
import { Response, Request } from 'express';
import sendResponse, { IPostWithRelated } from '../../../shared/sendResponse';
import { IPosts } from './post.interface';
import { PostService } from './post.service';
import pick from '../../../shared/pick';
import { postFilterableFields } from './post.constant';
import { paginationFields } from '../../../constants/pagination';
import config from '../../../config';
import buildNestedUpdateQuery from '../../../helpers/nested.query';
import fsPromises from 'fs/promises';  // Add this line
import path from 'path';

const requestCounts: { [key: string]: number } = {}; // In-memory storage for counting requests

// create post
const createPosts = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const post = req.body;

  // Base URL for the images (replace with your app's URL)
  const baseUrl = config.server_address;

  // Process uploaded files
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  if (files['ogImage']) {
    post.ogImage = `${baseUrl}uploads/${files['ogImage'][0].filename}`;
  }

  if (files['productFeaturesImage']) {
    post.productFeaturesImage = `${baseUrl}uploads/${files['productFeaturesImage'][0].filename}`;
  }

  Object.keys(files).forEach(field => {
    const match = field.match(
      /^allProducts\[(\d+)]\[(productMainImage|productImages)]/,
    );
    if (match) {
      const productIndex = match[1];
      const imageType = match[2];

      post.allProducts = post.allProducts || [];
      if (!post.allProducts[productIndex]) {
        post.allProducts[productIndex] = {};
      }

      if (imageType === 'productMainImage' && files[field]) {
        post.allProducts[productIndex].productMainImage =
          `${baseUrl}uploads/${files[field][0].filename}`;
      } else if (imageType === 'productImages' && files[field]) {
        post.allProducts[productIndex].productImages = files[field].map(
          file => `${baseUrl}uploads/${file.filename}`,
        );
      }
    }
  });

  // Call the service to create the post
  const result = await PostService.createPost(post);

  // Construct the full URLs for images in the response
  const constructImageUrl = (imagePath: string) =>
    `${baseUrl}uploads/${imagePath}`;

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

  sendResponse<IPosts[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Get All Post SuccessFullly`,
    meta: result.meta,
    data: result.data,
  });
});

// get single post by slug
const getSinglePosts = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { slug } = req.params;

  // Get related posts by subMenu
  const { relatedPosts, relatedCount } =
    await PostService.getRelatedPosts(slug);

  const result = await PostService.getSinglePost(slug);

  const responseData: IPostWithRelated = {
    result,
    relatedCount,
    relatedPosts
  };

  sendResponse(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Get Single Post SuccessFully`,
    data: responseData,
  });
});

// update post
const updatePosts = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { slug } = req.params;
  const updatedPost = req.body;

  const nestedUpdateQuery = buildNestedUpdateQuery(updatedPost);
  const result = await PostService.updatePost(slug, nestedUpdateQuery);

  sendResponse<IPosts>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Update Post SuccessFullly`,
    data: result,
  });
});

const removePosts = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { slug } = req.params;

  // Fetch the post by slug to retrieve its associated image paths
  const post = await PostService.getSinglePost(slug);
  if (!post) {
    throw new Error(`Post with slug '${slug}' not found.`);
  }

  const basePath = path.join(__dirname, '../../../../public/uploads');

  const resolveImagePath = (imageUrl: string) => {
    const relativePath = imageUrl.replace(
      `${config.server_address}uploads/`,
      '',
    );
    const resolvedPath = path.join(basePath, relativePath);
    return resolvedPath;
  };

  const imagePaths: string[] = [];

  if (post.ogImage) imagePaths.push(resolveImagePath(post.ogImage));
  if (post.productFeaturesImage)
    imagePaths.push(resolveImagePath(post.productFeaturesImage));

  if (post.allProducts) {
    post.allProducts.forEach((product: any) => {
      if (product.productMainImage)
        imagePaths.push(resolveImagePath(product.productMainImage));
      if (product.productImages) {
        product.productImages.forEach((imagePath: string) =>
          imagePaths.push(resolveImagePath(imagePath)),
        );
      }
    });
  }

  // Delete the images
  await Promise.all(
    imagePaths.map(async imagePath => {
      try {
        // Check if the file exists before deleting
        await fsPromises.access(imagePath);
        await fsPromises.unlink(imagePath);
      } catch (err: any) {
        console.warn(
          `Failed to delete image: ${imagePath}. Error: ${err.message}`,
        );
      }
    }),
  );

  // Delete the post
  const result = await PostService.removePost(slug);

  sendResponse<IPosts>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Post removed successfully`,
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
