import { FilterQuery, SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { postSearchableFields } from './post.constant';
import { IPostFilters, IPosts } from './post.interface';
import { PostModel } from './post.model';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import buildNestedUpdateQuery from '../../../helpers/nested.query';
import { RequestCountModel } from '../../../shared/requestCount.model';
import { IPostWithRelated } from '../../../shared/sendResponse';

// create post
const createPost = async (post: IPosts) => {
  const httpStatus = await import('http-status-ts');
  
  const isExist = await PostModel.findOne({
    slug: post.slug,
    productTitle: post.productTitle
  });
  
  if (isExist) {
    throw new ApiError(
      httpStatus.HttpStatus.CONFLICT,
      'Post Duplication not allowed!',
    );
  }

  const newPost = await PostModel.create(post);
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
  } else {
    sortConditions['createdAt'] = 'desc'; // Ensures new posts appear first.
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await PostModel.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await PostModel.countDocuments(whereConditions);

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

  // Increment the request count
  const count = await RequestCountModel.findOneAndUpdate(
    { slug },
    { $inc: { count: 1 } },
    { upsert: true, new: true },
  );

  const result = await PostModel.findOne({ slug: slug });
  if (!result) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Post not found');
  }

  return {
    ...result.toObject(),
    visitCount: count ? count.count : 1,
  };
};

const getRelatedPosts = async (slug: string): Promise<IPostWithRelated> => {
  const httpStatus = await import('http-status-ts');

  // Fetch the current post by slug to get its subMenu
  const currentPost = await PostModel.findOne({ slug });
  if (!currentPost) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Post not found');
  }

  const { subMenu } = currentPost;

  // Fetch related posts based on the same subMenu, excluding the current post
  const relatedPosts = await PostModel.find({
    subMenu,
    slug: { $ne: slug }, // Exclude the current post by slug
  });

  const relatedCount = await PostModel.countDocuments({
    subMenu,
    slug: { $ne: slug },
  });

  return {
    relatedPosts, // Return the related posts
    relatedCount, // Return the related posts count
  };
};

// update post
const updatePost = async (
  slug: string,
  payload: Partial<IPosts>,
): Promise<IPosts | null> => {
  const httpStatus = await import('http-status-ts');
  const isExist = await PostModel.findOne({slug: slug});
  if (!isExist) {
    throw new ApiError(httpStatus.HttpStatus.CONFLICT, 'Post Not Found');
  }

  // Construct the update query
  const updateQuery = buildNestedUpdateQuery(payload);

  // Update the document with the constructed query
  const result = await PostModel.findOneAndUpdate(
    {slug: slug},
    { $set: updateQuery },
    { new: true },
  );
  return result;
};

// remove post
const removePost = async (slug: string) => {
  const result = await PostModel.findOneAndDelete({slug: slug});
  return result;
};

export const PostService = {
  createPost,
  getAllPost,
  getSinglePost,
  getRelatedPosts,
  removePost,
  updatePost,
};
