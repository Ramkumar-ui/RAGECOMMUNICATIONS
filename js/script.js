// Perloader

$(window).on('load', function () {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

// Scroll Down
$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});