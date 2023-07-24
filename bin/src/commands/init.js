"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// init-action
const fs_1 = __importDefault(require("fs"));
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const template_des_json_1 = __importDefault(require("../config/template-des.json"));
const shellUtils_js_1 = require("../utils/shellUtils.js");
const prompt = inquirer_1.default.createPromptModule();
const questions = [
    {
        type: 'list',
        message: '请选择项目模板',
        name: 'templateName',
        choices: [
            "idea-web",
            "idea-mobile",
            "idea-miniapp",
        ]
    },
    {
        type: 'input',
        message: '请输入项目名称',
        name: 'proName'
    }
];
/**
 * 判断文件夹是否存在
 * @param {String} proName
 * @return {Stirng} proPath
 */
function checkFileExists(proName) {
    const basePath = process.cwd();
    const proPath = `${basePath}/${proName}`;
    if (fs_1.default.existsSync(proPath)) {
        console.error(chalk_1.default.red('×'), `当前目录已存在${proName}项目`);
        process.exitCode = 1;
        return '';
    }
    return proPath;
}
/**
 * 下载项目模板
 * @param {Stirng}  templateName
 * @param {String} proPath
 * @return {void}
 */
async function downloadTemplate(templateName, proPath) {
    const spinner = (0, ora_1.default)("正在下载模板...").start();
    console.log('\n');
    const curName = template_des_json_1.default[templateName].name;
    const cloneCommand = `git clone ${template_des_json_1.default[templateName].repo}`;
    const moveCommand = `move ${curName} ${proPath}`;
    const path = `${proPath}/.git`;
    const cloneRes = await (0, shellUtils_js_1.execCommand)(cloneCommand);
    if (cloneRes === 0) {
        await (0, shellUtils_js_1.execCommand)(moveCommand);
        await (0, shellUtils_js_1.rmCommand)(path);
        spinner.succeed("项目创建成功！");
    }
    else {
        spinner.fail("项目创建失败！");
    }
}
function initAction() {
    prompt(questions).then(answers => {
        const { templateName, proName } = answers;
        const proPath = checkFileExists(proName);
        if (proPath) {
            downloadTemplate(templateName, proPath);
        }
    });
}
exports.default = initAction;
