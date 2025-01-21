import ApiError from '../../../errors/ApiError';
// import { Blog } from './blog.model';
import { ISubMenu } from './submenu.interface';
import { SubMenu } from './submenu.model';

const createBlog = async (blog: ISubMenu) => {
  const httpStatus = await import('http-status-ts');

  // Normalize the input to avoid duplicate issues
  //   const normalizedMenu = menu.menu.trim().toLowerCase();
  //   const normalizedSubMenu = menu.subMenu.trim().toLowerCase();

  // Check if the `blog` already exists
  const existingBlog = await SubMenu.findOne({ slug: blog.slug });

  if (existingBlog) {
    throw new ApiError(
      httpStatus.HttpStatus.CONFLICT,
      'Blog is already exist!',
    );
  }

  // If no `blog` exists, create a new one
  const newBlog = await SubMenu.create(blog);

  return newBlog;
};

// get all blog
const getAllBlog = async (blog: ISubMenu) => {
  const result = await SubMenu.find(blog);
  return result;
};

// get single blog
const getSingleBlog = async (slug: string) => {
  const result = await SubMenu.findOne({slug: slug});
  return result;
};

// update single blog
const updateMenu = async (
  slug: string,
  payload: Partial<ISubMenu>,
): Promise<ISubMenu | null> => {
  const httpStatus = await import('http-status-ts');
  const isExist = await SubMenu.findOne({ slug: slug });

  if (!isExist) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Menu not found!');
  }

  const { ...blogData } = payload;

  const updatedBlogData: Partial<ISubMenu> = { ...blogData };

  const result = await SubMenu.findOneAndUpdate({ slug }, updatedBlogData, {
    new: true,
  });
  return result;
};

// delete blog
const deleteBlog = async (slug: string) => {
  const result = await SubMenu.findOneAndDelete({slug});
  return result;
};

export const SubMenuService = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateMenu,
  deleteBlog,
};
