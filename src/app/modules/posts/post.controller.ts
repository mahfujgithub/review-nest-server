import catchAsync from '../../../shared/catchAsync';
import { Response, Request } from 'express';
import sendResponse, { IPostWithRelated } from '../../../shared/sendResponse';
import { IPosts } from './post.interface';
import { PostService } from './post.service';
import pick from '../../../shared/pick';
import { postFilterableFields } from './post.constant';
import { paginationFields } from '../../../constants/pagination';
import buildNestedUpdateQuery from '../../../helpers/nested.query';
import { MulterS3File } from '../../../interfaces/multer';
import { constructPublicUrl } from '../../../shared/constructImgUrl';
import { deleteObjectFromR2 } from '../../../helpers/deleteObjectR2';

// create post
const createPosts = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const post = req.body;

  // Process uploaded files
  const files = req.files as { [fieldname: string]: MulterS3File[] };

  if (files['ogImage']) {
    const ogImageFile = files['ogImage'][0];
    post.ogImage = constructPublicUrl(ogImageFile.key);
  }

  if (files['productFeaturesImage']) {
    const productFeaturesImageFile = files['productFeaturesImage'][0];
    post.productFeaturesImage = constructPublicUrl(
      productFeaturesImageFile.key,
    );
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
        post.allProducts[productIndex].productMainImage = constructPublicUrl(
          files[field][0].key,
        );
      } else if (imageType === 'productImages' && files[field]) {
        post.allProducts[productIndex].productImages = files[field].map(
          file => constructPublicUrl(file.key),
        );
      }
    }
  });

  // Call the service to create the post
  const result = await PostService.createPost(post);

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

const getPopularPosts = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');

  // Call the service function to get posts sorted by visit count
  const result = await PostService.getPopularPosts();

  sendResponse(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Popular posts retrieved successfully',
    data: result,
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
    relatedPosts,
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

// const removePosts = catchAsync(async (req: Request, res: Response) => {
//   const httpStatus = await import('http-status-ts');
//   const { slug } = req.params;

//   // Fetch the post by slug to retrieve its associated image paths
//   const post = await PostService.getSinglePost(slug);
//   if (!post) {
//     throw new Error(`Post with slug '${slug}' not found.`);
//   }

//   const basePath = path.join(__dirname, '../../../../public/uploads');

//   const resolveImagePath = (imageUrl: string) => {
//     const relativePath = imageUrl.replace(
//       `${config.server_address}uploads/`,
//       '',
//     );
//     const resolvedPath = path.join(basePath, relativePath);
//     return resolvedPath;
//   };

//   const imagePaths: string[] = [];

//   if (post.ogImage) imagePaths.push(resolveImagePath(post.ogImage));
//   if (post.productFeaturesImage)
//     imagePaths.push(resolveImagePath(post.productFeaturesImage));

//   if (post.allProducts) {
//     post.allProducts.forEach((product: any) => {
//       if (product.productMainImage)
//         imagePaths.push(resolveImagePath(product.productMainImage));
//       if (product.productImages) {
//         product.productImages.forEach((imagePath: string) =>
//           imagePaths.push(resolveImagePath(imagePath)),
//         );
//       }
//     });
//   }

//   // Delete the images
//   await Promise.all(
//     imagePaths.map(async imagePath => {
//       try {
//         // Check if the file exists before deleting
//         await fsPromises.access(imagePath);
//         await fsPromises.unlink(imagePath);
//       } catch (err: any) {
//         console.warn(
//           `Failed to delete image: ${imagePath}. Error: ${err.message}`,
//         );
//       }
//     }),
//   );

//   // Delete the post
//   const result = await PostService.removePost(slug);

//   sendResponse<IPosts>(res, {
//     statusCode: httpStatus.HttpStatus.OK,
//     success: true,
//     message: `Post removed successfully`,
//     data: result,
//   });
// });

const removePosts = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { slug } = req.params;

  // Fetch the post by slug to retrieve its associated image paths
  const post = await PostService.getSinglePost(slug);
  if (!post) {
    throw new Error(`Post with slug '${slug}' not found.`);
  }

  // Extract image keys from the post object
  const imageKeys: string[] = [];

  if (post.ogImage) {
    const ogImageKey = post.ogImage.split('/').pop(); // Extract the key from the URL
    if (ogImageKey) imageKeys.push(ogImageKey);
  }

  if (post.productFeaturesImage) {
    const productFeaturesImageKey = post.productFeaturesImage.split('/').pop();
    if (productFeaturesImageKey) imageKeys.push(productFeaturesImageKey);
  }

  if (post.allProducts) {
    post.allProducts.forEach((product: any) => {
      if (product.productMainImage) {
        const productMainImageKey = product.productMainImage.split('/').pop();
        if (productMainImageKey) imageKeys.push(productMainImageKey);
      }
      if (product.productImages) {
        product.productImages.forEach((imagePath: string) => {
          const productImageKey = imagePath.split('/').pop();
          if (productImageKey) imageKeys.push(productImageKey);
        });
      }
    });
  }

  // Delete the images from Cloudflare R2
  await Promise.all(
    imageKeys.map(async key => {
      try {
        await deleteObjectFromR2(key);
      } catch (err: any) {
        console.warn(
          `Failed to delete image with key: ${key}. Error: ${err.message}`,
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
  getPopularPosts,
  getSinglePosts,
  removePosts,
  updatePosts,
};
