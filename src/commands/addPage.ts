// addpage-action
import chalk from "chalk";

import { mkdirCommand, touchCommand } from "../utils/shellUtils";

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


  console.log('添加页面:', pagename);
  console.log('选项:', options);
  console.log('- Vue 3:', vue3);
  console.log('- Vue 3:', vue2);
  console.log('- TypeScript:', typescript);
  console.log('- Less:', less);
  console.log('- Less:', scss);
}

export default addPageAction;