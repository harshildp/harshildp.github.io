(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

  var src = $('.video-container').children('iframe').attr('src');
  
  $('.open-popup').click(function(e) {
    e.preventDefault();
    // change the src value of the video
    $('.video-container').children('iframe').attr('src', src);
  });

  // when object with class close-popup is clicked...
  $('.close-popup').click(function(e) {
    e.preventDefault();
    $('.video-container').children('iframe').attr('src', '');
  });

})(jQuery); // End of use strict


$(document).ready(function() {
  // set unique id to videoplayer for the Webflow video element
  var src = $('#videoplayer').children('iframe').attr('src');

  // when object with class open-popup is clicked...
  $('.open-popup').click(function(e) {
    e.preventDefault();
    // change the src value of the video
    $('#videoplayer').children('iframe').attr('src', src);
    $('.popup-bg').fadeIn();
  });

  // when object with class close-popup is clicked...
  $('.close-popup').click(function(e) {
    e.preventDefault();
    $('#videoplayer').children('iframe').attr('src', '');
    $('.popup-bg').fadeOut();
  });
});