const grep = (what, where, callback) => {
  let exec = require('child_process').exec
  exec("grep " + what + " " + where, function(err, stdin, stdout) {
    let results = stdin.split('\n')
    let list = []
    results.pop();
    for (r of results) {
      let l = {
        icon: 'fa-safari',
        title: r,
        value: r
      }
      list.push(l)
    }
    callback(list)
  })
}

module.exports = (pluginContext) => {
  return (search, env = {}) => {
    const cfg = env.cfgPath || '~/.zazu_goto'
    return new Promise((resolve, reject) => {
      grep(search, cfg, (list) => {
        resolve(list)
      })
    })
  }
}
