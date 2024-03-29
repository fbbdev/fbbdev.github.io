---
title: mp4analyzer.js
excerpt: "JavaScript MP4/M4A/MOV file parser"
category: js-libs
ordinal: 200

links:
  - type: website
    url: https://fbbdev.it/mp4analyzer.js
  - type: github
    url: https://github.com/fbbdev/mp4analyzer.js

style: |
  h1 {
    overflow-wrap: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
  }
---

_mp4analyzer.js_ is a browser library for parsing mp4/mov files and extracting information.
It uses the HTML5 [FileReader](http://developer.mozilla.org/en-US/docs/Web/API/FileReader)
and [DataView](http://developer.mozilla.org/en-US/docs/Web/API/DataView) APIs to read
local files. Currently it only returns the codec of the first video and audio streams,
but it can be extended to extract anything contained in mp4 atoms.

It was originally developed to validate user provided video files on the client before
performing a costly upload operation.

You can find a demo and detailed documentation on [the project's website]({% for link in page.links %}{% if link.type == 'website' %}{{ link.url }}{% break %}{% endif %}{% endfor %}).

_mp4analyzer.js_ is distributed under the open source [MIT license](https://github.com/fbbdev/mp4analyzer.js/blob/master/LICENSE).
