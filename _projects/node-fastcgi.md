---
title: node-fastcgi
excerpt: "Create FastCGI applications with node.js"

links:
    - type: package
      url: https://www.npmjs.com/package/node-fastcgi
    - type: docs
      url: https://github.com/fbbdev/node-fastcgi/blob/master/README.md
    - type: github
      url: https://github.com/fbbdev/node-fastcgi

style: |
    .article > header {
        -ms-word-break: break-all;
        word-break: break-all;

        word-break: break-word;

        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        hyphens: auto;
    }
---

**node-fastcgi** is a drop-in replacement for node's http module (server only). It can be used to build FastCGI applications or to convert existing node applications to FastCGI.

The implementation is fully compliant with the [FastCGI 1.0 Specification](https://fast-cgi.github.io/spec).

Example
-------

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
