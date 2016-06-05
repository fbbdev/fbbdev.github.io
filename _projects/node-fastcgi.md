---
title: node-fastcgi
excerpt: "Create FastCGI applications in node. Near drop-in replacement for node's http module."

links:
    - type: docs
      url: https://github.com/fbbdev/node-fastcgi/blob/master/README.md
    - type: github
      url: https://github.com/fbbdev/node-fastcgi
    - type: package
      url: https://www.npmjs.com/package/node-fastcgi

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

This module is a replacement for node's http module (server only). It can be used to build FastCGI applications or to convert existing node applications to FastCGI.

The implementation is fully compliant with [FastCGI 1.0 Specification](http://www.fastcgi.com/drupal/node/6?q=node/22).

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
