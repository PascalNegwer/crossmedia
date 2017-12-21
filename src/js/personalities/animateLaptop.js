var animateLaptop = function () {
    var laptopSvg = document.getElementById('personalities-svg-laptop');
    var button1 = document.getElementById('kleiner');
    button1.onclick = function () {
        laptopSvg.classList.remove('focused');
    };
    var button2 = document.getElementById('groeßer');
    button2.onclick = function () {
        laptopSvg.classList.add('focused');
    };
};

animateLaptop();