$(document).ready(function () {
  // заменил классы на mobilFilter
  $('.mobilFilter').on('click', function () {
    $('.catalogAside').addClass('active');
    $('body').addClass('hide');
    $('.fon').addClass('active');
  });

  $('.mobilFilter__closed, .fon').on('click', function () {
    $('.catalogAside').removeClass('active');
    $('body').removeClass('hide');
    $('.fon').removeClass('active');
  });
});
