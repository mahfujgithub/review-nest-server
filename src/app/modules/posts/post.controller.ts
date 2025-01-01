import catchAsync from "../../../shared/catchAsync";
import { Response, Request } from 'express';
import sendResponse from "../../../shared/sendResponse";
import { IPosts } from "./post.interface";
import { PostService } from "./post.service";
import pick from "../../../shared/pick";
import { postFilterableFields } from "./post.constant";
import { paginationFields } from "../../../constants/pagination";
import { uploadToCloudinary } from "../../../config/cloudinary.uploader";

// create post
const createPosts = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const post = req.body; // Other form fields in req.body

//   // If you're using upload.single(), the file will be in req.file
//   const file = req.file;

//   // You can now access the image URL or use the file for further processing
//   if (file) {
//     const cloudinaryResponse = await uploadToCloudinary(file.buffer, 'assets');
//     console.log('Cloudinary Upload Response:', cloudinaryResponse);
//   }

//   console.log(post);

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
const getAllPosts = catchAsync(async(req: Request, res: Response)=> {
    const httpStatus = await import ('http-status-ts');

    const filters = pick(req.query, postFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);

    const result = await PostService.getAllPost(paginationOptions, filters);

    // console.log(filters)

    sendResponse<IPosts[]>(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Get All Post SuccessFullly`,
        meta:result.meta,
        data: result.data,
    })

})


// get single post by id
const getSinglePosts = catchAsync(async(req: Request, res: Response)=> {
    const httpStatus = await import ('http-status-ts')
    const {slug} = req.params;
    const result = await PostService.getSinglePost(slug);
    sendResponse<IPosts>(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Get Single Post SuccessFully`,
        data: result,
    })
})


// update post
const updatePosts = catchAsync(async(req: Request, res: Response)=> {
    const httpStatus = await import ('http-status-ts')
    const {id} = req.params;
    const updatedPost = req.body;

    const result = await PostService.updatePost(id, updatedPost);
    sendResponse<IPosts>(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Update Post SuccessFullly`,
        data: result,
    })
})


// remove post
const removePosts = catchAsync(async(req: Request, res: Response)=> {
    const httpStatus = await import ('http-status-ts')
    const {id} = req.params;
    const result = await PostService.removePost(id);
    sendResponse<IPosts>(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Remove Post SuccessFullly`,
        data: result,
    })
})





export const postController = {
    createPosts,
    getAllPosts,
    getSinglePosts,
    removePosts,
    updatePosts
}
