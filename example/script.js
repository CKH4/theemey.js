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

theemey(['default', 'bittersweet', 'grass', 'aqua', 'night', 'grapefruit', 'sunflower']);

var themeNumber = $('.theemey-theme').length
$('.theemey-theme').css({
  'max-width': 'calc(50vh / ' + themeNumber + ')',
  'max-height': 'calc(50vh / ' + themeNumber + ')'
});



function escapeHTML(string) {
  return string.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

$('pre code').each(function() {
  var lines = $(this).text().split(/\n/g);
  var output = ''
  $.each(lines, function(i, h) {
    var indent = h.match(/\ */)[0].length
    output += '<div class="line"><span class="line-number">' + (i + 1) + '|</span><div class="line-content" style="text-indent: -' + (indent * .6) + 'em; margin-left:' + (indent * .6) + 'em;">' + escapeHTML(h) + '</div></div>';
  });
  $(this).html(output);
});
