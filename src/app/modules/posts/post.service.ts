import { IPosts } from './post.interface';
import { Post } from './post.model';




const createPost = async (post: IPosts) => {
    // const httpStatus = await import('http-status-ts');
    const newPost = await Post.create(post)
    return newPost
}


export const PostService = {
    createPost
}
