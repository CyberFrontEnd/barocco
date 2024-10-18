$(document).ready(function () {
  $(".metismenu").metisMenu();

  $('.catalogMenu__btn').on('click', function (event) {
    event.preventDefault();
    $(this).parents('.catalogMenu').find('.catalogMenuIn') .slideToggle();
  });
});
