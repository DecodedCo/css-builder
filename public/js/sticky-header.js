$(function() {
  // When the page scrolls past the top of the main content
  $('.js-main-content').waypoint(function() {
    // Apply the sticky class to the header so it follows you down the page
    $('.c-site-header').toggleClass('sticky');
  })
});