"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const path_1 = __importDefault(require("path"));
// middlewares
app.use((0, cors_1.default)({ origin: '*' })); // Allow all origins
app.use((0, cookie_parser_1.default)());
// parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Serve static files
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Serve static files from the 'public' directory
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'public/uploads')));
// Application Routes
app.use('/api/v1', routes_1.default);
// app.use('/create-post')
// testing
app.get('/', (req, res, next) => {
    // res.send('affiliate server booming!');
    res.sendFile(path_1.default.join(__dirname, '../public/', 'index.html'));
});
// global error handler
app.use(globalErrorHandler_1.default);
app.use(async (req, res, next) => {
    const httpStatus = await import('http-status-ts');
    res.status(httpStatus.HttpStatus.NOT_FOUND).json({
        success: false,
        message: 'Not found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'API Not Found!',
            },
        ],
    });
    next();
});
exports.default = app;
