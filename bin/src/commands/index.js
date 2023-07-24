"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const init_js_1 = __importDefault(require("./init.js"));
const list_js_1 = __importDefault(require("./list.js"));
const addPage_js_1 = __importDefault(require("./addPage.js"));
exports.default = {
    initAction: init_js_1.default,
    listAction: list_js_1.default,
    addPageAction: addPage_js_1.default,
};
