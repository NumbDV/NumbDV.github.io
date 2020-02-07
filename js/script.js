$(document).ready(function () {
	$('.portfolio__slider').slick({
		adaptiveHeight: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 800,
		prevArrow: '<button type="button" class="slick-prev" style="outline: none"><img src="icons/left-arrow.png"></button>',
		nextArrow: '<button type="button" class="slick-next" style="outline: none"><img src="icons/right-arrow.png"></button>',
		arrows: true,
		autoplay: true,
		fade: true
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 700) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href=#up]").click(function () { // ссылка с атрибутом, кот. начин. с #
		const _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		});
		return false;
	});

	$('[data-modal=hiring]').on('click', function () {
		$('.overlay, #consultation').fadeIn();
	});
	$('.modal__close').on('click', function () {
		$('.overlay, .modal').fadeOut('slow');
	});

	$('form').submit(function (e) {
		e.preventDefault();

		$(this).find('input', 'textarea').val('');
		$('#consultation').fadeOut();
		$('.overlay, #thanks').fadeIn('slow');
		$('form').trigger('reset');

		$.ajax({
            type: "POST",
            url: "mailer/smart.php",
			data: $(this).serialize()
		});
		/* $.ajax({
            type: "POST",
            url: "../mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find('input', 'textarea').val('');
			$('#consultation').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');
			
            $('form').trigger('reset');
        });
        return false; */
	});

});