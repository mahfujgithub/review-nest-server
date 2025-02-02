"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const post_service_1 = require("./post.service");
const pick_1 = __importDefault(require("../../../shared/pick"));
const post_constant_1 = require("./post.constant");
const pagination_1 = require("../../../constants/pagination");
const nested_query_1 = __importDefault(require("../../../helpers/nested.query"));
const constructImgUrl_1 = require("../../../shared/constructImgUrl");
const deleteObjectR2_1 = require("../../../helpers/deleteObjectR2");
// create post
const createPosts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const post = req.body;
    // Process uploaded files
    const files = req.files;
    if (files['ogImage']) {
        const ogImageFile = files['ogImage'][0];
        post.ogImage = (0, constructImgUrl_1.constructPublicUrl)(ogImageFile.key);
    }
    if (files['productFeaturesImage']) {
        const productFeaturesImageFile = files['productFeaturesImage'][0];
        post.productFeaturesImage = (0, constructImgUrl_1.constructPublicUrl)(productFeaturesImageFile.key);
    }
    Object.keys(files).forEach(field => {
        const match = field.match(/^allProducts\[(\d+)]\[(productMainImage|productImages)]/);
        if (match) {
            const productIndex = match[1];
            const imageType = match[2];
            post.allProducts = post.allProducts || [];
            if (!post.allProducts[productIndex]) {
                post.allProducts[productIndex] = {};
            }
            if (imageType === 'productMainImage' && files[field]) {
                post.allProducts[productIndex].productMainImage = (0, constructImgUrl_1.constructPublicUrl)(files[field][0].key);
            }
            else if (imageType === 'productImages' && files[field]) {
                post.allProducts[productIndex].productImages = files[field].map(file => (0, constructImgUrl_1.constructPublicUrl)(file.key));
            }
        }
    });
    // Call the service to create the post
    const result = await post_service_1.PostService.createPost(post);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Post Created Successfully',
        data: result,
    });
});
// get all post
const getAllPosts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const filters = (0, pick_1.default)(req.query, post_constant_1.postFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = await post_service_1.PostService.getAllPost(paginationOptions, filters);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Get All Post SuccessFullly`,
        meta: result.meta,
        data: result.data,
    });
});
const getPopularPosts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    // Call the service function to get posts sorted by visit count
    const result = await post_service_1.PostService.getPopularPosts();
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Popular posts retrieved successfully',
        data: result,
    });
});
// get single post by slug
const getSinglePosts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { slug } = req.params;
    // Get related posts by subMenu
    const { relatedPosts, relatedCount } = await post_service_1.PostService.getRelatedPosts(slug);
    const result = await post_service_1.PostService.getSinglePost(slug);
    const responseData = {
        result,
        relatedCount,
        relatedPosts,
    };
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Get Single Post SuccessFully`,
        data: responseData,
    });
});
// update post
const updatePosts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { slug } = req.params;
    const updatedPost = req.body;
    const nestedUpdateQuery = (0, nested_query_1.default)(updatedPost);
    const result = await post_service_1.PostService.updatePost(slug, nestedUpdateQuery);
    (0, sendResponse_1.default)(res, {
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
const removePosts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { slug } = req.params;
    // Fetch the post by slug to retrieve its associated image paths
    const post = await post_service_1.PostService.getSinglePost(slug);
    if (!post) {
        throw new Error(`Post with slug '${slug}' not found.`);
    }
    // Extract image keys from the post object
    const imageKeys = [];
    if (post.ogImage) {
        const ogImageKey = post.ogImage.split('/').pop(); // Extract the key from the URL
        if (ogImageKey)
            imageKeys.push(ogImageKey);
    }
    if (post.productFeaturesImage) {
        const productFeaturesImageKey = post.productFeaturesImage.split('/').pop();
        if (productFeaturesImageKey)
            imageKeys.push(productFeaturesImageKey);
    }
    if (post.allProducts) {
        post.allProducts.forEach((product) => {
            if (product.productMainImage) {
                const productMainImageKey = product.productMainImage.split('/').pop();
                if (productMainImageKey)
                    imageKeys.push(productMainImageKey);
            }
            if (product.productImages) {
                product.productImages.forEach((imagePath) => {
                    const productImageKey = imagePath.split('/').pop();
                    if (productImageKey)
                        imageKeys.push(productImageKey);
                });
            }
        });
    }
    // Delete the images from Cloudflare R2
    await Promise.all(imageKeys.map(async (key) => {
        try {
            await (0, deleteObjectR2_1.deleteObjectFromR2)(key);
        }
        catch (err) {
            console.warn(`Failed to delete image with key: ${key}. Error: ${err.message}`);
        }
    }));
    // Delete the post
    const result = await post_service_1.PostService.removePost(slug);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Post removed successfully`,
        data: result,
    });
});
exports.postController = {
    createPosts,
    getAllPosts,
    getPopularPosts,
    getSinglePosts,
    removePosts,
    updatePosts,
};
