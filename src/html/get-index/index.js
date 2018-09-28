let arc = require('@architect/functions')
let tmpl = require('./_tmpl')

function route(req, res) {
  let html = tmpl({})
  res({html})
}

exports.handler = arc.html.get(route)
