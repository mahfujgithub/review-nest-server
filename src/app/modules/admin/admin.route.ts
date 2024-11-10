import express from 'express';
const router = express.Router();
import { AdminController } from './admin.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

// Get All Admin Info (Admin Route)
router.get('/', auth(ENUM_USER_ROLE.ADMIN), AdminController.getAllAdmins);

// Get Admin Info Himself/Herself
router.get('/:id', AdminController.getSingleAdmin);

// Delete Admin Info (Admin Route)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), AdminController.removeAdmin)

export const AdminRoutes = router;
