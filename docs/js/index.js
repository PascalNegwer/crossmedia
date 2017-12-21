var fullpage = function () {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#main-nav',
        //lockAnchors: false,
        anchors:['home', 'facts', 'personalities', 'workExperience', 'stress', 'ending', 'imprint'],
        //navigation: false,
        //navigationPosition: 'none',
        //navigationTooltips: [],
        //showActiveTooltip: false,
        //slidesNavigation: false,
        //slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: false,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        //interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        //normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: 'top',

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#7b7b7b'],
        paddingTop: '5em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
};

fullpage();
var lineChart = function () {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
};

lineChart();
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
var piechartRight = function () {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['invincible2', 1],
            ['Total gestresst',  2],
            ['Etwas gestresst',      2],
            ['Nicht gestresst',     2],
            ['invincible1', 9]
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
            },
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart-stresslevel-right'));
        chart.draw(data, options);
    }
};

piechartRight();