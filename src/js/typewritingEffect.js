
document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = ['typing1', 'typing2', 'typing3'];
    var elemIndex = 0;
    var text;

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.getElementById(dataText[elemIndex]).innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback);
            }, 150);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback === 'function') {
            // call callback after timeout
            elemIndex++;
            setTimeout(fnCallback(), 700);
        }
    }

    var nextElement = function() {
        //console.log(elemIndex);
        if (elemIndex >= dataText.length) {
            elemIndex = 0;
        }
        text = document.getElementById(dataText[elemIndex]).innerText;
        typeWriter(text, 0, nextElement);
    };

    text = document.getElementById(dataText[elemIndex]).innerText;

    typeWriter(text, 0, nextElement);
});