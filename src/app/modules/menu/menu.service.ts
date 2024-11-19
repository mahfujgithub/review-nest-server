import ApiError from '../../../errors/ApiError';
import { IMenu } from './menu.interface';
import { Menu } from './menu.model';

const createMenu = async (menu: IMenu) => {
  const httpStatus = await import('http-status-ts');

  const existingMenu = await Menu.findOne({
    category: menu.category,
    subcategory: menu.subcategory,
  });

  // If a duplicate is found, throw an error or handle it as needed
  if (existingMenu) {
    throw new ApiError(httpStatus.HttpStatus.CONFLICT, 'Menu already exists!');
  }
  
  // Create the new menu item if no duplicate is found
  const result = await Menu.create(menu);
  return result;
};

export const MenuService = {
  createMenu,
};
