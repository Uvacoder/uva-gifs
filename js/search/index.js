'use strict';

$(document).ready(function () {
    var regex = /\?[A-Za-z]=/gi,
        searchQuery = decodeURI(window.location.search.replace(regex, ''));

    $.fn.changeVal = function (val) {
        return $(this).val(val).trigger("keyup");
    };

    if (searchQuery) {
        $('#input-filter').changeVal(searchQuery);
    }
});