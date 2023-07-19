// init-action
import fs from "fs";
import inquirer from "inquirer";
import chalk from "chalk";
import ora from "ora";
import templateJson from "../config/template-des.json";

import { execCommand, rmCommand } from "../utils/shellUtils";

const prompt = inquirer.createPromptModule();

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
function checkFileExists(proName: String): String {
  const basePath = process.cwd();
  const proPath = `${basePath}/${proName}`;

  if (fs.existsSync(proPath)) {
    console.error(chalk.red('×'), `当前目录已存在${proName}项目`);
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
async function downloadTemplate(templateName: any, proPath: String) {
  const spinner = ora("正在下载模板...").start();
  console.log('\n');
  const curName = templateJson[templateName].name;

  const cloneCommand = `git clone ${templateJson[templateName].repo}`;
  const moveCommand = `move ${curName} ${proPath}`;
  const path = `${proPath}/.git`;

  const cloneRes = await execCommand(cloneCommand);
  if (cloneRes === 0) {
    await execCommand(moveCommand);
    await rmCommand(path);
    spinner.succeed("项目创建成功！");
  } else {
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
  })
}

export default initAction;