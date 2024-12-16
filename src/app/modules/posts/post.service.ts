import ApiError from '../../../errors/ApiError';
import { IPosts } from './post.interface';
import { Post } from './post.model';



// create post
const createPost = async (post: IPosts) => {
    const httpStatus = await import('http-status-ts');

    const isExist = await Post.findOne({
        seoTitle: post.seoTitle,
        slug: post.slug,
        metaDescription: post.metaDescription,
        canonicalUrl: post.canonicalUrl,
        keywords: post.keywords,
        ogTitle: post.ogTitle,
        ogImage: post.ogImage,
        ogDescription: post.ogDescription,
        structuredData: post.structuredData,
        productTitle: post.productTitle,
        subTitle: post.subTitle,
        images: post.images,
        authorName: post.authorName,
        price: post.price,
        review: post.review,
        availability: post.availability,
        tags: post.tags,
        menu: post.menu,
        subMenu: post.subMenu,
        editorData: post.editorData,
    })

    if (isExist) {
        throw new ApiError(httpStatus.HttpStatus.CONFLICT, 'Post is Already Exits');

    }
    const newPost = await Post.create(post);
    return newPost
}


// get all posts
const getAllPost = async(post: IPosts)=> {
    // condition

    const result = await Post.find(post)
    return result
}

// get single by id
const getSinglePost= async(id: string)=> {
    const httpStatus = await import ('http-status-ts')
    const result = await Post.findById(id);
    if (!result) {
        throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Post not found');

    };
    return result
}

// update post
const updatePost = async(_id: string, payload: Partial<IPosts>): Promise<IPosts | null> => {
    const httpStatus = await import ('http-status-ts')
    const idExist = Post.findById(_id)
    if (!idExist) {
        throw new ApiError(httpStatus.HttpStatus.CONFLICT, 'Post Not Found');

    }
    const {...postData} = payload;
    const updatedPostData: Partial<IPosts> = {...postData}

    const result = await Post.findByIdAndUpdate({_id}, updatedPostData, {
      new: true
    });
    return result
}

// remove post
const removePost = async(id: string)=> {
    const result = await Post.findByIdAndDelete(id);
    return result
}


export const PostService = {
    createPost,
    getAllPost,
    getSinglePost,
    removePost,
    updatePost
}
