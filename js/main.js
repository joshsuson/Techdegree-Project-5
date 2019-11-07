
//Lightgallery Plugin
$(document).ready(function() {
        $("#lightgallery").lightGallery();
    });

//Search function

$("#search-bar").keyup(function() {
  let currentQuery = $("#search-bar").val().toLowerCase();
  $(".gallery img").filter(function() {
    let currentKeyword = $(this).attr("alt").toLowerCase();
    if (currentKeyword.indexOf(currentQuery) >= 0) {
      $(this).parent().show();
    } else {
      $(this).parent().hide()
    }
  });
});
