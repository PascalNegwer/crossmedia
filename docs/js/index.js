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
        verticalCentered: false, // Linda: geändert auf false da true beim Styling nur Probleme bringt
        sectionsColor : ['#312F30', '#3E3E3F', '#4B4C4D', '#57585A', '#6C6D70', '#8A8C8F', '#9D9FA2'],
        paddingTop: '56px', //Linda: geändert, da hier sonst oben immer ein Rand ist. Navi Heigth in nav.sass auch auf 56px geändert. Beide Werte müssen gleich sein
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
var donutCharts = (function () {
    function getConfig(isMale) {
        return {
            type: 'pie',
                data: {
            datasets: [{
                backgroundColor: [
                    isMale ? '#48A3BB' : '#f2a68c',
                    '#c7c7c7'
                ],
                borderWidth: 1,
                data: [
                    0,
                    100
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
                },
            }
        };
    }

    var womanPie = new Chart(document.getElementById('donut-chart-woman'),getConfig(0));
    var manPie = new Chart(document.getElementById('donut-chart-man'),getConfig(1));

    var changeWomanData = function(number) {
        womanPie.data.datasets[0].data = [
            number,
            100 - number
        ];
        womanPie.update();
    };

    var changeManData = function(number) {
        manPie.data.datasets[0].data = [
            number,
            100 - number
        ];
        manPie.update();
    };

    return {
        changeWomanData: changeWomanData,
        changeManData: changeManData
    };
}());

function lineChart() {
    var barChartData = {
        labels: ['< 1', '1 - 3', '4 - 10', '11 - 20', '20 +'],
        datasets: [{
            //label: 'Dataset 1',
            backgroundColor: '#48A3BB',
            hoverBackgroundColor: "#f2a68c",
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
};

document.addEventListener("DOMContentLoaded", function(ev) {
    hoverEvents();
});

function getPersonalityData() {
    return [
        {
            'name': 'cruncher',
            'title': 'Die Cruncher',
            'tooltipTitle': 'der Cruncher',
            'x': '-260',
            'y': '-80',
            'women': 15.5,
            'men': 84.5,
            'skills': [
                {
                    'title': 'Eigenschaften',
                    'points': [
                        'Zurückhaltendste Gruppe',
                        'überwiegend reaktive Persönlichkeiten',
                        'mögen Routine und Beständigkeit',
                        'hohe technische Kompetenz und Konstanz'
                    ]
                },
                {
                    'title': 'Einsatzgebiete',
                    'points': [
                        'Technische Aufgaben wie Datenaufbereitung, -analyse, -monitoring, Qualitätskontrolle'
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
            'women': 26.4,
            'men': 73.6,
            'skills': [
                {
                    'title': 'Eigenschaften',
                    'points': [
                        'Hohes Maß an Introvertiertheit',
                        'besonderes Interesse an wissenschaftlichen und technischen Themen',
                        'starke proaktive Extrovertiertheit',
                        'Kommunikationsstärke',
                        'Überzeugungskraft',
                        'soziale Kompetenz'
                    ]
                },
                {
                    'title': 'Einsatzgebiete',
                    'points': [
                        'Entscheider von Vorteilen der Data Science überzeugen'
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
            'women': 18,
            'men': 82,
            'skills': [
                {
                    'title': 'Ground Breaker',
                    'points': [
                        'bieten neue Ansätze, Methoden und Möglichkeiten, die sie aus einem Mix aus Inspiration und streng logischem Denken ziehen'
                    ]
                },
                {
                    'title': 'Seeker',
                    'points': [
                        'kombinieren hervorragendes technisches Knowhow mit Wissbegierde, die sie antreibt, nach Lösungen zu suchen. Zu finden beispielsweise in der Forschung'
                    ]
                },
                {
                    'title': 'Teacher',
                    'points': [
                        'sind gut im Teilen von Informationen und darin, andere zum Lernen zu bewegen. Mögliche Rollen umfassen Ausbildung und Mentoring'
                    ]
                },
                {
                    'title': '',
                    'points': [
                        'durch technologischen Weiterentwicklung wird möglicherweise immer weniger Gewicht auf technische Charaktereigenschaften gelegt, während seltenere Profile wie die Ground Breaker, Teacher oder Seeker an Bedeutung gewinnen.'
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
            'women': 28,
            'men': 72,
            'skills': [
                {
                    'title': 'Eigenschaften',
                    'points': [
                        'Teamplayer',
                        'kaum tiefgreifendes technisches Wissen',
                        'leisten wichtige Unterstützungsarbeit'
                    ]
                },
                {
                    'title': 'Einsatzgebiete',
                    'points': [
                        'Koordination',
                        'Administration'
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
            'women': 22.5,
            'men': 77.5,
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
                    'title': 'Einsatzgebiete',
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
            'women': 18,
            'men': 82,
            'skills': [
                {
                    'title': 'Eigenschaften',
                    'points': [
                        'Proaktive Introvertierte',
                        'hochgradig pragmatisch',
                        'starke Konzentration auf Zielumsetzung, Überwachung und Priorisierung',
                        'bringen Aufträge erfolgreich zum Abschluss'
                    ]
                },
                {
                    'title': 'Einsatzgebiete',
                    'points': [
                        'Ideale Projektmanager und Teamleiter durch Selbstbewusstsein und Ergebnisorientiertheit'
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
            'women': 24,
            'men': 76,
            'skills': [
                {
                    'title': 'Eigenschaften',
                    'points': [
                        'Proaktiv',
                        'starke Neigung zur Aneignung und/oder Anwendung technischer Fähigkeiten'
                    ]
                },
                {
                    'title': 'Einsatzgebiete',
                    'points': [
                        'Projektmanagement',
                        'Mitarbeiterführung'
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
            'women': 41,
            'men': 59,
            'skills': [
                {
                    'title': 'Eigenschaften',
                    'points': [
                        'Kommunikationsstarke Menschen',
                        'weniger technisches Wissen als Gurus',
                        'Können andere auf weniger technischen Ebene für Potenzial von Big Data und Data Science begeistern',
                        'positive Ansichtsweise'
                    ]
                },
                {
                    'title': 'Einsatzgebiete',
                    'points': [
                        'Ergebnispräsentation und Unterstützung bei Implementierung'
                    ]
                }
            ]
        }
    ];
}
var hoverEventsPersonalities = function() {
    var personalities = document.getElementById('svg-personalities-all');
    var allSvgLoaded = new Event('laptopSvgLoaded');

    document.addEventListener('laptopSvgLoaded', function () {
        initializeHoverEvents();
    }, false);

    if (personalities) {
        document.dispatchEvent(allSvgLoaded);
    }

    personalities.addEventListener("load",function(ev) {
        document.dispatchEvent(allSvgLoaded);
    });

    function initializeHoverEvents() {
        var doc = personalities.contentDocument;
        var laptopSvg = document.getElementById('svg-laptop');
        var laptopSvgDoc = laptopSvg.contentDocument;
        document.getElementById('svg-laptop').classList.add('hidden');

        if (!doc || !laptopSvgDoc) {
            setTimeout(function(){
                initializeHoverEvents();
            }, 1000);
            return;
        }

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
                    '    <div id="skillset" class="col-md-6">' + skills +
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
                position: 'custom',
                bodyFontSize: 14,
                bodySpacing: 2,
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

    Chart.Tooltip.positioners.custom = function(elements, eventPosition) {
        var tooltip = this;

        /* ... */

        return {
            x: 100,
            y: 100
        };
    };

    var myPieChart = new Chart(ctx,config);
}
