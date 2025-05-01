// select first column of my table
let table = document.getElementById("myTable");
let tables = document.getElementsByTagName("table");
$("table tr td:nth-child(1)").each(function () {
  // add right border to the first column
  $(this).css("border-right", "2px solid #fff");
});
// select all row with class my-th expect last
$("table .my-th th:not(:last)").each(function () {
  // add right border to the first column
  $(this).css("border-right", "2px solid #fff");
});
$("table tr td").each(function () {
  // add bottom border
  $(this).css("border-bottom", "2px solid #fff");
  // add bg color
});

// google chart
google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawChart);
// pie chart
function drawChart() {
	  var data = google.visualization.arrayToDataTable([
	["Branch", "offers"],
	["CSE",82],
	["ECE", 45],
	["ME", 28],
	["MSM", 12],
  ]);

  var options = {
	title: "No. of offers branch-wise",
	  backgroundColor: "transparent",
	  legend: { position: 'none' },
	  animation: {
		startup: true,
		duration: 1500
	  }
  };

  var chart = new google.visualization.ColumnChart(
	document.getElementById("branch-wise")
  );
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawMyChart);
// pie chart
function drawMyChart() {
	  var data = google.visualization.arrayToDataTable([
	["Course", "offers"],
	["B.Tech", 167],
	["M.Tech", 14],
  ]);

  var options = {
	title: "No. of offers batch-wise",
	  backgroundColor: "transparent",
	  legend: { position: 'none' },
	  animation: {
		startup: true,
		duration: 1500
	  }
  };

  var chart = new google.visualization.ColumnChart(
	document.getElementById("degree-wise")
  );
  chart.draw(data, options);
}

// Add new function for placement stats bar chart
google.charts.setOnLoadCallback(drawPlacementStats);
function drawPlacementStats() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Placement Percentage', { role: 'style' }],
    ['2023-2024', 61.13, '#00ffe0'],
    ['2022-2023', 65.5, '#1a237e'],
    ['2021-2022', 97.0, '#00ffe0']
  ]);

  var options = {
    title: 'Yearly Placement Statistics',
    titleTextStyle: {
      color: '#1a237e',
      fontSize: 18,
      bold: true
    },
    backgroundColor: 'transparent',
    legend: { position: 'none' },
    vAxis: {
      title: 'Placement Percentage',
      minValue: 0,
      maxValue: 100,
      format: '#\'%\''
    },
    hAxis: {
      title: 'Academic Year'
    },
    animation: {
      startup: true,
      duration: 1500,
      easing: 'out'
    }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('placement-stats'));
  chart.draw(data, options);
}

// Add window resize handler
window.addEventListener('resize', function() {
  drawPlacementStats();
  drawChart();
  drawMyChart();
});
