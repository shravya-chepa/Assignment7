var msg = "I have been clicked";
var clickEvent = 'click';

// 1
function displayMessage() {
    'use strict';
    alert(msg);
}

function afterLoad() {
    // 2
    var but2 = document.getElementById('b2');
    but2.onclick = displayMessage;

    // 3
    var but3 = document.getElementById('b3');
    but3.addEventListener(clickEvent, displayMessage);

    // 4
    var but4 = document.getElementById('b4');
    but4.addEventListener(clickEvent, function() {
        'use strict';
        alert(msg);
    })

    // 5
    var but5 = document.getElementById('b5');
    but5.addEventListener(clickEvent, function() {
        alert(msg);
    });
}

afterLoad();