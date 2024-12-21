import express from 'express';
import { MenuController } from './menu.controller';
import validateRequest from '../../middlewares/validateRequest';
import { MenuValidation } from './menu.validation';
const router = express.Router();

router.post('/create',
    validateRequest(MenuValidation.createMenuZodSchema),
    MenuController.createMenu)


router.get('/', MenuController.getAllMenu)

// get single menu
router.get('/:id', MenuController.getSingleMenu)

// update single menu
router.patch('/:id',
    validateRequest(MenuValidation.createMenuZodSchema),
    MenuController.updateMenu
)

// delete single menu
router.delete('/:id', MenuController.deleteMenu)

export const MenuRoutes = router;
