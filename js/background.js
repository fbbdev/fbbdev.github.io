(function(exports) {
  exports.drawBackground = function(bg, width, height) {
    if (height === undefined) {
      height = width;
    }

    var cw = 40, ch = 40,
        w = Math.ceil(width / cw),
        h = Math.ceil(height / ch);

    for (var y = 0; y < h; ++y) {
      for (var x = 0; x < w; ++x) {
        var n1 = noise.simplex2(x, y), n2 = noise.simplex2(y, x);

        bg.polygon('0,0 ' + cw + ',0 0,' + ch)
          .move(x*cw + n1*0.5, y*ch + n2*0.5)
          .rotate(Math.floor(n1*4)*90)
          .fill({ color: '#fff', opacity: (n2 + 1) / 8 });
      }
    }
  };
}(window));
