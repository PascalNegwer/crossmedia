var piechartLeft = function () {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['invincible1', 9],
            ['Nicht gestresst',     2],
            ['Etwas gestresst',      2],
            ['Total gestresst',  2],
            ['invincible2', 1]
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
                    color: '#0c8f23'
                },
                2: {
                    color: '#b67200'
                },
                3: {
                    color: '#a90002'
                },
                4: {
                    color: 'transparent',
                    enableInteractivity: false
                }
            },
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart-stresslevel-left'));
        chart.draw(data, options);
    }
};

piechartLeft();