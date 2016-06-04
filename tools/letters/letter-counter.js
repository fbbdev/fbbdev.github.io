---
---

{% include js/Chart.min.js %}

(function(exports) {
  "use strict";

  var letterCounter = new Worker("letter-counter-worker.js");
  var container, chart, canvas, ctx;
  var data, done = true;

  function displayCount(ev) {
    if (ev.data.msg === "done") {
      window.requestAnimationFrame(function() {
        done = true;

        for (var i = 0; i < data.labels.length; ++i) {
          var letter = data.labels[i], count = ev.data.data[letter];

          data.datasets[0].data.push(Math.round((count / ev.data.count) * 10000)/100);
          document.getElementById('count-' + letter).innerHTML =
            '<b>' + letter + ':</b> ' + count;
        }

        chart = new Chart(ctx).Bar({
          data: data,
          options: {
            barShowStroke: false,

            scales: {
              yAxes: [{
                beginAtZero: true,
                labels: {
                  template: "<%=value%>%"
                }
              }]
            },

            tooltips: {
              multiTemplate: [
                '<%if (datasetLabel){ %>',
                '<%=datasetLabel %>:',
                '<% } %>',
                '<%=value %>%'
              ].join('')
            }
          }
        });
      });

      document.getElementById('spinner').style.display = "none";
    } else {
      window.requestAnimationFrame(function() {
        for (var letter in ev.data.data) {
          var count = ev.data.data[letter];
          var element = document.getElementById('count-' + letter);

          if (!element) {
            var i;

            for (i = 0; i < data.labels.length; ++i) {
              if (data.labels[i] > letter) break;
            }

            element = document.createElement('div');
            element.id = 'count-' + letter;
            container.insertBefore(element, document.getElementById('count-' + data.labels[i]));
            data.labels.splice(i, 0, letter);
          }

          element.innerHTML = "<b>" + letter + ":</b> " + count;
        }
      });
    }
  }

  letterCounter.onmessage = displayCount;

  function resetCounter() {
    if (!done) {
      letterCounter.terminate();
      letterCounter = new Worker("letter-counter-worker.js");
      letterCounter.onmessage = displayCount;
    }

    data = {
      labels: [],
      datasets: [
        {
    			label: "Frequency",

    			backgroundColor: "#000",
    			hoverBackgroundColor: "#777",

    			data: []
    		}
      ]
    };

    chart = null;

    var chartContainer = document.getElementById('chart');

    if (chartContainer.firstChild) {
        chartContainer.removeChild(chartContainer.firstChild);
    }

    canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 350;
    chartContainer.appendChild(canvas);

    ctx = canvas.getContext('2d');

    var divs = container.querySelectorAll('div')
    for (var i = 0; i < divs.length; ++i) {
      container.removeChild(divs[i]);
    }

    done = false;
  }

  document.addEventListener("DOMContentLoaded", function() {
    container = document.getElementById('counts');

    document.getElementById('count-button').addEventListener('click', function() {
      resetCounter();

      var text = document.getElementById('text').value;
      letterCounter.postMessage(text);

      document.getElementById('spinner').style.display = "";
      window.location.href = '#result';
    });
  });
}(window));
