// Script that fetches and prints how to say “Hello” depending of the language:
$(document).ready(function() {
    $.ajax({
      url: 'https://fourtonfish.com/hellosalut/?lang=fr',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        $('#hello').text(data.hello);
      }
    });
  });
