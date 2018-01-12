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