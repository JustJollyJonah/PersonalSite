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
   });
    $(".contact").click(function() {
        $('.articles').load("content.html #contactcontent");
    });
    
});