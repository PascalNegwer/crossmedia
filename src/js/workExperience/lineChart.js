function lineChart() {
    var barChartData = {
        labels: ['< 1', '1 - 3', '4 - 10', '11 - 20', '20 +'],
        datasets: [{
            //label: 'Dataset 1',
            backgroundColor: '#1597B2',
            hoverBackgroundColor: "#ffa489",
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
                        fontColor: '#FFFFFF'
                    },
                    gridLines: {
                        lineWidth: 3,
                        display: false,
                        color: '#FFFFFF'
                    },
                    scaleLabel: {
                        fontColor: '#FFFFFF',
                        fontSize: '15',
                        display: true,
                        labelString: 'Berufserfahrung in Jahren'
                    }
                }],
                yAxes: [{
                    display: true,
                    ticks: {
                        fontColor: '#FFFFFF'
                    },
                    gridLines: {
                        lineWidth: 3,
                        display: false,
                        color: '#FFFFFF'
                    }
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
                            ctx.fillText(dataset.data[index] + ' %', bar._model.x, (chartInstance.height + bar._model.y) * 0.5 - 20);
                        }),this);
                    }),this);
                }
            },
            onClick: function (ev) {
                var point = this.getElementAtEvent(ev);
                var womansPercentage = 0;
                var malePercentage = 0;
                var text;
                switch (point[0]._index) {
                    case 0:
                        womansPercentage = 36;
                        malePercentage = 41;
                        text = 'bis zu einem Jahr';
                        break;
                    case 1:
                        womansPercentage = 26;
                        malePercentage = 21;
                        text = 'zwischen einem und drei Jahren';
                        break;
                    case 2:
                        womansPercentage = 24;
                        malePercentage = 22;
                        text = 'zwischen vier und zehn Jahren';
                        break;
                    case 3:
                        womansPercentage = 11;
                        malePercentage = 12;
                        text = 'zwischen elf und zwanzig Jahren';
                        break;
                    case 4:
                        womansPercentage = 3;
                        malePercentage = 4;
                        text = 'mehr als zwanzig Jahre';
                        break;
                }
                donutCharts.changeWomanData(womansPercentage);
                donutCharts.changeManData(malePercentage);
                countUp(document.getElementById('woman-percentage'), womansPercentage);
                countUp(document.getElementById('male-percentage'), malePercentage);
                var elements = document.getElementsByClassName('workexperience-years');

                [].forEach.call(elements, function (element) {
                    console.log(element);
                    element.innerText = text;
                });
            },
            hover: {
                onHover: function(e) {
                    var point = this.getElementAtEvent(e);
                    if (point.length) {
                        e.target.style.cursor = 'pointer';
                    } else {
                        e.target.style.cursor = 'default';
                    }
                }
            }
        }
    });

}

lineChart();