$(document).ready(function () {
  new WOW().init();



  $(window).scroll(function(){
  		if ($(window).scrollTop() > 50) {
  			$('.header').addClass('fix');
  		} else {
  			$('.header').removeClass('fix');
  		};
  	});

	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$('.header2').addClass('fix2');
		} else {
			$('.header2').removeClass('fix2');
		};
	});


	$('.social__search').on('click', function (event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$('.searchHeader').slideToggle();
	});

	$('.mobilBtn').on('click', function () {
		$('.mobilContent').toggleClass('active');
		$('.header2, .header').toggleClass('noneBorder');
		$('body').toggleClass('hide');
		$('.header').toggleClass('active');
	});

	$(window).scroll(function(){
			if ($(window).scrollTop() > 690) {
				$('.up').addClass('active');
			} else {
				$('.up').removeClass('active');
			};
		});

	$(function () {
		$('.up img').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').stop().animate({
						scrollTop: target.offset().top
					}, 100);
					return false;
				}
			}
		});
	});
});
