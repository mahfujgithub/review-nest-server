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
const config_1 = __importDefault(require("../../../config"));
const nested_query_1 = __importDefault(require("../../../helpers/nested.query"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
// create post
// const createPosts = catchAsync(async (req: Request, res: Response) => {
//   const httpStatus = await import('http-status-ts');
//   const post = req.body;
//   // Base URL for the images (replace with your app's URL)
//   const baseUrl = config.server_address;
//   // Process uploaded files
//   const files = req.files as { [fieldname: string]: Express.Multer.File[] };
//   // Handle the ogImage
//   if (files['ogImage']) {
//     post.ogImage = `${baseUrl}uploads/${files['ogImage'][0].originalname}`;
//   }
//   // Handle the productFeaturesImage
//   if (files['productFeaturesImage']) {
//     post.productFeaturesImage = `${baseUrl}uploads/${files['productFeaturesImage'][0].originalname}`;
//   }
//   // Loop through all allProducts dynamically based on the keys in files
//   Object.keys(files).forEach(field => {
//     // Check if the field corresponds to a product's image
//     const match = field.match(
//       /^allProducts\[(\d+)]\[(productMainImage|productImages)]/,
//     );
//     if (match) {
//       const productIndex = match[1]; // Extract product index from the field
//       const imageType = match[2]; // Either productMainImage or productImages
//       if (!post.allProducts[productIndex]) {
//         post.allProducts[productIndex] = {}; // Initialize the product if not yet set
//       }
//       // Assign the image(s) to the correct product
//       if (imageType === 'productMainImage' && files[field]) {
//         post.allProducts[productIndex].productMainImage =
//           `${baseUrl}uploads/${files[field][0].originalname}`;
//       } else if (imageType === 'productImages' && files[field]) {
//         post.allProducts[productIndex].productImages = files[field].map(
//           file => `${baseUrl}uploads/${file.originalname}`,
//         );
//       }
//     }
//   });
//   // Call the service to create the post
//   const result = await PostService.createPost(post);
//   // Construct the full URLs for images in the response
//   const constructImageUrl = (imagePath: string) => {
//     return `${baseUrl}uploads/${imagePath}`; // Replace with your app's domain
//   };
//   // Modify the post object to include full URLs for image paths
//   if (post.ogImage) post.ogImage = constructImageUrl(post.ogImage);
//   if (post.productFeaturesImage)
//     post.productFeaturesImage = constructImageUrl(post.productFeaturesImage);
//   if (post.allProducts) {
//     post.allProducts.forEach((product: any) => {
//       if (product.productMainImage)
//         product.productMainImage = constructImageUrl(product.productMainImage);
//       if (product.productImages) {
//         product.productImages = product.productImages.map(constructImageUrl);
//       }
//     });
//   }
//   sendResponse<IPosts>(res, {
//     statusCode: httpStatus.HttpStatus.OK,
//     success: true,
//     message: 'Post Created Successfully',
//     data: result,
//   });
// });
const createPosts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const post = req.body;
    // Base URL for the images (replace with your app's URL)
    const baseUrl = config_1.default.server_address;
    // Process uploaded files
    const files = req.files;
    if (files['ogImage']) {
        console.log('ogImage filename:', files['ogImage'][0].filename);
        post.ogImage = `${baseUrl}uploads/${files['ogImage'][0].filename}`;
    }
    if (files['productFeaturesImage']) {
        console.log('productFeaturesImage filename:', files['productFeaturesImage'][0].filename);
        post.productFeaturesImage = `${baseUrl}uploads/${files['productFeaturesImage'][0].filename}`;
    }
    Object.keys(files).forEach(field => {
        console.log(`Processing field: ${field}`);
        const match = field.match(/^allProducts\[(\d+)]\[(productMainImage|productImages)]/);
        if (match) {
            const productIndex = match[1];
            const imageType = match[2];
            post.allProducts = post.allProducts || [];
            if (!post.allProducts[productIndex]) {
                post.allProducts[productIndex] = {};
            }
            if (imageType === 'productMainImage' && files[field]) {
                console.log(`Product ${productIndex} main image filename:`, files[field][0].filename);
                post.allProducts[productIndex].productMainImage =
                    `${baseUrl}uploads/${files[field][0].filename}`;
            }
            else if (imageType === 'productImages' && files[field]) {
                console.log(`Product ${productIndex} additional images filenames:`, files[field].map(file => file.filename));
                post.allProducts[productIndex].productImages = files[field].map(file => `${baseUrl}uploads/${file.filename}`);
            }
        }
    });
    // Call the service to create the post
    const result = await post_service_1.PostService.createPost(post);
    // Construct the full URLs for images in the response
    const constructImageUrl = (imagePath) => `${baseUrl}uploads/${imagePath}`;
    // Modify the post object to include full URLs for image paths
    if (post.ogImage)
        post.ogImage = constructImageUrl(post.ogImage);
    if (post.productFeaturesImage)
        post.productFeaturesImage = constructImageUrl(post.productFeaturesImage);
    if (post.allProducts) {
        post.allProducts.forEach((product) => {
            if (product.productMainImage)
                product.productMainImage = constructImageUrl(product.productMainImage);
            if (product.productImages) {
                product.productImages = product.productImages.map(constructImageUrl);
            }
        });
    }
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
    // console.log(filters)
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Get All Post SuccessFullly`,
        meta: result.meta,
        data: result.data,
    });
});
// get single post by id
const getSinglePosts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { slug } = req.params;
    const result = await post_service_1.PostService.getSinglePost(slug);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Get Single Post SuccessFully`,
        data: result,
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
// remove post
// const removePosts = catchAsync(async (req: Request, res: Response) => {
//   const httpStatus = await import('http-status-ts');
//   const { slug } = req.params;
//   const result = await PostService.removePost(slug);
//   sendResponse<IPosts>(res, {
//     statusCode: httpStatus.HttpStatus.OK,
//     success: true,
//     message: `Remove Post SuccessFullly`,
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
    // Collect all image paths
    const imagePaths = [];
    if (post.ogImage)
        imagePaths.push(path_1.default.join(__dirname, '../../public', post.ogImage.replace(`${config_1.default.server_address}uploads/`, '')));
    if (post.productFeaturesImage)
        imagePaths.push(path_1.default.join(__dirname, '../../public', post.productFeaturesImage.replace(`${config_1.default.server_address}uploads/`, '')));
    if (post.allProducts) {
        post.allProducts.forEach((product) => {
            if (product.productMainImage)
                imagePaths.push(path_1.default.join(__dirname, '../../public', product.productMainImage.replace(`${config_1.default.server_address}uploads/`, '')));
            if (product.productImages) {
                product.productImages.forEach((imagePath) => imagePaths.push(path_1.default.join(__dirname, '../../public', imagePath.replace(`${config_1.default.server_address}uploads/`, ''))));
            }
        });
    }
    // Delete the images
    await Promise.all(imagePaths.map(async (imagePath) => {
        try {
            await promises_1.default.unlink(imagePath);
            console.log(`Deleted image: ${imagePath}`);
        }
        catch (err) {
            console.warn(`Failed to delete image: ${imagePath}, Error: ${err.message}`);
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
    getSinglePosts,
    removePosts,
    updatePosts,
};
