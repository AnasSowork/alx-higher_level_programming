// Script that fetches and prints how to say “Hello” depending of the language
$(document).ready(function () {
    let url = 'https://fourtonfish.com/hellosalut/?lang=';
    $('#btn_translate').click(function () {
      let code = $('#language_code').val();
      $.get(url + code, function (data) {
        $('#hello').append(data.hello);
      });
    });
    $(document).keypress(function (event) {
      let keycode = event.keyCode || event.which;
      if (keycode == '13') {
        let code = $('#language_code').val();
        $.get(url + code, function (data) {
          $('#hello').append(data.hello);
        });
      }
    });
  });
