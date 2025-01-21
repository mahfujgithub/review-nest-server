import ApiError from '../../../errors/ApiError';
import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlog = async (blog: IBlog) => {
  const httpStatus = await import('http-status-ts');

  // Check if the `blog` already exists
  const existingBlog = await Blog.findOne({ slug: blog.slug });

  if (existingBlog) {
    throw new ApiError(
      httpStatus.HttpStatus.CONFLICT,
      'Blog is already exist!',
    );
  }

  // If no `blog` exists, create a new one
  const newBlog = await Blog.create(blog);

  return newBlog;
};

// get all blog
const getAllBlog = async (blog: IBlog) => {
  const result = await Blog.find(blog);
  return result;
};

// get single blog
const getSingleBlog = async (slug: string) => {
  const result = await Blog.findOne({slug: slug});
  return result;
};

// update single blog
const updateMenu = async (
  slug: string,
  payload: Partial<IBlog>,
): Promise<IBlog | null> => {
  const httpStatus = await import('http-status-ts');
  const isExist = await Blog.findOne({ slug: slug });

  if (!isExist) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Menu not found!');
  }

  const { ...blogData } = payload;

  const updatedBlogData: Partial<IBlog> = { ...blogData };

  const result = await Blog.findOneAndUpdate({ slug }, updatedBlogData, {
    new: true,
  });
  return result;
};

// delete blog
const deleteBlog = async (slug: string) => {
  const result = await Blog.findOneAndDelete({slug});
  return result;
};

export const BlogService = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateMenu,
  deleteBlog,
};
