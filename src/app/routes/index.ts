import express from "express";
import { UserRoutes } from "../modules/users/user.route";
import { AuthRoutes } from '../modules/auth/auth.route';
import { AdminRoutes } from '../modules/admin/admin.route';
import { MenuRoutes } from '../modules/menu/menu.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/',
    route: UserRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/menu',
    route: MenuRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
