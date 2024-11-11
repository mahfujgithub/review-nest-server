import express from 'express';
const router = express.Router();
import { AdminController } from './admin.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { AdminValidation } from './admin.validation';
import validateRequest from '../../middlewares/validateRequest';

// Get All Admin Info (Admin Route)
router.get('/', auth(ENUM_USER_ROLE.ADMIN), AdminController.getAllAdmins);

// Get Admin Info Himself/Herself
router.get('/:id', AdminController.getSingleAdmin);

// Update Customer Info Himself/Herself
router.patch(
  '/:id',
  validateRequest(AdminValidation.updateAdminZodSchema),
  AdminController.updateAdmin,
);

// Delete Admin Info (Admin Route)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), AdminController.removeAdmin)

export const AdminRoutes = router;
