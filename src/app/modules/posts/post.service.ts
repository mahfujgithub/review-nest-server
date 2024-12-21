import { FilterQuery, SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { postSearchableFields } from './post.constant';
import { IPostFilters, IPosts } from './post.interface';
import { Post } from './post.model';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';

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
  });
  if (isExist) {
    throw new ApiError(httpStatus.HttpStatus.CONFLICT, 'Post is Already Exits');
  }
  const newPost = await Post.create(post);
  return newPost;
};

// get all posts
const getAllPost = async (
  paginationOptions: IPaginationOptions,
  filters: IPostFilters,
): Promise<IGenericResponse<IPosts[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: postSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Post.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Post.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// get single by id
const getSinglePost = async (slug: string) => {
  const httpStatus = await import('http-status-ts');
  const result = await Post.findById(slug);
  if (!result) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Post not found');
  }
  return result;
};

// update post
const updatePost = async (
  _id: string,
  payload: Partial<IPosts>,
): Promise<IPosts | null> => {
  const httpStatus = await import('http-status-ts');
  const idExist = Post.findById(_id);
  if (!idExist) {
    throw new ApiError(httpStatus.HttpStatus.CONFLICT, 'Post Not Found');
  }
  const { ...postData } = payload;
  const updatedPostData: Partial<IPosts> = { ...postData };

  const result = await Post.findByIdAndUpdate({ _id }, updatedPostData, {
    new: true,
  });
  return result;
};

// remove post
const removePost = async (id: string) => {
  const result = await Post.findByIdAndDelete(id);
  return result;
};

export const PostService = {
  createPost,
  getAllPost,
  getSinglePost,
  removePost,
  updatePost,
};
