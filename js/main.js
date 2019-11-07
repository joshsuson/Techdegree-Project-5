
//Lightgallery Plugin
$(document).ready(function() {
        $("#lightgallery").lightGallery();
    });

//Search function

$("#search-bar").keypress(function() {
  let currentQuery = $("#search-bar").val().toLowerCase();
  $(".gallery a").filter(function() {
    let currentKeyword = $(this).attr("data-alt").toLowerCase();
    if (currentKeyword.indexOf(currentQuery) >= 0) {
      $(this).show();
    } else {
      $(this).hide()
    }
  });
});
