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
                    '#560a0a',
                    '#081344'
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
            }
        }
    };

    var myPieChart = new Chart(ctx,config);
}
