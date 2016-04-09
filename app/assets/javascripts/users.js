$(document).ready(function() {
  return $('.flash').show(function() {
    var flash;
    flash = $(this);
    return setTimeout(function() {
      return flash.slideToggle();
    }, 3000);
  });
});