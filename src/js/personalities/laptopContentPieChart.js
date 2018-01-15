function laptopContentPieChart(women, men, tooltipTitle) {
    var ctx = document.getElementById("pieChart");

    var config = {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    women,
                    men
                ],
                backgroundColor: [
                    '#4c1816',
                    '#142241'
                ]
            }],
            labels: [
                "Frauen",
                "Männer"
            ]
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            animation: {
                animateScale: true,
                animateRotate: true,
                onProgress: function () {
                    var chartInstance = this.chart;
                    var ctx = chartInstance.ctx;
                    ctx.textAlign = "center";
                    var meta = chartInstance.controller.getDatasetMeta(0);
                    Chart.helpers.each(meta.data.forEach(function (slice, index) {
                        ctx.fillStyle = '#eeeeeb';
                        ctx.font = "5vmin Quicksand";
                        if (index) {
                            ctx.fillText('\u2642', slice._model.x * 0.5, slice._model.y * 1.5 -10);
                        } else {
                            ctx.fillText("\u2640", slice._model.x * 1.5 - 10, slice._model.y * 0.5 -10);
                        }
                    }),this);
                }
            }
        }
    };

    var myPieChart = new Chart(ctx,config);
}
