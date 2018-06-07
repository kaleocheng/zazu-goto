const path = require('path')
const urls = require('./urls')
module.exports = (pluginContext) => {
  return (search, env = {}) => {
    return new Promise((resolve, reject) => {
      resolve([
        {
          icon: 'fa-book',
          title: 'Open url',
          subtitle: '"' + urls[search] + '"',
          value: urls[search],
        },
      ]);
    });
  };
};
