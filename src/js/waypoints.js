var waypoint = function () {
    var waypoint = new Waypoint({
        element: document.getElementById('myChart'),
        handler: function() {
            console.log('Basic waypoint triggered');
        }
    });
};

waypoint();
