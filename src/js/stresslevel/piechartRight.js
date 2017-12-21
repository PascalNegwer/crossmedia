var piechartRight = function () {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['invincible2', 1],
            ['Total gestresst',  2],
            ['Etwas gestresst',      2],
            ['Nicht gestresst',     2],
            ['invincible1', 9]
        ]);

        var options = {
            pieHole: 0.7,
            width: 600,
            height: 600,
            pieSliceText: 'none',
            legend: {
                position: 'none'
            },
            slices: {
                0: {
                    color: 'transparent',
                    enableInteractivity: false
                },
                1: {
                    color: '#a90002'
                },
                2: {
                    color: '#b67200'
                },
                3: {
                    color: '#0c8f23'
                },
                4: {
                    color: 'transparent',
                    enableInteractivity: false
                }
            },
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart-stresslevel-right'));
        chart.draw(data, options);
    }
};

piechartRight();