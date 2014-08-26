'use strict';

$(document).ready(function () {
    var hash = window.location.hash.substr(1);

    $.fn.changeVal = function (val) {
        return $(this).val(val).trigger("keyup");
    };

    if (hash) {
        $('#input-filter').changeVal(hash);
    }
});