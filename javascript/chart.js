
var chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: '#fe6c00',
	yellow: 'rgb(255, 159, 64)',
	green: '#cadb2b',
	blue: '#2faabc',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(231,233,237)'
};

var color = Chart.helpers.color;
var config = {
  type: 'radar',
  data: {
    labels: [
      "Management",
      "Marketing & Sales",
      "HR",
      "Development",
      "Operations",
      "Accounting & Finances"
    ],
    datasets: [{
      label: "Jordan",
      backgroundColor: color(chartColors.orange).alpha(0.2).rgbString(),
      borderColor: chartColors.orange,
      pointBackgroundColor: chartColors.orange,
      data: [
        2,
        2,
        5,
        10,
        2,
        1
      ]
    }, {
      label: "USA",
      backgroundColor: color(chartColors.blue).alpha(0.2).rgbString(),
      borderColor: chartColors.blue,
      pointBackgroundColor: chartColors.blue,
      data: [
        7,
        5,
        1,
        1,
        2,
        5
      ]
    },{
      label: "Turkey",
      backgroundColor: color(chartColors.yellow).alpha(0.2).rgbString(),
      borderColor: chartColors.yellow,
      pointBackgroundColor: chartColors.yellow,
      data: [
        3,
        5,
        2,
        5,
        10,
        4
      ]
    }]
  },
  options: {
    legend: {
      position: 'bottom',
      labels: {
        fontColor: 'white'
      }
    },
    scale: {
      ticks: {
        beginAtZero: true,
        fontColor: '#bdbabb', // labels such as 10, 20, etc
        showLabelBackdrop: false, // hide square behind text
        fontSize: '2' // changes the number of digits on the scale
      },
      pointLabels: {
        fontColor: '#bdbabb', // labels around the edge like 'Running'
        fontSize: '11'
      },
      gridLines: {
        color: 'rgba(255, 255, 255, 0.2)' 
      },
      angleLines: {
        color: '#bdbabb', // lines radiating from the center
      }
    }
  }
};

// A plugin to draw the background color
Chart.plugins.register({
  beforeDraw: function(chartInstance) {
    var ctx = chartInstance.chart.ctx;
    ctx.fillStyle = '#302924';
    ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
  }
})

window.myRadar = new Chart(document.getElementById("canvas"), config);

// Donut chart js

anychart.onDocumentReady(function () {
	      // create data set
      var data = anychart.data.set([
        ['USA', 40],
        ['Turkey', 30],
        ['Jordan', 55],
        ['Egypt', 20]
      ]);

      // create pie chart with passed data
      var chart = anychart.pie(data);

      // set chart background color
      chart.background().fill('#302924');

      // set chart radius
      chart
        .innerRadius('65%')
        // set value for the exploded slices
        .explode(25);

      // create standalone label and set settings
      var label = anychart.standalones.label();
      label
        .enabled(true)
        .text('Total Employees')
        .width('100%')
        .height('100%')
        .adjustFontSize(true, true)
        .minFontSize(10)
        .maxFontSize(25)
        .fontColor('#60727b')
        .position('center')
        .anchor('center')
        .hAlign('center')
        .vAlign('middle');

      // set label to center content of chart
      chart.center().content(label);

      // create range color palette with color ranged
      var palette = anychart.palettes.rangeColors();
      palette.items([{ color: '#fe6c00' }, { color: '#ffc397' }]);
      // set chart palette
      chart.palette(palette);

      // set hovered settings
      chart.hovered().fill('#7587a7');

      // set selected settings
      chart.selected().fill('#2faabc');

      // set hovered outline settings
      chart
        .hovered()
        .outline()
        .fill(function () {
          return anychart.color.lighten('#7587a7', 0.55);
        });

      // set selected outline settings
      chart
        .selected()
        .outline()
        .offset(5)
        .fill(function () {
          return anychart.color.lighten('#2faabc', 0.25);
        });

      // set container id for the chart
      chart.container('container');
      // initiate chart drawing
      chart.draw();
    });
