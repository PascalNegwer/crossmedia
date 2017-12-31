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
