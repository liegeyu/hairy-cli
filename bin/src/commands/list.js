"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// list-action
const template_des_json_1 = __importDefault(require("../config/template-des.json"));
function listAction() {
    const table = [];
    Object.keys(template_des_json_1.default).forEach(key => {
        const template = template_des_json_1.default[key];
        table.push({
            '模板名称': template.name,
            '模板描述': template.description,
        });
    });
    console.table(table);
}
exports.default = listAction;
