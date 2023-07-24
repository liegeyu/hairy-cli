#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const package_json_1 = __importDefault(require("../package.json"));
const index_js_1 = __importDefault(require("./commands/index.js"));
const program = new commander_1.Command();
program
    .name(package_json_1.default.name)
    .version(package_json_1.default.version)
    .helpOption('-h, --help')
    .usage('<command> [option]');
program
    .command('init')
    .description('生成对应模板的项目')
    .action(index_js_1.default.initAction);
program
    .command('list')
    .description('显示所有模板')
    .action(index_js_1.default.listAction);
program
    .command('addpage <pageName>')
    .description('添加页面')
    .option('-vue2, --vue2', '使用 Vue2')
    .option('-vue3, --vue3', '使用 Vue3')
    .option('-ts, --typescript', '使用 TypeScript')
    .option('-less, --less', '使用 Less')
    .option('-scss, --scss', '使用 scss')
    .action(index_js_1.default.addPageAction);
// 解析参数
program.parse(process.argv);
