import { FilterQuery } from 'mongoose';
import { IPosts } from './common.interface';
import { Post } from './common.model';

const createPost = async (post: IPosts) => {
  // const httpStatus = await import('http-status-ts');
  const newPost = await Post.create(post);
  return newPost;
};

const getProductsByCategoryAndSubcategory = async (
  category: string,
  subcategory: string,
) => {
  const filter: FilterQuery<IPosts> = {};
  if (category) filter.category = category;
  if (subcategory) filter.subcategory = subcategory;

  const products = await Post.find(filter);
  return products;
};

export const PostService = {
  createPost,
  getProductsByCategoryAndSubcategory,
};
