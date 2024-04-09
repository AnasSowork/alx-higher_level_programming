// Script that fetches and replaces the name of the given URL
$(document).ready(function() {
    $.ajax ({
      url: 'https://swapi.co/api/people/5/?format=json',
      type: 'GET',
      success: function (data) {
        $('#character').text(data.name);
      }
    });
  });
