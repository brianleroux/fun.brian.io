let local = process.env.NODE_ENV === 'testing'

let localCSS = `
<link rel="stylesheet" href=/css/reveal.css>
<link rel="stylesheet" href=/css/night.css>
<link rel="stylesheet" href=/css/zenburn.css>
`

let remoteCSS = `
<link rel="stylesheet" href=https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/css/reveal.css>
<link rel="stylesheet" href=https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/css/theme/night.min.css>
<link rel="stylesheet" href=https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/lib/css/zenburn.css>
`

let localJS = `
<script src=/head.js></script>
<script src=/reveal.js></script>
<script>
Reveal.initialize({
  history: true,
  dependencies: [{
    src: '/highlight.js',
    async: true,
    callback: function() { hljs.initHighlightingOnLoad() }
  }]
})
</script>
`

let remoteJS = `
<script src=https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/lib/js/head.min.js></script>
<script src=https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/js/reveal.js></script>
<script>
Reveal.initialize({
  history: true,
  dependencies: [{
    src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/plugin/highlight/highlight.js',
    async: true,
    callback: function() { hljs.initHighlightingOnLoad() }
  }]
})
</script>
`

let css = local? localCSS : remoteCSS
let js = local? localJS : remoteJS

module.exports = function tmpl(params) {
  return `<html>
<head>
${css}
</head>
<body>
<div class=reveal>
<div class=slides>
<!-- START -->

<style>
li {list-style:none;}
</style>




<!--

In this talk we’ll start small by setting up a few functions. \

create an app
setup dns


- get /
- get /login
- github oauth token
- post /posts
- get /css/:file
- get /js/:file
- post /api/posts


We’ll build on that foundation with more and more functions, provisioning, deploying and iterating as we go.

takeways
    How to think in Primitives instead of Frameworks and focusing on in your unique app architecture instead of wrangling confusing infra
    How to reuse logic between many small functions; master function versioning and learn how to avoid dependency related pitfalls
    Finding natural points to break up an app into smaller functions; create and deploy app wide iterations faster
    Iterate even more rapidly with surgical deployments; make debugging and refactoring a snap

How to think in Primitives instead of Frameworks and focusing on in your unique app architecture instead of wrangling confusing infra

Finding natural points to break up an app into smaller functions; create and deploy app wide iterations faster

Iterate even more rapidly with surgical deployments; make debugging and refactoring a snap
Show running locally



Mention begin.com (adds CI and NO NEED TO HAVE AN AWS ACCOUNT)



Functions based apps are
- more resilient,
- easier to setup,
- they cost less
- enable faster deployments (resolve bugs faster and add new features with grace and speed)

using the AWS Lambda family of serverless services.
-->






<section>
  <h1>Functions</h1>
  <h2>Faster to Deploy 🚀</h2>
</section>

<section>
  <h2><a href=https://twitter.com/brianleroux>@brianleroux</a></h2>
  <h3>Webmaster, <a href=https//begin.com>begin.com</a></h3>
</section>

<section>
  <li class=fragment>wtfjs.com</li>
  <li class=fragment>Adobe PhoneGap</li>
  <li class=fragment>Apache Cordova</li>
</section>

<section><h1>Functions</h1><i>Time to get stoked.</i></section>

<section>
  <b>Functions</b> are the 🔑 to a pure cloud native serverless architecture
</section>
<section>
  Functions are the unit of deployment <h1>not the entire app</h1>
</section>
<section>
  Running containers negates the benefits of <h1>"cloud native"</h1> functions like AWS Lambda or Azure Functions.
</section>
<section>
🤦‍♀️  Almost as bad is putting your entire app in a single function. Downsides of a monolithic app plus ever increasing coldstart penalty.
</section>

<section>
<b>Functions as a Service</b> has nice characteristics
</section>

<section>
Only paying for what you use (100% utilization)
</section>
<section>
Uptime is a liability!
</section>
<section>
Focusing on business logic instead of managing infra
</section>
<section>
Better lead times to production!
</section>
<section>
Better security model
</section>
<section>
No ports to scan!
</section>
<section>
<h3>FaaS is best in class of serverless!</h3>
<ul style=text-align:left>
<li class=fragment>💰 Fixed costs
<li class=fragment>🎢 Faster iterations
<li class=fragment>🔒 Better security
</ul>
</section>

<section>
<h3>Major 🔑</h3> 
<h1>functions are faster to deploy!</h3>
</section>

<section>
<h1><a href=https://arc.codes>arc.codes</a></h1>
🔥 🔥🔥 🔥🔥🔥 🔥🔥🔥 🔥🔥 
</section>

<section>
<h3>What <a href=https://arc.codes>arc.codes</a> is</h3>
<ul style=text-align:left>
<li class=fragment>🔮 cloud functions based and Lambda is first class
<li class=fragment>🍨 vanilla node (run apps as a plain http server)
<li class=fragment>🐙 monorepo of independant functions
<li class=fragment>🌈 open governance AND open source
</ul>
</section>

<section>
<h3>What <a href=https://arc.codes>arc.codes</a> is NOT</h3>
<ul style=text-align:left>
<li class=fragment>📟 docker, k8sr, vms or ANY server metaphors
<li class=fragment>🔮 multicloud (but it is vendor neutral)
<li class=fragment>🍗 legacy systems "lift and shift"
</ul>
</section>

<section>
So why is a bunch of little functions a BFD?
</section>
<section>
Deploying a single function usually completes within a couple of seconds.
</section>
<section>
Deploy one or deploy all <i>in parallel</i>.
</section>
<section>
This is an order of magnitude improvement in most development workflow lead times to staging and/or production environments.
</section>
<section>
  <h1>Speed.</h1>
  <li class=fragment>Authortime is faster
  <li class=fragment>Runtime smaller due to less deps
  <li class=fragment>Bug resolution easier
</section>
<section>
  <h3>Faster...reading, writing, running and fixing code! 🙇🏽‍♂️</h3>
  <small>Seems worth exploring.</small>
</section>
<section>How tho?</section>
<section><h1>DEMO TIME NAO</h1></section>












<section>
  <h1>⚠️ Caution</h1>
<li>This story is still early
<li>Incremental adoption and <b>participation</b>
</section>




<section>
  <h3>Solve with patience. </h3>
  <small>Multicloud functions will happen. But they have not happened yet.</small>
</section>
<section>
  <h1>Choose fast by default.</h1>
  <small>Less code is faster on all dimensions: reading, writing, and running.</small>
</section>
<section>
  <h3>Lets be excellent to eachother.</h3>
  <small>No more code shaming! There is no singular "right" way.</small>
</section>


<section>
  <h3>Get Involved</h3>
  <ul style=text-align:left>
  <li class=fragment>🐞 Bug reports are APPRECIATED
  <li class=fragment>🦋 Feature requests are APPRECIATED
  <li class=fragment>🎙 Share what you learn on Twitter or blogs
  </ul>
</section>


<section>
  <h3>thx eh!</h3>
  <ul style=text-align:left>
  <li>🌟 Star <a href=https://github.com/arc-repos/arc-workflows>github.com/arc-repos/arc-workflows</a>
  <li>✨ Try it out: quickstart on <a href=https://arc.codes>arc.codes</a>
  <li>🎉 Sign up for <a href=https://begin.com>the begin.com</a> beta
  </ul>
</section>
<!-- END -->
${js}
</div>
</div>
</body>
</html>
`
}
