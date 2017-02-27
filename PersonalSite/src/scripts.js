/**
 * Created by jonah on 27-Feb-17.
 */
$(document).ready(function() {
    $(".articles").load("content.html #homecontent");
   $(".about").click(function() {
       $('.articles').load("content.html #aboutcontent");
   });
   $(".home").click(function() {
      $('.articles').load("content.html #homecontent");
      $(".header").show();
   });
    $(".contact").click(function() {
        $('.articles').load("content.html #contactcontent");
    });
    $(".projects").click(function() {
       $('.articles').load("content.html #projectcontents");
       $('.header').hide();
    });

});

