"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.touchCommand = exports.mkdirCommand = exports.rmCommand = exports.execCommand = void 0;
// shelljs's util
const shelljs_1 = __importDefault(require("shelljs"));
/**
 * 执行 shell 命令
 * @param {String} command
 * @return {Promise<Stirng>}
 */
const execCommand = (command) => {
    return new Promise((resolve, reject) => {
        shelljs_1.default.exec(command, { silent: true }, (code, stdout, stderr) => {
            if (code === 0) {
                resolve(code);
            }
            else {
                reject(new Error(stderr));
            }
        });
    });
};
exports.execCommand = execCommand;
/**
 * 删除文件或目录方法
 * @param {String} path
 * @returns {Boolean}
 */
const rmCommand = (path) => {
    const res = shelljs_1.default.rm('-rf', path);
    return res.code === 0;
};
exports.rmCommand = rmCommand;
/**
 * 创建文件夹
 * @param {String} path
 * @returns {Boolean}
 */
const mkdirCommand = (dirPath) => {
    const res = shelljs_1.default.mkdir('-p', dirPath);
    return res.code === 0;
};
exports.mkdirCommand = mkdirCommand;
/**
 * 创建文件
 * @param {String} filePath
 * @returns {Boolean}
 */
const touchCommand = (filePath) => {
    const res = shelljs_1.default.touch(filePath);
    return res.code === 0;
};
exports.touchCommand = touchCommand;
