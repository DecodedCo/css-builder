console.log("script loaded");
$(function() {
  console.log("waypoint created");
  $('.js-main-content').waypoint(function() {
    $('.c-site-header').toggleClass('sticky');
  })
});