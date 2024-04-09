// Script that adds, removes and clears LI elements from a list depending which option is clicked
$(document).ready(function() {  
    $(function () {
      $("#add_item").click(function() {
        $(".my_list").append('<li>Item</li>');
      });
      $("#remove_item").click(function () {
        $(".my_list").children().last().remove();
      });
      $("#clear_list").click(function () {
        $(".my_list").children().remove();
      });
    });
  });
