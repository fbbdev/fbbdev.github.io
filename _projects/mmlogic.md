---
title: MultiMedia Logic
excerpt: "A refreshed fork of the historic educational application by George Mills of Softronics"
category: apps
ordinal: 300

links:
  - type: docs
    url: https://www.softronix.com/mmlogic-downloads
  - type: github
    url: https://github.com/fbbdev/mmlogic

thumbnail:
  src: /img/mmlogic/logicex2.png
  alt: A screenshot of the MultiMedia Logic application window
  width: 639
  height: 600
---

MultiMedia Logic is a logic circuit designer and simulator. It was created many years ago
(originally on *Windows 95!*) for educational purposes, that is, teaching digital logic
and the fundamentals of computer engineering, but it is a sophisticated piece of software
allowing for the design and simulation of very complex devices.

It is a cherished part of my childhood and I am enormously grateful to George Mills of
[Softronics](https://www.softronix.com/) (author of the much more famous
[MSW Logo](https://www.softronix.com/logo_downloads/)) for creating it and making it
available online. I spent countless hours with this application, learning and building
things. Judging from the many contraptions and tutorials available on the web, I am not alone.

<figure>
  <img src="/img/mmlogic/logicex2.png">
  <figcaption>
    A screenshot of the user interface, showing a digital logic implementation of a simple
    slot machine.
  </figcaption>
</figure>

## Changes

The original code is not maintained anymore. I forked it in 2018, refreshed the code and
added some devices and quality-of-life improvements.

  - **Refresh:** the source now builds on modern versions of Windows and Visual Studio (2015
  or later editions).
  - **Code cleanup:** I changed some bad or deprecated constructs, fixed most warnings,
  removed outdated assembly code.
  - **Device cleanup:** I removed the CPU I/O devices, as modern versions of Windows do not
  allow direct access to CPU I/O ports.
  - **Shared memory mode:** memory blocks referring to the same file can optionally share
  their run-time storage. Writes on one block will then be visible from the others.
  This is useful when different pages in a project need access to the same memory space.
  - **Multi-bit signals:** signal senders and receivers can be configured to be 1-, 2-, 4-,
  or 8-bits wide. Wiring a large bus between different pages is now easier.
  - **Ring and twisted-ring counter:** counter devices can be configured to work in ring
  and twisted-ring (a.k.a. Johnson counter) modes. This can simplify the circuit for some
  state machines.
