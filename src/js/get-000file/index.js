let arc = require('@architect/functions')
let fs = require('fs')
let allowed = ['head.js', 'reveal.js', 'highlight.js']

function route(req, res) {
  if (allowed.includes(req.params.file)) {
    let js = fs.readFileSync(`${__dirname}/clientside/${req.params.file}`).toString()
    res({js})
  }
  else {
    res({
      status: 404,
      js: `console.log("failed to load ${req.params.file}")`,
    })
  }
}

exports.handler = arc.js.get(route)
