---
title: Turing machine analyzer
excerpt: "A visualizer and analyzer of Turing Machines, geared towards teachers and students of computer science"
category: apps
ordinal: 100

links:
  - type: application
    url: https://fbbdev.it/turing/
  - type: docs
    url: https://github.com/fbbdev/turing#readme
  - type: github
    url: https://github.com/fbbdev/turing

thumbnail:
  src: /img/turing/screenshot.png
  alt: A screenshot of the Turing Machine Analyzer
  width: 3072
  height: 1548
---

This is a browser-based application providing a graphical environment in which
one may design, simulate and analyze the structure and behaviour of
[Turing machines](https://en.wikipedia.org/wiki/Turing_machine). A fully
functional build is available [here](https://fbbdev.it/turing/). Useful
information and examples can be found in the
[README](https://github.com/fbbdev/turing#readme) file on GitHub.

<figure>
  <img src="/img/turing/screenshot.png">
  <figcaption>
    A screenshot of the user interface, showing the transition diagram
    of a Turing machine (in the middle), a textual description of the
    transition table (on the right) and the tape with some symbols on it
    (at the bottom).
  </figcaption>
</figure>

The application is currently a work in progress: low-level design, visualization
and simulation features are fully implemented; a high-level design language and
advanced analysis tools are planned. A roadmap is available
[here](https://github.com/fbbdev/turing#roadmap).

[Source code](https://github.com/fbbdev/turing) for the application is
distributed as free software under the [GPL license](https://github.com/fbbdev/turing/blob/main/LICENSE),
version 3 or later.

## Motivation

Teachers and tutors of theoretical computer science courses often face the dual
problem of _(a)_ helping novice students to become acquainted with the somewhat
counterintuitive discipline of Turing machine design and interpretation, and on
the other hand _(b)_ interpreting and assessing their students' output which
— due to the aforementioned lack of intuition — can often get quite convoluted
itself.

This project is an attempt at developing tools that may help solve both sides
of the problem; first, by providing a graphical environment in which the
structure and behavior of machine designs can be visualized and explored
intuitively; second, by providing tools for assisted (and partially automated)
analysis of their behavior in terms of a higher level description language.

It grew out of dissatisfaction with the tools already available on the internet,
which are either too inflexible (i.e. limited in their functionality) or sport
outdated and/or uncomfortable user interfaces.
