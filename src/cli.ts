#! /usr/bin/env node

import { Command } from "commander";
import pack from "../package.json";
import Action from "./commands/index"

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
    .command('add page <pageName>')
    .description('添加页面')
    .option('-v2, --vue2', '使用 Vue2')
    .option('-v3, --vue3', '使用 Vue3')
    .option('-ts, --typescript', '使用 TypeScript')
    .option('-less, --less', '使用 Less')
    .option('-scss, --scss', '使用 scss')
    .action(Action.addPage);

// 解析参数
program.parse(process.argv);