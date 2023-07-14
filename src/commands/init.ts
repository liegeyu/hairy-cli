// init-action
import inquirer from "inquirer";

const prompt = inquirer.createPromptModule();

function initAction() {
    prompt([
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
    ]).then(answers => {
        console.log('init command', answers);
    })
}

export default initAction;