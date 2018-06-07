const path = require('path')
const urls = require('./urls').default


return (goto, env = {}) => {
  if (goto in urls){
    return new Promise((resolve, reject) => {
      resolve([
        {
          icon: 'fa-book',
          title: 'Goto url',
          subtitle: 'Goto "' + urls[goto] + '"',
          value: urls[goto],
        },
      ]);
    });
  }
};
