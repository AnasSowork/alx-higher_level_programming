// Script that adds a LI element to a list tag when #add_item is clicked
$(document).ready(function () {
  $('#add_item').click(function () {
    $('.my_list').append('<li>Item</li>');
  });
});
