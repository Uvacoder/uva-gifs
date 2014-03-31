$(document).ready(function() {
  $('#input-filter').focus();

  $('table').filterTable({
    filterSelector: '#input-filter',
    minRows: 3
  });
});