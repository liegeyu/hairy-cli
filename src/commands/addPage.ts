// addpage-action
import fs from "fs";
import chalk from "chalk";
import ora from "ora";

import { mkdirCommand, touchCommand } from "../utils/shellUtils";
import { renderTemplate } from "../utils/ejsUtils";
import vue2Template from "../templates/vue2-template";
import vue3Template from "../templates/vue3-template";

interface OptionsObj {
  vue2: Boolean,
  vue3: Boolean,
  less: Boolean,
  scss: Boolean,
  typescript: Boolean
}

interface TemplateParams {
  htmlTitle?: String;
  scriptType?: String;
  cssPreprocessor?: String;
}

function addPageAction(pagename: String, options: OptionsObj) {
  const spinner = ora();
  spinner.start("正在努力创建页面...");
  console.log("")
  const { vue2, vue3, typescript, less, scss } = options;
  if ((vue2 && vue3) || (less && scss)) {
    console.error(chalk.red('×'), '所选版本冲突');
  }

  try {
    mkdirCommand(`${pagename}`);
    touchCommand(`${pagename}/index.vue`);
  
    let ejsContent: string = "";
    const templateParams: TemplateParams = {};
    templateParams.htmlTitle = pagename;

    if (vue2) {
      ejsContent = vue2Template;
      templateParams.htmlTitle = "";
    } else {
      ejsContent = vue3Template;
      templateParams.scriptType = typescript ? "ts" : "";
    }
    templateParams.cssPreprocessor = less ? "less" : scss ? "scss" : "";    

    const renderContent: string = renderTemplate(ejsContent, templateParams);
    fs.writeFileSync(`${pagename}/index.vue`, renderContent, 'utf-8');
    spinner.succeed("创建成功");
  } catch (err) {
    spinner.fail(err.toString());
  }
}

export default addPageAction;