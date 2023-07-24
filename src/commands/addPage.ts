// addpage-action
import fs from "fs";
import path from "path";
import chalk from "chalk";

import { mkdirCommand, touchCommand } from "../utils/shellUtils.js";

interface OptionsObj {
  vue2: Boolean,
  vue3: Boolean,
  less: Boolean,
  scss: Boolean,
  typescript: Boolean
}

function addPageAction(pagename: String, options: OptionsObj) {
  const { vue2, vue3, typescript, less, scss } = options;
  if ((vue2 && vue3) || (less && scss)) {
    console.error(chalk.red('×'), '所选版本冲突');
  }

  mkdirCommand(`${pagename}`);
  touchCommand(`${pagename}/index.vue`);

  const vueVersion = vue2 ? 'vue2' : 'vue3';
  const templatePath = path.resolve(__dirname + `/templates/${vueVersion}-template.ejs`)
  const template = fs.readFileSync(templatePath, "utf-8");
  console.log(template);

}

export default addPageAction;