// Script that fetches and lists all movies titles
$(document).ready(function() {
    $.ajax({
      url: 'https://swapi.co/api/films/?format=json',
      type: 'GET',
      success: function (films) {
        $.each(films['results'], function(data, titles) {
          $('#list_movies').append('<li>' + titles['title'] + '</li>');
      });
      }
    });
  });
