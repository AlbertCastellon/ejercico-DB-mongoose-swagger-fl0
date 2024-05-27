const basicInfo = require('./basicInfo');
const components = require('./componentes');
const tasks = require('./task');
module.exports = {
    ...basicInfo,
    ...tasks,
    ...components
};
