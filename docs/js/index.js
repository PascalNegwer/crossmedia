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
        autoScrolling: true,
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
        verticalCentered: false,
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
function getPersonalityData() {
    return [
        {
            'name': 'cruncher',
            'title': 'Die Cruncher',
            'tooltipTitle': 'der Cruncher',
            'x': '-260',
            'y': '-80',
            'women': 40,
            'men': 60,
            'skills': [
                {
                    'title': 'Eigenschaften',
                    'points': [
                    ]
                },
                {
                    'title': 'POSITION',
                    'points': [
                    ]
                }
            ]
        },
        {
            'name': 'gurus',
            'title': 'Die Gurus',
            'tooltipTitle': 'der Gurus',
            'x': '-200',
            'y': '-40',
            'women': 40,
            'men': 60,
            'skills': [
                {
                    'title': 'Eigenschaften',
                    'points': [
                    ]
                },
                {
                    'title': 'POSITION',
                    'points': [
                    ]
                }
            ]
        },
        {
            'name': 'other',
            'title': 'Weitere Profile',
            'tooltipTitle': 'der weiteren Profile',
            'x': '-200',
            'y': '-120',
            'women': 40,
            'men': 60,
            'skills': [
                {
                    'title': 'Eigenschaften',
                    'points': [
                    ]
                },
                {
                    'title': 'POSITION',
                    'points': [
                    ]
                }
            ]
        },
        {
            'name': 'lynchpins',
            'title': 'Die Lynchpins',
            'tooltipTitle': 'der Lynchpins',
            'x': '-150',
            'y': '-40',
            'women': 40,
            'men': 60,
            'skills': [
                {
                    'title': 'Eigenschaften',
                    'points': [
                    ]
                },
                {
                    'title': 'POSITION',
                    'points': [
                    ]
                }
            ]
        },
        {
            'name': 'geeks',
            'title': 'Die Geeks',
            'tooltipTitle': 'der Geeks',
            'x': '-100',
            'y': '-20',
            'women': 40,
            'men': 60,
            'skills': [
                {
                    'title': 'Eigenschaften',
                    'points': [
                        'technisch “vorbelastet"',
                        'logische und analytische Fähigkeiten',
                        '“schwarz-weiß” Denken',
                        'mögen klare Ansagen',
                        'vermeiden es “um den heißen Brei” zu reden',
                        'emotionale Argumente zählen nicht',
                        'Vorliebe für Details und Regeln'
                    ]
                },
                {
                    'title': 'POSITION',
                    'points': [
                        'Systemanforderungen festlegen',
                        'Prozesse aufsetzen und programmieren'
                    ]
                }
            ]
        },
        {
            'name': 'driver',
            'title': 'Die Driver',
            'tooltipTitle': 'der Driver',
            'x': '-60',
            'y': '-40',
            'women': 40,
            'men': 60,
            'skills': [
                {
                    'title': 'Eigenschaften',
                    'points': [
                    ]
                },
                {
                    'title': 'POSITION',
                    'points': [
                    ]
                }
            ]
        },
        {
            'name': 'deliverer',
            'title': 'Die Deliverer',
            'tooltipTitle': 'der Deliverer',
            'x': '-10',
            'y': '-80',
            'women': 40,
            'men': 60,
            'skills': [
                {
                    'title': 'Eigenschaften',
                    'points': [
                    ]
                },
                {
                    'title': 'POSITION',
                    'points': [
                    ]
                }
            ]
        },
        {
            'name': 'voices',
            'title': 'Die Voices',
            'tooltipTitle': 'der Voices',
            'x': '-70',
            'y': '-120',
            'women': 40,
            'men': 60,
            'skills': [
                {
                    'title': 'Eigenschaften',
                    'points': [
                    ]
                },
                {
                    'title': 'POSITION',
                    'points': [
                    ]
                }
            ]
        }
    ];
}
var hoverEventsPersonalities = function() {
    var personalities = document.getElementById('svg-personalities-all');
    var laptopSvg = document.getElementById('svg-laptop');

    if (personalities) {
        initializeHoverEvents();
    }

    personalities.addEventListener("load",function(ev) {
        initializeHoverEvents();
    });

    function initializeHoverEvents() {
        var doc = personalities.contentDocument;
        var laptopSvgDoc = laptopSvg.contentDocument;

        getPersonalityData().forEach(function (el) {
            var object = doc.getElementById(el.name);
            object.addEventListener('mouseenter', function () {
                object.setAttribute('transform', 'scale(1.2 1.2), translate(' + el.x + ', ' + el.y + ')');

            });

            object.addEventListener('mouseleave', function () {
                object.setAttribute('transform', '');
            });

            object.addEventListener('click', function () {
                $('#svg-personalities-all').fadeOut(2000, 'swing');
                $('#personalities-section-header .section-header').fadeOut(2000, 'swing');
                $('#svg-laptop').fadeIn(1000, 'swing');
                document.getElementById('svg-laptop').classList.add('bigger');
                document.getElementById('laptop-content').classList.add('bigger');
                var skills = '';
                el.skills.forEach(function (skill) {
                    skills += '<h5>' + skill.title+ '</h5>' +
                        '<ul>';
                    skill.points.forEach(function (point) {
                       skills +=  '<li>' + point + '</li>';
                    });
                    skills += '</ul>';
                });
                document.getElementById('laptop-content').innerHTML =
                    '<object id="svg-geek" class="single-personality" type="image/svg+xml" data="assets/svg/personalities/' + el.name + '.svg"></object>' +
                    '<object id="svg-laptop-close" class="pull-right" type="image/svg+xml" data="assets/svg/closeButton.svg"></object>' +
                    '<h1>' + el.title + '</h1>' +
                    '<hr/>' +
                    '<div class="row">' +
                    '    <div class="col-md-6">' +
                    '        <canvas id="pieChart" width="10%" height="10%"></canvas>' +
                    '    </div>' +
                    '    <div class="col-md-6">' + skills +
                    '    </div>' +
                    '</div>';

                setTimeout(function(){
                    $('#laptop-content').fadeIn(1000, 'swing');
                    var factorWidth = laptopSvg.offsetWidth / 303.27;
                    var factorHeight = laptopSvg.offsetHeight / 193.55;
                    document.getElementById('laptop-content').style.width = laptopSvgDoc.getElementById('test').attributes.width.value * factorWidth + 'px';
                    document.getElementById('laptop-content').style.height = laptopSvgDoc.getElementById('test').attributes.height.value * factorHeight + 'px';
                    document.getElementById('laptop-content').style.top = '95px';
                    laptopContentPieChart(el.women, el.men, el.tooltipTitle);
                }, 1000);

                document.getElementById('svg-laptop-close').addEventListener('load', function (ev) {
                    document.getElementById('svg-laptop-close').contentDocument.addEventListener('click', function (ev) {
                        $('#svg-personalities-all').fadeIn(2000, 'swing');
                        $('#personalities-section-header .section-header').fadeIn(2000, 'swing');
                        document.getElementById('svg-laptop').classList.remove('bigger');
                        document.getElementById('laptop-content').classList.remove('bigger');
                        document.getElementById('laptop-content').style = '';
                        $('#svg-laptop').fadeOut(1000, 'swing');
                        });

                });
            });
        });

    }
};

