$(document).ready(function () {
  $('.deliverItem__left').on('click', function () {
    $(this).toggleClass('active').parents('.deliverItem').find('.deliverItem__right').slideToggle();
  });
});
