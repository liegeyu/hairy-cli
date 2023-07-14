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

// 解析参数
program.parse();