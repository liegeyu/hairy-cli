#! /usr/bin/env node
import { Command } from "commander";
import pack from "../package.json";
import Action from "./commands/index.js"

const program = new Command();

program
    .name(pack.name)
    .version(pack.version)
    .helpOption('-h, --help')
    .usage('<command> [option]');

program
    .command('init')
    .description('生成对应模板的项目')
    .action(Action.initAction);

program
    .command('list')
    .description('显示所有模板')
    .action(Action.listAction);

program
    .command('addpage <pageName>')
    .description('添加页面')
    .option('-vue2, --vue2', '使用 Vue2')
    .option('-vue3, --vue3', '使用 Vue3')
    .option('-ts, --typescript', '使用 TypeScript')
    .option('-less, --less', '使用 Less')
    .option('-scss, --scss', '使用 scss')
    .action(Action.addPageAction);

// 解析参数
program.parse(process.argv);
