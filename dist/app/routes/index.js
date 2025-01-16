"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/users/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const stuff_route_1 = require("../modules/stuff/stuff.route");
const post_route_1 = require("../modules/posts/post.route");
const menu_route_1 = require("../modules/menu/menu.route");
const folder_route_1 = require("../modules/folder/folder.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/create-stuff',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/stuff',
        route: stuff_route_1.StuffRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/menu',
        route: menu_route_1.MenuRoutes,
    },
    {
        path: '/post',
        route: post_route_1.PostRouter,
    },
    {
        path: '/folder',
        route: folder_route_1.FolderRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
