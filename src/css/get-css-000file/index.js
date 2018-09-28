let arc = require('@architect/functions')
let fs = require('fs')
let allowed = ['reveal.css', 'zenburn.css', 'night.css']

function route(req, res) {
  if (allowed.includes(req.params.file)) {
    let css = fs.readFileSync(`${__dirname}/${req.params.file}`).toString()
    res({css})
  }
  else {
    res({
      status: 404, 
      css: ''
    })
  }
}

exports.handler = arc.css.get(route)
