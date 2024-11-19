import catchAsync from "../../../shared/catchAsync";
import { Request, Response } from 'express';
import { MenuService } from "./menu.service";
import sendResponse from "../../../shared/sendResponse";
import { IMenu } from "./menu.interface";

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

export const MenuController = {
    createMenu
}