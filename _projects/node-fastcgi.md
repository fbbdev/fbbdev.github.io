---
title: node-fastcgi
excerpt: "Create FastCGI applications with node.js"
category: js-libs
ordinal: 100

links:
  - type: package
    url: https://www.npmjs.com/package/node-fastcgi
  - type: docs
    url: https://github.com/fbbdev/node-fastcgi#readme
  - type: github
    url: https://github.com/fbbdev/node-fastcgi

style: |
  h1 {
    overflow-wrap: break-word;
    hyphens: auto;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
  }
---

_node-fastcgi_ is a drop-in replacement for node's http module (server only).
It can be used to build FastCGI applications or to convert existing node
applications to FastCGI.

The implementation is fully compliant with the [FastCGI 1.0 Specification](https://fast-cgi.github.io/spec).

_node-fastcgi_ is distributed under the open source [MIT license](https://github.com/fbbdev/node-fastcgi/blob/master/LICENSE).

## Usage

```javascript

var fcgi = require('node-fastcgi');

fcgi.createServer(function(req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("It's working");
  } else {
    res.writeHead(501);
    res.end();
  }
}).listen();
```
