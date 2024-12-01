import express from 'express';
import { MenuController } from './menu.controller';
import validateRequest from '../../middlewares/validateRequest';
import { MenuValidation } from './menu.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();

router.post('/create',
    validateRequest(MenuValidation.createMenuZodSchema),
    MenuController.createMenu)


router.get('/', auth(ENUM_USER_ROLE.ADMIN), MenuController.getAllMenu)

// get single menu
router.get('/:id', MenuController.getSingleMenu)

<<<<<<< HEAD
=======
<<<<<<< HEAD
// update single menu
=======
// update signle menu
>>>>>>> f4115ff985d91e9b1f24ad8d53cc3d2eefa6eb65
>>>>>>> 1c8c5c0 (readme.md modified and post interface)
router.patch('/:id',
    validateRequest(MenuValidation.createMenuZodSchema),
    MenuController.updateMenu
)

// delete single menu
router.delete('/:id', MenuController.deleteMenu)

export const MenuRoutes = router;
