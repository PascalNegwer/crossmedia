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
        //sectionsColor : ['#7b7b7b'],
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
var hoverEvents = function () {
    var svgWomanIsLoaded = false;
    var svgWoman = document.getElementById('svg-stresslevel-woman');
    var svgWomanDoc;

    var svgManIsLoaded = false;
    var svgMan = document.getElementById('svg-stresslevel-man');
    var svgManDoc;

    var allSvgLoadedEvent = new Event('allSvgLoaded');

    document.addEventListener('allSvgLoaded', function () {
        svgWomanDoc.getElementById('woman-stressed-heavy').addEventListener('click', function (ev) { animateHeavy(); });
        svgWomanDoc.getElementById('woman-stressed-medium').addEventListener('click', function (ev) { animateMedium(); });
        svgWomanDoc.getElementById('woman-stressed-light').addEventListener('click', function (ev) { animateLight(); });
        svgManDoc.getElementById('man-stressed-heavy').addEventListener('click', function (ev) { animateHeavy(); });
        svgManDoc.getElementById('man-stressed-medium').addEventListener('click', function (ev) { animateMedium(); });
        svgManDoc.getElementById('man-stressed-light').addEventListener('click', function (ev) { animateLight(); });
    }, false);

    svgWoman.addEventListener("load",function() {
        svgWomanIsLoaded = true;
        svgWomanDoc = svgWoman.contentDocument;
        if (svgWomanIsLoaded && svgManIsLoaded) {
            document.dispatchEvent(allSvgLoadedEvent);
        }
    }, false);

    svgMan.addEventListener("load",function() {
        svgManIsLoaded = true;
        svgManDoc = svgMan.contentDocument;
        if (svgWomanIsLoaded && svgManIsLoaded) {
            document.dispatchEvent(allSvgLoadedEvent);
        }
    }, false);

    function animateHeavy() {
        setAllFieldsInactive();
        addActive('man-stressed-heavy', 'woman-stressed-heavy');
        countUp(svgWomanDoc.getElementById('text'), 2);
        countUp(svgManDoc.getElementById('text'), 22);
    }

    function animateMedium() {
        setAllFieldsInactive();
        addActive('man-stressed-medium', 'woman-stressed-medium');
        countUp(svgWomanDoc.getElementById('text'), 50);
        countUp(svgManDoc.getElementById('text'), 33);
    }

    function animateLight() {
        setAllFieldsInactive();
        addActive('man-stressed-light', 'woman-stressed-light');
        countUp(svgWomanDoc.getElementById('text'), 44);
        countUp(svgManDoc.getElementById('text'), 7);
    }

    function addActive(manFieldName, womanFieldName) {
        svgWomanDoc.getElementById(womanFieldName).classList.add('active');
        svgManDoc.getElementById(manFieldName).classList.add('active');
    }

    function setAllFieldsInactive() {
        svgWomanDoc.getElementById('woman-stressed-heavy').classList.remove('active');
        svgWomanDoc.getElementById('woman-stressed-medium').classList.remove('active');
        svgWomanDoc.getElementById('woman-stressed-light').classList.remove('active');
        svgManDoc.getElementById('man-stressed-heavy').classList.remove('active');
        svgManDoc.getElementById('man-stressed-medium').classList.remove('active');
        svgManDoc.getElementById('man-stressed-light').classList.remove('active');
    }

    function countUp(element, to) {
        var options = {
            useEasing: true
        };
        var counter = new CountUp(element, element.innerHTML, to, 0, 1.5, options);
        if (!counter.error) {
            counter.start();
        } else {
            console.error(counter.error);
        }
    }
};

hoverEvents();
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