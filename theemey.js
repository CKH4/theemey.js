function theemey(themes) {
  $('html').attr('id', themes[0]);

  $('body').prepend('<div id="theemey"><div>');

  $.each(themes, function(i, n) {
    $('#theemey').append('<div class="container"><div class="theemey-theme" id="' + n + '"></div><span class="' + n + '">' + n + '</span></div>');
  });

  $('#theemey .theemey-theme').click(function() {
    $('#theemey .theemey-theme').removeClass('active');
    $(this).addClass('active');
    $('html').attr('id', $(this).attr('id'));
    setTimeout(function() {
      $('meta[name=theme-color]').attr("content", $('h1').css('color'));
    }, 200);
  });

  $('#theemey .theemey-theme').first().trigger('click')//.addClass('active');
  $('head').append('<meta name="theme-color" content="' + $('h1').css('color') + '">');
}
