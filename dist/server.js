"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
process.on('uncaughtException', err => {
    console.log(err);
    process.exit(1);
});
let server;
async function boostrap() {
    try {
        await mongoose_1.default.connect(config_1.default.database_url);
        console.log(`Database center connected successfully!`);
        server = app_1.default.listen(config_1.default.port, () => {
            console.log(`Server listening on port ${config_1.default.port}`);
        });
    }
    catch (err) {
        console.log(`failed to connect database, ${err}`);
    }
    process.on('unhandledRejection', err => {
        if (server) {
            server.close(() => {
                console.log(err);
                process.exit(1);
            });
        }
        else {
            process.exit(1);
        }
    });
}
process.on('SIGTERM', () => {
    console.log('SIGTERM is received!');
    if (server) {
        server.close();
    }
});
boostrap();
