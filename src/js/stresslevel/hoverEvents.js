var hoverEvents = function() {
    var svgWomanIsLoaded = false;
    var svgWoman = document.getElementById('svg-stresslevel-woman');
    var svgWomanDoc;

    var svgManIsLoaded = false;
    var svgMan = document.getElementById('svg-stresslevel-man');
    var svgManDoc;

    var allSvgLoaded = new Event('allSvgLoaded');
    document.addEventListener('allSvgLoaded', function () {
        console.log(svgWomanDoc.getElementById('woman-stressed-heavy'));
        console.log(svgWomanDoc);
        console.log(svgManDoc.getElementById('man-stressed-heavy'));
        console.log(svgManDoc);
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
        console.log('aaa');
        svgWomanIsLoaded = true;
        svgWomanDoc = svgWoman.contentDocument;
        if (svgWomanIsLoaded && svgManIsLoaded) {
            document.dispatchEvent(allSvgLoaded);
        }
    });

    svgMan.addEventListener("load",function(ev) {
        console.log('bbb');
        svgManIsLoaded = true;
        svgManDoc = svgMan.contentDocument;
        if (svgWomanIsLoaded && svgManIsLoaded) {
            document.dispatchEvent(allSvgLoaded);
        }
    });

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

document.addEventListener("DOMContentLoaded", function(ev) {
    hoverEvents();
});
