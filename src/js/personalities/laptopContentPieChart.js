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
                    '#F2A68C',
                    '#48A3BB'
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
                animateRotate: true
            },
            tooltips: {
                bodyFontSize: 14,
                callbacks: {
                    label: function(tooltipItem, data) {
                        //get the concerned dataset
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        //calculate the total of this data set
                        var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                            return previousValue + currentValue;
                        });
                        //get the current items value
                        var currentValue = dataset.data[tooltipItem.index];
                        //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
                        var precentage = Math.floor(((currentValue/total) * 100)+0.5);

                        return ' ' + precentage + ' % ' + tooltipTitle + ' sind ' + (parseInt(tooltipItem.index) ? 'Männer' : 'Frauen');
                    }
                }
            }
        }
    };

    var myPieChart = new Chart(ctx,config);
}
