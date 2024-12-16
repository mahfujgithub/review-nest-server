import catchAsync from "../../../shared/catchAsync";
import { Response, Request } from 'express';
import sendResponse from "../../../shared/sendResponse";
import { IPosts } from "./post.interface";
import { PostService } from "./post.service";




// create post
const createPosts = catchAsync(async(req: Request, res: Response)=> {
    const httpStatus = await import ('http-status-ts')
    const post = req.body;

    const result = await PostService.createPost(post)
    sendResponse<IPosts>(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Post Created SuccessFullly`,
        data: result,
    })
})


// get ll post
const getAllPosts = catchAsync(async(req: Request, res: Response)=> {
    const httpStatus = await import ('http-status-ts')
    const post = req.body;
    const result = await PostService.getAllPost(post);
    sendResponse<IPosts[]>(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Get All Post SuccessFullly`,
        data: result,
    })

})


// get single post by id
const getSinglePosts = catchAsync(async(req: Request, res: Response)=> {
    const httpStatus = await import ('http-status-ts')
    const {id} = req.params;
    const result = await PostService.getSinglePost(id);
    sendResponse<IPosts>(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Get Single Post SuccessFullly`,
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
