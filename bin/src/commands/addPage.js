"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// addpage-action
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const shellUtils_js_1 = require("../utils/shellUtils.js");
function addPageAction(pagename, options) {
    const { vue2, vue3, typescript, less, scss } = options;
    if ((vue2 && vue3) || (less && scss)) {
        console.error(chalk_1.default.red('×'), '所选版本冲突');
    }
    (0, shellUtils_js_1.mkdirCommand)(`${pagename}`);
    (0, shellUtils_js_1.touchCommand)(`${pagename}/index.vue`);
    const vueVersion = vue2 ? 'vue2' : 'vue3';
    const templatePath = path_1.default.resolve(__dirname + `/templates/${vueVersion}-template.ejs`);
    const template = fs_1.default.readFileSync(templatePath, "utf-8");
    console.log(template);
}
exports.default = addPageAction;
