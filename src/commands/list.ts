// list-action
import templateJson from '../config/template-des.json';

function listAction() {
    const table = [];
    Object.keys(templateJson).forEach(key => {
        const template = templateJson[key];
        table.push({
            '模板名称': template.name,
            '模板描述': template.description,
        })
    })
    console.table(table);
}

export default listAction;