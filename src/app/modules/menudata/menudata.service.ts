
import ApiError from '../../../errors/ApiError';
import { IMenuData } from './menudata.interface';
import { MenuData } from './menudata.model';

const createMenuData = async (blog: IMenuData) => {
  const httpStatus = await import('http-status-ts');

  // Normalize the input to avoid duplicate issues
  //   const normalizedMenu = menu.menu.trim().toLowerCase();
  //   const normalizedSubMenu = menu.subMenu.trim().toLowerCase();

  // Check if the `blog` already exists
  const existingMenuData = await MenuData.findOne({ slug: blog.slug });

  if (existingMenuData) {
    throw new ApiError(
      httpStatus.HttpStatus.CONFLICT,
      'Blog is already exist!',
    );
  }

  // If no `blog` exists, create a new one
  const newBlog = await MenuData.create(blog);

  return newBlog;
};

// get all blog
const getAllMenuData = async (blog: IMenuData) => {
  const result = await MenuData.find(blog);
  return result;
};

// get single blog
const getSingleMenuData = async (slug: string) => {
  const result = await MenuData.findOne({slug: slug});
  return result;
};

// update single blog
const updateMenuData = async (
  slug: string,
  payload: Partial<IMenuData>,
): Promise<IMenuData | null> => {
  const httpStatus = await import('http-status-ts');
  const isExist = await MenuData.findOne({ slug: slug });

  if (!isExist) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Menu not found!');
  }

  const { ...blogData } = payload;

  const updatedBlogData: Partial<IMenuData> = { ...blogData };

  const result = await MenuData.findOneAndUpdate({ slug }, updatedBlogData, {
    new: true,
  });
  return result;
};

// delete blog
const deleteMenuData = async (slug: string) => {
  const result = await MenuData.findOneAndDelete({slug});
  return result;
};

export const MenuDataService = {
  createMenuData,
  getAllMenuData,
  getSingleMenuData,
  updateMenuData,
  deleteMenuData,
};
