$(document).ready(function () {
  $('.more').click(function(e) {
    $(this).toggleClass('active');
    $('.aboutHide').toggleClass('active');

    $('.more').text(function(_,txt) {
      var ret='';

      if ( txt == 'Подробнее' ) {
        ret = 'Свернуть';
      }else{
        ret = 'Подробнее';
      }
      return ret;
    });
    return false;
    e.preventDefault();
  });
});
