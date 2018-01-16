var donutCharts = (function () {
    function getConfig(isMale) {
        return {
            type: 'pie',
                data: {
            datasets: [{
                backgroundColor: [
                    isMale ? '#081344' : '#560a0a',
                    '#9A9B9F',
                    '#9A9B9F',
                    '#9A9B9F',
                    '#9A9B9F'
                ],
                borderWidth: 1,
                data: [
                    isMale ? 41 : 36,
                    isMale ? 21 : 26,
                    isMale ? 22 : 24,
                    isMale ? 12 : 11,
                    isMale ? 4 : 3
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
                }
            }
        };
    }

    var womanPie = new Chart(document.getElementById('donut-chart-woman'),getConfig(0));
    var manPie = new Chart(document.getElementById('donut-chart-man'),getConfig(1));

    var changeWomanData = function(number) {
        womanPie.data.datasets[0].backgroundColor = [
            number === 0 ? '#560a0a' : '#9A9B9F',
            number === 1 ? '#560a0a' : '#9A9B9F',
            number === 2 ? '#560a0a' : '#9A9B9F',
            number === 3 ? '#560a0a' : '#9A9B9F',
            number === 4 ? '#560a0a' : '#9A9B9F'
        ];
        womanPie.update();
    };

    var changeManData = function(number) {
        manPie.data.datasets[0].backgroundColor = [
            number === 0 ? '#081344' : '#9A9B9F',
            number === 1 ? '#081344' : '#9A9B9F',
            number === 2 ? '#081344' : '#9A9B9F',
            number === 3 ? '#081344' : '#9A9B9F',
            number === 4 ? '#081344' : '#9A9B9F'
        ];
        manPie.update();
    };

    return {
        changeWomanData: changeWomanData,
        changeManData: changeManData
    };
}());
