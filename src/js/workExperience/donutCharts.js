var donutCharts = (function () {
    function getConfig(isMale) {
        return {
            type: 'pie',
                data: {
            datasets: [{
                backgroundColor: [
                    isMale ? '#1597B2' : '#FF8E73',
                    '#c7c7c7'
                ],
                borderWidth: 1,
                data: [
                    0,
                    100
                ]
            }]
        },
            options: {
                cutoutPercentage: 50,
                tooltips: {
                    enabled: false
                },
                legend: {
                    display: false
                },
            }
        };
    }

    var womanPie = new Chart(document.getElementById('donut-chart-woman'),getConfig(0));
    var manPie = new Chart(document.getElementById('donut-chart-man'),getConfig(1));

    var changeWomanData = function(number) {
        womanPie.data.datasets[0].data = [
            number,
            100 - number
        ];
        womanPie.update();
    };

    var changeManData = function(number) {
        manPie.data.datasets[0].data = [
            number,
            100 - number
        ];
        manPie.update();
    };

    return {
        changeWomanData: changeWomanData,
        changeManData: changeManData
    };
}());
