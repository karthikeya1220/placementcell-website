google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data1 = google.visualization.arrayToDataTable([
        ['year','B.Tech', 'Dual', 'Masters', 'Doctoral', { role: 'annotation' } ],
        // ['2008-2009', 58, 0, 0, 0, ''],
        // ['2009-2010', 58, 0, 0, 3, ''],
        // ['2010-2011', 58, 0, 17, 4, ''],
        // ['2011-2012', 82, 0, 16, 4, ''],
        // ['2012-2013', 58, 0, 32, 4, ''],
        // ['2013-2014', 105, 0, 50, 10, ''],
        // ['2014-2015', 115, 119, 42, 8, ''],
        ['2015-2016', 119, 117, 25, 3, ''],
        ['2016-2017', 150, 101, 38, 14, ''],
        ['2017-2018', 154, 121, 50, 15, ''],
        ['2018-2019', 240, 174, 51, 33, ''],    
    ]);
    var view1 = new google.visualization.DataView(data1);

    var options1 = {
        width: document.body.clientWidth/1.2,
        height: document.documentElement.clientHeight/1.8,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '40%' },
        isStacked: true,
		hAxis: {title: 'Year-Wise Total Students'},
		vAxis: {title: 'Number of Students'}
    };

    var chart1 = new google.visualization.ColumnChart(document.getElementById("chart1"));
    chart1.draw(view1, options1);
}
// ///////////////////////////////////////////
google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);
function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
        ['State', '# Students'],
        ['Andaman and Nicobar Islands', 0],
        ['Andhra Pradesh', 407],
        ['Arunachal Pradesh', 0],
        ['Assam', 0],
        ['Bihar', 13],
        ['Chandigarh', 0],
        ['Chhattisgarh', 5],
        ['Dadra and Nagar Haveli', 0],
        ['Daman and Diu', 0],
        ['Delhi', 3],
        ['Goa', 0],
        ['Gujarat', 1],
        ['Haryana', 0],
        ['Himachal Pradesh', 0],
        ['Jammu and Kashmir', 0],
        ['Jharkhand', 3],
        ['Karnataka', 14],
        ['Kerala', 28],
        ['Lakshadweep', 0],
        ['Madhya Pradesh', 11],
        ['Maharashtra', 27],
        ['Manipur', 0],
        ['Meghalaya', 0],
        ['Mizoram', 0],
        ['Nagaland', 0],
        ['Orissa', 10],
        ['Puducherry', 1],
        ['Punjab', 0],
        ['Rajasthan', 14],
        ['Sikkim', 0],
        ['Tamil Nadu', 148],
        ['IN-TG', 52],//telangana
        ['Tripura', 0],
        ['Uttar Pradesh', 20],
        ['IN-UT', 0],//uttarakhand
        ['West Bengal', 1],
    ]);
    
    var opts = {
        width: document.body.clientWidth/1.2,
        height: document.documentElement.clientHeight/1.8,
        region: 'IN',
        domain: 'IN',
        displayMode: 'regions',
        resolution: 'provinces',
        geochartVersion : 10,
        datalessRegionColor: '#ededed',
        backgroundColor: {fill: '#ededed'},
        // width: 640,
        // backgroundColor: 'red',
        // legend:{textStyle: {color: 'blue', fontSize: 16}},
        colorAxis: {minValue: 0,  colors: ['#FFFFFF', '#00AEFF']},
        height: 480
    };
    var geochart = new google.visualization.GeoChart(
        document.getElementById('visualization'));
        geochart.draw(data, opts);
};
