---
title: plot
excerpt: "Header-only terminal plotting library for C++14 and later"
category: cpp-libs
ordinal: 200

links:
    - type: docs
      url: https://github.com/fbbdev/plot#readme
    - type: github
      url: https://github.com/fbbdev/plot

style: |
  #video {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }

  #video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
---

_plot_ is a header-only terminal plotting library for C++14 and later. It is
based on the same idea as the awesome [Drawille](https://github.com/asciimoo/drawille)
and [UnicodePlots.jl](https://github.com/JuliaPlots/UnicodePlots.jl) libraries:
using Unicode Braille characters to display complex graphics in any terminal.

This project is a work in progress. The architecture comprises a generic canvas
API supporting the most common vector graphics commands (already implemented),
and a planned plotting API for building complex visualizations. The canvas
implementation tries to make clever use of true color, where available, to
reduce artifacts due to the inherent limitations of the output method.

The original use case was to provide quick and easy visual output for data
processing software written in C++. The library enjoyed some success on GitHub,
but ultimately the development stalled as I could not come up with an ergonomic
plotting API design. Moreover, at the moment C++ is quite marginal as a
language for data processing, and support for Braille characters in terminal
fonts is generally spotty and unreliable.

_plot_ is distributed under the open source [MIT license](https://github.com/fbbdev/plot/blob/master/LICENSE).

## Demo

Here is a youtube video demonstrating the capabilities of this library. For code
examples visit [the repository](https://github.com/fbbdev/plot/tree/master/examples)
on GitHub.

<figure id="video">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/7WG6xP5MIe4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</figure>
