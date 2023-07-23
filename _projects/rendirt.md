---
title: rendirt
excerpt: "A C++ library for offline rendering of 3D model thumbnails"
category: cpp-libs
ordinal: 100

links:
    - type: docs
      url: https://github.com/fbbdev/rendirt#readme
    - type: github
      url: https://github.com/fbbdev/rendirt

style: |
  #pictures {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  #pictures figure {
    margin: 0;
    max-width: 292px;
  }
---

**rendirt** is a bare-bones C++ software rendering library for triangle meshes.
The library is able to load STL models both in binary and ASCII format.
In fact, offline rendering of STL model thumbnails is its primary use case.
From this point of view, *rendirt* means *render it*.

**But beware!** *rendirt* also stands for *dirty renderer*. This thing is as
simple as possible, quite inflexible and mostly unoptimized. Clocking in
at ~400 LOCs, it does its (very limited) work in reasonable time and
that's all. This is not meant to be an example of state-of-the-art graphics
programming. Decent speed is only achieved with compiler optimizations enabled.
Still, the debug build manages to render ~400k tris at 800x600 px in less than
1 second and simpler models in less than 100 milliseconds. It becomes about one
order of magnitude faster when compiler-optimized. *(DISCLAIMER: those are not
accurate measures, just average execution times to give an idea)*.

**rendirt** is distributed under the open source MIT license.

# Example pictures

<div id="pictures">
  <figure>
    <img title="Image rendered with the depth shader" src="/img/rendirt/depth.png">
    <figcaption>Depth shader</figcaption>
  </figure>
  <figure>
    <img title="Image rendered with the position shader" src="/img/rendirt/position.png">
    <figcaption>Position shader</figcaption>
  </figure>
  <figure>
    <img title="Image rendered with the normal shader" src="/img/rendirt/normal.png">
    <figcaption>Normal shader</figcaption>
  </figure>
  <figure>
    <img title="Image rendered with the diffuse directional lighting shader" src="/img/rendirt/diffuseDirectional.png">
    <figcaption>Diffuse directional lighting shader</figcaption>
  </figure>
</div>

# Usage

This is the bare minimum to obtain an image. For more details and variations
look into the [examples](https://github.com/fbbdev/rendirt/tree/master/examples)
folder in the repository, or read the [API reference](https://github.com/fbbdev/rendirt/#api-reference).

```c++
namespace rd = rendirt;

std::ifstream file("/path/to/file.stl");
if (!file) {
    // Error handling
}

rd::Model model;
rd::Model::Error err = model.loadSTL(file);
if (err != rd::Model::Ok) {
    // Error handling
}

file.close();

std::vector<rd::Color> colorBuffer(800*600);
std::vector<float> depthBuffer(800*600);
rd::Image<rd::Color> image(colorBuffer.data(), 800, 600);
rd::Image<float> depth(depthBuffer.data(), 800, 600);

image.clear(Color(0, 0, 0, 255));
depth.clear(1.0f); // Important!

rd::Camera view(
    { 0.0f, 0.0f, 5.0f },
    { 0.0f, 0.0f, 0.0f },
    { 0.0f, 1.0f, 0.0f });

rd::Projection proj(
    rd::Projection::Perspective,
    glm::half_pi<float>(),
    width, height,
    0.1f, 100.0f);

size_t faceCount = rd::render(
    image, depth, model, proj * view,
    rd::shaders::position(model.boundingBox()));

// Do something with the image
```
