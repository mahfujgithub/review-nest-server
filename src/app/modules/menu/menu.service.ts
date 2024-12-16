import ApiError from '../../../errors/ApiError';
import { IMenu } from './menu.interface';
import { Menu } from './menu.model';

const createMenu = async (menu: { menu: string; subMenu: string }) => {
  const httpStatus = await import('http-status-ts');

  // Normalize the input to avoid duplicate issues
  const normalizedMenu = menu.menu.trim().toLowerCase();
  const normalizedSubMenu = menu.subMenu.trim().toLowerCase();

  // Check if the `menu` already exists
  const existingMenu = await Menu.findOne({ menu: normalizedMenu });

  if (existingMenu) {
    // Check if `subMenu` already exists in the array
    const subMenuExists = existingMenu.subMenu.includes(normalizedSubMenu);

    if (subMenuExists) {
      throw new ApiError(
        httpStatus.HttpStatus.CONFLICT,
        'SubMenu already exists for this menu!',
      );
    }

    // Append the new `subMenu` to the array
    existingMenu.subMenu.push(normalizedSubMenu);
    await existingMenu.save();

    return existingMenu;
  }

  // If no `menu` exists, create a new one
  const newMenu = await Menu.create({
    menu: normalizedMenu,
    subMenu: [normalizedSubMenu],
  });

  return newMenu;
};



// get all menu
const getAllMenu = async(menu: IMenu) => {
    const result = await Menu.find(menu);
    return result
}

// get single menu
const getSingleMenu = async(id: string) => {
    const result = await Menu.findById(id)
    return result
}

// update single menu
const updateMenu = async(_id: string, payload: Partial<IMenu>): Promise<IMenu | null> => {
    const httpStatus = await import('http-status-ts');
    const isExist = await Menu.findById(_id)

    if (!isExist) {
        throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Menu not found!')
    }

    const { ...menuData } = payload;

    const updatedMenuData: Partial<IMenu> = { ...menuData };

    const result = await Menu.findByIdAndUpdate({_id}, updatedMenuData, {
        new: true
    })
    return result
}


// delete menu
const deleteMenu = async(id: string)=> {
    const result = await Menu.findByIdAndDelete(id)
    return result
}

export const MenuService = {
  createMenu,
  getAllMenu,
  getSingleMenu,
  updateMenu,
  deleteMenu
};
