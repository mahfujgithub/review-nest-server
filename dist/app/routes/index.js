"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/users/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const admin_route_1 = require("../modules/admin/admin.route");
const post_route_1 = require("../modules/posts/post.route");
const menu_route_1 = require("../modules/menu/menu.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/admins',
        route: admin_route_1.AdminRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/posts',
        route: post_route_1.PostRouter,
    },
    {
        path: '/menu',
        route: menu_route_1.MenuRoutes
    },

];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
