// shelljs's util
import shell from "shelljs";
import chalk from "chalk";
import fs from "fs";

/**
 * 执行 shell 命令
 * @param {String} command
 * @return {Promise<Stirng>}
 */
export const execCommand = (command: String): Promise<String | Number> => {
  return new Promise((resolve, reject) => {
    shell.exec(
      command,
      { silent: true },
      (code, stdout, stderr) => {
        if (code === 0) {
          resolve(code);
        } else {
          reject(new Error(stderr));
        }
    })
  })
}

/**
 * 删除文件或目录方法
 * @param {String} path 
 * @returns {Boolean}
 */
export const rmCommand = (path: String): Boolean => {
  const res = shell.rm('-rf', path);
  return res.code === 0;
}

/**
 * 创建文件夹
 * @param {fs.PathLike} path 
 * @returns {Boolean}
 */
export const mkdirCommand = (dirPath: fs.PathLike): Boolean => {
  if (fs.existsSync(dirPath)) {
    throw new Error("已存在该文件夹")
  }
  const res = shell.mkdir('-p', dirPath);
  return res.code === 0;
}

/**
 * 创建文件
 * @param {fs.PathLike} filePath 
 * @returns {Boolean}
 */
export const touchCommand = (filePath: fs.PathLike): Boolean => {
  if (fs.existsSync(filePath)) {
    throw new Error("已存在文件, 快去工作区看看吧");
  }
  const res = shell.touch(filePath);
  return res.code === 0;
}