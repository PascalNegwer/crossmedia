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
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

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
        loopHorizontal: false,
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
        sectionsColor : ['#312F30', '#505154', '#505154', '#505154', '#505154', '#505154', '#9d9fa2'],
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
/**
 * Created by jansenli on 03.01.2018.
 */

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid }";
    document.body.appendChild(css);
};
function getPersonalityData() {
    return [
        {
            'name': 'cruncher',
            'title': 'Die Cruncher',
            'tooltipTitle': 'der Cruncher',
            'x': '-260',
            'y': '-80',
            'overall': 13,
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
            'overall': 10,
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
            'overall': 2,
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
            'overall': 3,
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
            'overall': 37,
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
            'overall': 14,
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
            'overall': 17,
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
            'overall': 4,
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
                    '<h2>' + el.title + '</h2><h5>' + el.overall + ' % aller Befragten </h5>' +
                    '<hr/>' +
                    '<div class="row">' +
                    '    <div class="col-md-6">' +
                    '       <h5>Verteilung nach Geschlecht</h5>' +
                    '       <canvas id="pieChart" width="10%" height="10%"></canvas>' +
                    '    </div>' +
                    '    <div id="skillset" class="col-md-6">' +
                    '       ' + skills +
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

(function () {

    $("#card1").flip({
        axis: 'y',
        trigger: 'hover'
    });
    $("#card2").flip({
        axis: 'y',
        trigger: 'hover'
    });
    $("#card3").flip({
        axis: 'y',
        trigger: 'hover'
    });
}());

var donutCharts = (function () {
    function getConfig(isMale) {
        return {
            type: 'pie',
                data: {
            datasets: [{
                backgroundColor: [
                    isMale ? '#081344' : '#560a0a',
                    '#9A9B9F',
                    '#9A9B9F',
                    '#9A9B9F',
                    '#9A9B9F'
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
            number === 0 ? '#560a0a' : '#9A9B9F',
            number === 1 ? '#560a0a' : '#9A9B9F',
            number === 2 ? '#560a0a' : '#9A9B9F',
            number === 3 ? '#560a0a' : '#9A9B9F',
            number === 4 ? '#560a0a' : '#9A9B9F'
        ];
        womanPie.update();
    };

    var changeManData = function(number) {
        manPie.data.datasets[0].backgroundColor = [
            number === 0 ? '#081344' : '#9A9B9F',
            number === 1 ? '#081344' : '#9A9B9F',
            number === 2 ? '#081344' : '#9A9B9F',
            number === 3 ? '#081344' : '#9A9B9F',
            number === 4 ? '#081344' : '#9A9B9F'
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
                        fontColor: '#eeeeeb'
                    },
                    gridLines: {
                        lineWidth: 3,
                        display: false,
                        color: '#505154'
                    },
                    scaleLabel: {
                        fontColor: '#eeeeeb',
                        fontSize: '15',
                        display: true,
                        labelString: 'Berufserfahrung in Jahren'
                    }
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
                            ctx.font = "2.5vmin Quicksand";
                            ctx.fillText(dataset.data[index] + ' %', bar._model.x, (chartInstance.height + bar._model.y) * 0.5 - 20);
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