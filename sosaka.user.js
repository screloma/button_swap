// ==UserScript==
// @name         sosaka
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @downloadURL  https://github.com/screloma/sosaka/raw/master/sosaka.user.js
// @updateURL https://github.com/screloma/sosaka/raw/master/sosaka.user.js
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @match        https://2ch.hk/*/res/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function swapElement(a, b) {
        // create a temporary marker div
        var aNext = $('<div>').insertAfter(a);
        a.insertAfter(b);
        b.insertBefore(aNext);
        // remove marker div
        aNext.remove();
    }
    var container = $(".thread-nav.desktop");
    console.log(container);
    Array.from(container).forEach((item) =>{
        let el1 = $($(item).find("a:eq(1)"));
        let el2 = $($(item).find("a")).last();
        swapElement(el1, el2);

    });
    // Your code here...
})();
