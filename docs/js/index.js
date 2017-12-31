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
        sectionsColor : ['#7b7b7b'],
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
/**
 * Created by jansenli on 30.12.2017.
 * Quelle: https://paulund.co.uk/playground/demo/typing-effect/download/js/typed.js
 */

!function($){

    "use strict";

    var Typed = function(el, options){

        // chosen element to manipulate text
        this.el = $(el);
        // options
        this.options = $.extend({}, $.fn.typed.defaults, options);

        // text content of element
        this.text = this.el.text();

        // typing speed
        this.typeSpeed = this.options.typeSpeed;

        // amount of time to wait before backspacing
        this.backDelay = this.options.backDelay;

        // input strings of text
        this.strings = this.options.strings;

        // character number position of current string
        this.strPos = 0;

        // current array position
        this.arrayPos = 0;

        // current string based on current values[] array position
        this.string = this.strings[this.arrayPos];

        // number to stop backspacing on.
        // default 0, can change depending on how many chars
        // you want to remove at the time
        this.stopNum = 0;

        // Looping logic
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 1;
        if (this.loop === false){
            // number in which to stop going through array
            // set to strings[] array (length - 1) to stop deleting after last string is typed
            this.stopArray = this.strings.length-1;
        }
        else{
            this.stopArray = this.strings.length;
        }

        // All systems go!
        this.init();
        this.build();
    };

    Typed.prototype =  {

        constructor: Typed

        , init: function(){
            // begin the loop w/ first current string (global self.string)
            // current string will be passed as an argument each time after this
            this.typewrite(this.string, this.strPos);
        }

        , build: function(){
            this.el.after("<span id=\"typed-cursor\">|</span>");
        }

        // pass current string state to each function
        , typewrite: function(curString, curStrPos){

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;

            // ------------- optional ------------- //
            // backpaces a certain string faster
            // ------------------------------------ //
            // if (self.arrayPos == 1){
            // 	self.backDelay = 50;
            // }
            // else{ self.backDelay = 500; }

            // containg entire typing function in a timeout
            setTimeout(function() {

                // make sure array position is less than array length
                if (self.arrayPos < self.strings.length){

                    // start typing each new char into existing string
                    // curString is function arg
                    self.el.text(self.text + curString.substr(0, curStrPos));

                    // check if current character number is the string's length
                    // and if the current array position is less than the stopping point
                    // if so, backspace after backDelay setting
                    if (curStrPos > curString.length && self.arrayPos < self.stopArray){
                        clearTimeout(clear);
                        var clear = setTimeout(function(){
                            self.backspace(curString, curStrPos);
                        }, self.backDelay);
                    }

                    // else, keep typing
                    else{
                        // add characters one by one
                        curStrPos++;
                        // loop the function
                        self.typewrite(curString, curStrPos);
                        // if the array position is at the stopping position
                        // finish code, on to next task
                        if (self.loop === false){
                            if (self.arrayPos === self.stopArray && curStrPos === curString.length){
                                // animation that occurs on the last typed string
                                // fires callback function
                                var clear = self.options.callback();
                                clearTimeout(clear);
                            }
                        }
                    }
                }
                // if the array position is greater than array length
                // and looping is active, reset array pos and start over.
                else if (self.loop === true && self.loopCount === false){
                    self.arrayPos = 0;
                    self.init();
                }
                else if(self.loopCount !== false && self.curLoop < self.loopCount){
                    self.arrayPos = 0;
                    self.curLoop = self.curLoop+1;
                    self.init();
                }

                // humanized value for typing
            }, humanize);

        }

        , backspace: function(curString, curStrPos){

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;

            setTimeout(function() {

                // ----- this part is optional ----- //
                // check string array position
                // on the first string, only delete one word
                // the stopNum actually represents the amount of chars to
                // keep in the current string. In my case it's 14.
                // if (self.arrayPos == 1){
                //	self.stopNum = 14;
                // }
                //every other time, delete the whole typed string
                // else{
                //	self.stopNum = 0;
                // }

                // ----- continue important stuff ----- //
                // replace text with current text + typed characters
                self.el.text(self.text + curString.substr(0, curStrPos));

                // if the number (id of character in current string) is
                // less than the stop number, keep going
                if (curStrPos > self.stopNum){
                    // subtract characters one by one
                    curStrPos--;
                    // loop the function
                    self.backspace(curString, curStrPos);
                }
                // if the stop number has been reached, increase
                // array position to next string
                else if (curStrPos <= self.stopNum){
                    clearTimeout(clear);
                    var clear = self.arrayPos = self.arrayPos+1;
                    // must pass new array position in this instance
                    // instead of using global arrayPos
                    self.typewrite(self.strings[self.arrayPos], curStrPos);
                }

                // humanized value for typing
            }, humanize);

        }

    }

    $.fn.typed = function (option) {
        return this.each(function () {
            var $this = $(this)
                , data = $this.data('typed')
                , options = typeof option == 'object' && option
            if (!data) $this.data('typed', (data = new Typed(this, options)))
            if (typeof option == 'string') data[option]()
        });
    };

    $.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        // typing and backspacing speed
        typeSpeed: 0,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // ending callback function
        callback: function(){ null };
    };


}(window.jQuery);

$(document).ready(function(){
    $(".typed-element").typed({
        strings: ["This is a paragraph that is being typed by the typed.js jQuery plugin."],
        typeSpeed: 50
    });
});

var waypoint = function () {
    var waypoint = new Waypoint({
        element: document.getElementById('myChart'),
        handler: function() {
            console.log('Basic waypoint triggered');
        }
    });
};

waypoint();
