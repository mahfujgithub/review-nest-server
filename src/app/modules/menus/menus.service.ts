import ApiError from '../../../errors/ApiError';
import { IMenus } from './menus.interface';
import { Menus } from './menus.model';

const createMenus = async (blog: IMenus) => {
  const httpStatus = await import('http-status-ts');

  // Normalize the input to avoid duplicate issues
  //   const normalizedMenu = menu.menu.trim().toLowerCase();
  //   const normalizedSubMenu = menu.subMenu.trim().toLowerCase();

  // Check if the `blog` already exists
  const existingBlog = await Menus.findOne({ slug: blog.slug });

  if (existingBlog) {
    throw new ApiError(
      httpStatus.HttpStatus.CONFLICT,
      'Blog is already exist!',
    );
  }

  // If no `blog` exists, create a new one
  const newBlog = await Menus.create(blog);

  return newBlog;
};

// get all blog
const getAllMenus = async (blog: IMenus) => {
  const result = await Menus.find(blog);
  return result;
};

// get single blog
const getSingleMenus = async (slug: string) => {
  const result = await Menus.findOne({slug: slug});
  return result;
};

// update single blog
const updateMenus = async (
  slug: string,
  payload: Partial<IMenus>,
): Promise<IMenus | null> => {
  const httpStatus = await import('http-status-ts');
  const isExist = await Menus.findOne({ slug: slug });

  if (!isExist) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Menu not found!');
  }

  const { ...blogData } = payload;

  const updatedBlogData: Partial<IMenus> = { ...blogData };

  const result = await Menus.findOneAndUpdate({ slug }, updatedBlogData, {
    new: true,
  });
  return result;
};

// delete blog
const deleteMenus = async (slug: string) => {
  const result = await Menus.findOneAndDelete({slug});
  return result;
};

export const MenusService = {
  createMenus,
  getAllMenus,
  getSingleMenus,
  updateMenus,
  deleteMenus,
};
