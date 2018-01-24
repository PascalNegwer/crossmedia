function lineChart() {
    var barChartData = {
        labels: ['< 1', '1 - 3', '4 - 10', '11 - 20', '20 +'],
        datasets: [{
            backgroundColor: '#9A9B9F',
            hoverBackgroundColor: '#0A7D7B',
            borderWidth: 1,
            data: [
                40,
                22,
                22,
                12,
                4
            ]
        }]

    };

    var ctx = document.getElementById('line-chart');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            scaleFontStyle: 'normal',
            responsive: true,
            tooltips: {
                enabled: false
            },
            layout: {
                padding: {
                    left: 0,
                    right: 50,
                    top: 100,
                    bottom: 0
                }
            },
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        display: true,
                        fontSize: '18',
                        fontColor: '#eeeeeb'
                    },
                    gridLines: {
                        lineWidth: 3,
                        display: false,
                        color: '#505154'
                    },
                    scaleLabel: {
                        fontColor: '#eeeeeb',
                        fontWeight: 200,
                        fontSize: '20',
                        display: true,
                        labelString: 'Berufserfahrung in Jahren'
                    },
                    scaleFontStyle: 'normal'
                }],
                yAxes: [{
                    display: false
                }]
            },
            animation: {
                onProgress: function () {
                    var chartInstance = this.chart;
                    var ctx = chartInstance.ctx;
                    ctx.textAlign = "center";
                    Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        Chart.helpers.each(meta.data.forEach(function (bar, index) {
                            bar._model.backgroundColor = bar._hover ? '#0A7D7B' : (bar._active ? '#0A7D7B' : '#9A9B9F');
                            ctx.fillStyle = '#eeeeeb';
                            ctx.font = "2.8vmin Quicksand";
                            ctx.fillText(dataset.data[index] + ' \uFE6A  ', bar._model.x, (chartInstance.height + bar._model.y) * 0.5 - 20);
                        }),this);
                    }),this);
                }
            },
            onClick: function (ev) {
                var chartInstance = this.chart;
                var point = this.getElementAtEvent(ev);
                var womansPercentage = 0;
                var malePercentage = 0;
                var text;
                var caseNumber;

                var meta = chartInstance.controller.getDatasetMeta(0);
                meta.data.forEach(function (bar, index) {
                    bar._active = (point[0]._index === index);
                });

                chartInstance.update();

                switch (point[0]._index) {
                    case 0:
                        caseNumber = 0;
                        womansPercentage = 36;
                        malePercentage = 41;
                        text = 'bis zu einem Jahr';
                        break;
                    case 1:
                        caseNumber = 1;
                        womansPercentage = 26;
                        malePercentage = 21;
                        text = 'zwischen einem und drei Jahren';
                        break;
                    case 2:
                        caseNumber = 2;
                        womansPercentage = 24;
                        malePercentage = 22;
                        text = 'zwischen vier und zehn Jahren';
                        break;
                    case 3:
                        caseNumber = 3;
                        womansPercentage = 11;
                        malePercentage = 12;
                        text = 'zwischen elf und zwanzig Jahren';
                        break;
                    case 4:
                        caseNumber = 4;
                        womansPercentage = 3;
                        malePercentage = 4;
                        text = 'mehr als zwanzig Jahre';
                        break;
                }
                donutCharts.changeWomanData(caseNumber);
                donutCharts.changeManData(caseNumber);
                countUp(document.getElementById('woman-percentage'), womansPercentage);
                countUp(document.getElementById('male-percentage'), malePercentage);
                var elements = document.getElementsByClassName('workexperience-years');

                [].forEach.call(elements, function (element) {
                    element.innerText = text;
                });
            },
            hover: {
                onHover: function(e) {
                    var chartInstance = this.chart;
                    var point = this.getElementAtEvent(e);
                    var meta = chartInstance.controller.getDatasetMeta(0);
                    if (point.length) {
                        meta.data.forEach(function (bar, index) {
                            bar._hover = (point[0]._index === index);
                        });
                        e.target.style.cursor = 'pointer';
                    } else {
                        e.target.style.cursor = 'default';
                        meta.data.forEach(function (bar) {
                            bar._hover = false;
                        });
                    }
                }
            }
        }
    });

    var meta = chart.controller.getDatasetMeta(0);
    meta.data.forEach(function (bar, index) {
        bar._active = (0 === index);
    });

    chart.update();

}

lineChart();