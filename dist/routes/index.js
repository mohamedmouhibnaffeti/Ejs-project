"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const indexController_1 = __importDefault(require("../controllers/indexController"));
const register = (app) => {
    app.get("/", indexController_1.default.Index);
};
exports.register = register;
//# sourceMappingURL=index.js.map