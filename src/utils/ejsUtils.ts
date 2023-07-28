import fs from "fs";
import ejs from "ejs";

/**
 * 渲染 ejs 内容至文件
 * @param {string} ejsContent
 * @param {Record<string, any>} data 
 * @returns {string}
 */
export const renderTemplate = (ejsContent: string, data: ejs.Data): string => {
  const renderContent: string = ejs.render(ejsContent, data);
  return renderContent;
} 