document.addEventListener("DOMContentLoaded", function(ev) {
    hoverEventsPersonalities();
});

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
                bodyFontSize: 16,
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

var hoverEvents = function() {
    var svgWomanIsLoaded = false;
    var svgWoman = document.getElementById('svg-stresslevel-woman');
    var svgWomanDoc;

    var svgManIsLoaded = false;
    var svgMan = document.getElementById('svg-stresslevel-man');
    var svgManDoc;

    var allSvgLoaded = new Event('allSvgLoaded');
    document.addEventListener('allSvgLoaded', function () {
        svgWomanDoc.getElementById('woman-stressed-heavy').addEventListener('click', function (ev) { animateHeavy(); });
        svgWomanDoc.getElementById('woman-stressed-medium').addEventListener('click', function (ev) { animateMedium(); });
        svgWomanDoc.getElementById('woman-stressed-light').addEventListener('click', function (ev) { animateLight(); });
        svgManDoc.getElementById('man-stressed-heavy').addEventListener('click', function (ev) { animateHeavy(); });
        svgManDoc.getElementById('man-stressed-medium').addEventListener('click', function (ev) { animateMedium(); });
        svgManDoc.getElementById('man-stressed-light').addEventListener('click', function (ev) { animateLight(); });
    });

    if (svgWoman.contentDocument) {
        svgWomanDoc = svgWoman.contentDocument;
        svgWomanIsLoaded = true;
    }

    if (svgMan.contentDocument) {
        svgManDoc = svgMan.contentDocument;
        svgManIsLoaded = true;
    }

    if (svgWomanIsLoaded && svgManIsLoaded) {
        document.dispatchEvent(allSvgLoaded);
    }

    svgWoman.addEventListener("load",function(ev) {
        svgWomanIsLoaded = true;
        svgWomanDoc = svgWoman.contentDocument;
        if (svgWomanIsLoaded && svgManIsLoaded) {
            document.dispatchEvent(allSvgLoaded);
        }
    });

    svgMan.addEventListener("load",function(ev) {
        svgManIsLoaded = true;
        svgManDoc = svgMan.contentDocument;
        if (svgWomanIsLoaded && svgManIsLoaded) {
            document.dispatchEvent(allSvgLoaded);
        }
    });

    function animateHeavy() {
        setAllFieldsInactive();
        addActive('man-stressed-heavy', 'woman-stressed-heavy');
        countUp(svgWomanDoc.getElementById('text'), 30);
        countUp(svgManDoc.getElementById('text'), 27);
    }

    function animateMedium() {
        setAllFieldsInactive();
        addActive('man-stressed-medium', 'woman-stressed-medium');
        countUp(svgWomanDoc.getElementById('text'), 23);
        countUp(svgManDoc.getElementById('text'), 21);
    }

    function animateLight() {
        setAllFieldsInactive();
        addActive('man-stressed-light', 'woman-stressed-light');
        countUp(svgWomanDoc.getElementById('text'), 47);
        countUp(svgManDoc.getElementById('text'), 52);
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

document.addEventListener("DOMContentLoaded", function(ev) {
    hoverEvents();
});

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