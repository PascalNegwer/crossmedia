var piechart = function () {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawCharts);

    function drawCharts() {
        var leftChart = new google.visualization.PieChart(document.getElementById('piechart-stresslevel-left'));
        leftChart.draw(
            google.visualization.arrayToDataTable([
                ['Label', 'Value'],
                ['invincible1', 9],
                ['Nicht gestresst',     2],
                ['Etwas gestresst',      2],
                ['Total gestresst',  2],
                ['invincible2', 1]
            ]),
            {
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
                }
            }
        );
        google.visualization.events.addListener(leftChart, 'select', function () {
            console.log(leftChart.getSelection());
            rightChart.setSelection([{'row': 2, 'column': null}]);
            console.log(rightChart.getSelection());
        });


        var rightChart = new google.visualization.PieChart(document.getElementById('piechart-stresslevel-right'));

        rightChart.draw(
            google.visualization.arrayToDataTable([
                ['Label', 'Value'],
                ['invincible2', 1],
                ['Total gestresst', 2],
                ['Etwas gestresst', 2],
                ['Nicht gestresst', 2],
                ['invincible1', 9]
            ]),
            {
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
                }
            }
        );


        google.visualization.events.addListener(rightChart, 'select', function () {
            console.log(rightChart.getSelection());
        });
    }
};

//piechart();