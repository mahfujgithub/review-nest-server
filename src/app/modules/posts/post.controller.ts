import catchAsync from "../../../shared/catchAsync";
import { Response, Request } from 'express';
import sendResponse from "../../../shared/sendResponse";
import { IPosts } from "./post.interface";
import { PostService } from "./post.service";





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


export const postController = {
    createPosts
}
