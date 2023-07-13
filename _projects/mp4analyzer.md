---
title: mp4analyzer.js
excerpt: "JavaScript MP4/M4A/MOV file parser"
ordinal: 300

links:
    - type: website
      url: https://fbbdev.it/mp4analyzer.js
    - type: github
      url: https://github.com/fbbdev/mp4analyzer.js

style: |
    .article > header {
        -ms-word-break: break-all;
        word-break: break-all;

        word-break: break-word;

        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        hyphens: auto;
    }

    @media (min-width: 321px) and (max-width: 360px) {
        .article > header:first-of-type {
            padding-left: 60px;
            padding-right: 60px;
        }
    }

    @media (max-width: 320px) {
        .article > header:first-of-type {
            padding-left: 40px;
            padding-right: 40px;
        }
    }
---

**mp4analyzer.js** is a tool for parsing mp4/mov files and extracting information.
It uses HTML5 [FileReader](http://developer.mozilla.org/en-US/docs/Web/API/FileReader) and
[DataView](http://developer.mozilla.org/en-US/docs/Web/API/DataView) APIs
to read local files. Currently it only returns the codec of the first
video and audio streams, but it can be extended to extract anything
contained in mp4 atoms.

You can find a demo and detailed documentation on [the project's website]({% for link in page.links %}{% if link.type == 'website' %}{{ link.url }}{% break %}{% endif %}{% endfor %}).

mp4analyzer.js is distributed under the open source MIT license.
