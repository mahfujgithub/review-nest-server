import express from 'express';
const router = express.Router();
import { StuffController } from './stuff.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { StuffValidation } from './stuff.validation';
import validateRequest from '../../middlewares/validateRequest';

// Get All Admin Info (Admin Route)
router.get('/', auth(ENUM_USER_ROLE.ADMIN), StuffController.getAllStuff);

// Get Stuff Info Himself/Herself
router.get('/:id', StuffController.getSingleStuff);

// Update Stuff Info Himself/Herself
router.patch(
  '/:id',
  validateRequest(StuffValidation.updateStuffZodSchema),
  StuffController.updateStuff,
);

// Delete Admin Info (Admin Route)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), StuffController.removeStuff);

export const StuffRoutes = router;
