import catchAsync from "../../../shared/catchAsync";
import { Request, Response } from 'express';
import { MenuService } from "./menu.service";
import sendResponse from "../../../shared/sendResponse";
import { IMenu } from "./menu.interface";


// create menu
const createMenu = catchAsync(async (req: Request, res: Response) => {
    const httpStatus = await import('http-status-ts');
    const menu = req.body;
    const result = await MenuService.createMenu(menu);

    sendResponse<IMenu>(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Menu created successfully!`,
        data: result
    })
});


// get all menu
const getAllMenu = catchAsync( async(req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const menu = req.body;
  const result = await MenuService.getAllMenu(menu)

  sendResponse<IMenu[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Menu Get SuccessFully',
    data: result
  })
});


// get single menu
const getSingleMenu = catchAsync(async(req: Request, res: Response) => {
    const httpStatus = await import('http-status-ts');
    const {id} = req.params;
    const result = await MenuService.getSingleMenu(id)

    sendResponse<IMenu>(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Get Single Menu SuccessFully',
        data: result
      })

})


// update single menu
const updateMenu =catchAsync(async(req: Request, res: Response) => {
    const httpStatus = await import('http-status-ts');
    const {id} = req.params;

    const updatedMenu = req.body;

    const result = await MenuService.updateMenu(id, updatedMenu)

    sendResponse<IMenu>(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Update Single Menu SuccessFully',
        data: result
      })
})

// delete single menu
const deleteMenu = catchAsync(async(req: Request, res: Response) => {
    const httpStatus = await import('http-status-ts');
    const {id} = req.params;
    const result = await MenuService.deleteMenu(id)

    sendResponse<IMenu>(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Delete Single Menu SuccessFully',
        data: result
      })
})


export const MenuController = {
    createMenu,
    getAllMenu,
    getSingleMenu,
    updateMenu,
    deleteMenu
}
