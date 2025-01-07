import { FilterQuery, SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { postSearchableFields } from './post.constant';
import { IPostFilters, IPosts } from './post.interface';
import { PostModel } from './post.model';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import buildNestedUpdateQuery from '../../../helpers/nested.query';

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
  const result = await PostModel.findOne({slug: slug});
  if (!result) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Post not found');
  }
  return result;
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
  removePost,
  updatePost,
};
