// Script that updates HTML tag HEADER to “New Header!!!” when DIV#update_header is clicked
$(document).ready(function() {
    $('#update_header').click(function() {
      $('header').text('New Header!!!');
    });
  });
