import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { StuffRoutes } from '../modules/stuff/stuff.route';
import { PostRouter } from '../modules/posts/post.route';
import { MenuRoutes } from '../modules/menu/menu.route';
import { FolderRoutes } from '../modules/folder/folder.route';
import { BlogRoutes } from '../modules/blog/blog.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/create-stuff',
    route: UserRoutes,
  },
  {
    path: '/stuff',
    route: StuffRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/menu',
    route: MenuRoutes,
  },
  {
    path: '/post',
    route: PostRouter,
  },
  {
    path: '/blog',
    route: BlogRoutes,
  },
  {
    path: '/folder',
    route: FolderRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
