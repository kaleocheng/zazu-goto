const fs = require('fs')
const data = JSON.parse(fs.readFileSync('/tmp/zazu-goto-data', 'utf8'))

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
        value: data[r]
      }
      list.push(l)
    }
    callback(list)
  })
}

module.exports = (pluginContext) => {
  return (search, env = {}) => {
    const cfg = env.cfgPath || '/tmp/zazu-goto-index'
    return new Promise((resolve, reject) => {
      grep(search, cfg, (list) => {
        resolve(list)
      })
    })
  }
}
