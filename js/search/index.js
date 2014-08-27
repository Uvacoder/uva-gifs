'use strict';

$(document).ready(function () {
    var regex = /\?[A-Za-z]=/gi,
        usesSearch = window.location.search,
        searchQuery;

    $.fn.changeVal = function (val) {
        return $(this).val(val).trigger("keyup");
    };

    if (usesSearch) {
        searchQuery = decodeURI(usesSearch.replace(regex, ''));
        $('#input-filter').changeVal(searchQuery);
    }
});