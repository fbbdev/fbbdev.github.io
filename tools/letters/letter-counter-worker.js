---
---

{% include js/cset_production.js %}

(function() {
  "use strict";

  var cset = {};
  CSET.import('', cset);
  var letters = new RegExp(cset.toRegex(
    cset.union(
      cset.union(
        cset.fromUnicodeGeneralCategory('Ll'),
        cset.fromUnicodeGeneralCategory('Lu')
      ),
      cset.union(
        cset.fromUnicodeGeneralCategory('Lt'),
        cset.fromUnicodeGeneralCategory('Lo')
      )
    )
  ));

  function sendUpdate(update, count) {
    if (Object.keys(update).length) {
      postMessage({ msg: "update", data: update, count: count });
    }
  }

  onmessage = function(ev) {
    var text = ev.data.normalize('NFKD');
    var map = {};
    var update = {};
    var count = 0;

    for (var i = 0; i < text.length; ++i) {
      var l = text[i].toUpperCase();
      if (l.match(letters)) {
        if (map[l] === undefined) {
          map[l] = 0;
        }

        update[l] = ++map[l];
        ++count;
      }

      if (i % 1000 == 0) {
        sendUpdate(update, count);
        update = {};
      }
    }

    sendUpdate(update, count);
    postMessage({ msg: "done", data: map, count: count });
  };
}());
