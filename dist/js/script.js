$(document).ready(function () {
	$('[data-fancybox]').fancybox({
		autoFocus: false,
	});
});

$(document).ready(function () {
  new WOW().init();

	$(".orderMenu").metisMenu();

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


$(document).ready(function () {
	let maxBonus = 0;

	$('#bonusLink').click(function(e) {
		e.preventDefault();

		maxBonus = parseInt($(this).text(), 10);

		const inputVal = $('#bonusInput').val();

		if (inputVal === "") {
			$('#bonusInput').val(maxBonus);
		}

		$('#bonusInput').attr('maxlength', maxBonus.toString().length);
	});


	$('#bonusInput').on('input', function() {

		this.value = this.value.replace(/[^0-9]/g, '');


		const currentValue = parseInt(this.value, 10);
		if (currentValue > maxBonus) {
			this.value = maxBonus;
		}
	});
});

// Введите код из SMS
$(document).ready(function() {
	$('.code-input').first().addClass('active').focus();


	$('.code-input').on('keydown', function(e) {
		if (!$(this).hasClass('active')) {
			e.preventDefault();
			return;
		}


		const key = e.which || e.keyCode;
		if (key < 48 || key > 57) {
			if (key !== 8 && key !== 9 && (key < 37 || key > 40)) {
				e.preventDefault();
			}
		}
	});

	$('.code-input').on('input', function() {
		const currentIndex = $('.code-input').index(this);
		const currentValue = $(this).val();

		if (currentValue !== '') {

			const allFilled = $('.code-input').slice(0, currentIndex).toArray().every(input => $(input).val() !== '');

			if (allFilled && currentIndex < 5) {

				$('.code-input').eq(currentIndex + 1).addClass('active').focus();
			}
		}


		if (currentValue === '') {
			$(this).removeClass('active');
		}
	});

	$('.code-input').on('focus', function() {
		$('.code-input').removeClass('active');
		$(this).addClass('active');
	});

	$('.code-input').on('keydown', function(e) {
		if (e.key === 'Backspace' && $(this).val() === '') {
			const currentIndex = $('.code-input').index(this);
			if (currentIndex > 0) {
				$('.code-input').eq(currentIndex - 1).addClass('active').focus();
			}
		}
	});
});


// Time
$(document).ready(function() {
	let timeLeft = 120;

	function updateTimer() {
		if (timeLeft <= 0) {
			$('#countdown').text("00:00");
			clearInterval(timerInterval);
		} else {

			let minutes = Math.floor(timeLeft / 60);
			let seconds = timeLeft % 60;


			minutes = minutes < 10 ? '0' + minutes : minutes;
			seconds = seconds < 10 ? '0' + seconds : seconds;


			$('#countdown').text(`${minutes}:${seconds}`);
			timeLeft--;
		}
	}

	const timerInterval = setInterval(updateTimer, 1000);
});