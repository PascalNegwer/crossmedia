var donutCharts = (function () {
    function getConfig(isMale) {
        return {
            type: 'pie',
                data: {
            datasets: [{
                backgroundColor: [
                    isMale ? '#1597B2' : '#ffa489',
                    '#515151',
                    '#515151',
                    '#515151',
                    '#515151'
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
            number === 0 ? '#ffa489' : '#515151',
            number === 1 ? '#ffa489' : '#515151',
            number === 2 ? '#ffa489' : '#515151',
            number === 3 ? '#ffa489' : '#515151',
            number === 4 ? '#ffa489' : '#515151'
        ];
        womanPie.update();
    };

    var changeManData = function(number) {
        manPie.data.datasets[0].backgroundColor = [
            number === 0 ? '#1597B2' : '#515151',
            number === 1 ? '#1597B2' : '#515151',
            number === 2 ? '#1597B2' : '#515151',
            number === 3 ? '#1597B2' : '#515151',
            number === 4 ? '#1597B2' : '#515151'
        ];
        manPie.update();
    };

    return {
        changeWomanData: changeWomanData,
        changeManData: changeManData
    };
}());
