
$(function(){

	var text= 'Hi!. I\'m a 20 year old Freelance Developer that loves making things for the web.';
	var result = '';
	var i = 0;

	function typeWriter() {
		if (i < text.length) {
			result += text.charAt(i);
			$('.intro').html(result);
			i++; 
			setTimeout(typeWriter, 45);
		}
	};

	$('.intro-button').click(() => {
		typeWriter();
		delay();
		$('.intro-button').fadeOut(3200);
	});
	
	function delay(){
		setTimeout(function() {
			$('.icons').fadeIn();
			$('.next_page')
					.fadeIn()
					.css('display', 'block');
		}, 3600);
	}

	$('a .navlink').click(()=>{
		if($(window).width() < 600) {
			$('.nav').fadeOut(500);
			$('.close_nav').hide();
			$('.open_nav').show();
		}
	})
	
	$('.open_nav').click(() => {
		$('.nav').slideDown(500);
		$('.open_nav').hide();
		$('.close_nav').show();
	});

	$('.close_nav').click(() => {
		$('.nav').slideUp(500);
		$('.close_nav').hide();
		$('.open_nav').show();
	});

	$('#home').click(function() {
		$('.about').hide();
		$('.intro-div').fadeIn(500);
		$('body').css('background-color', '#010505');
		$('.projects').hide();
		if($(window).width() < 600) {
			$('.mobile-nav').fadeOut(500);
		}
	});
	

	$('#about').click( function() {
		$('.about').fadeIn(500);
		$('body').css("background-color", "#123456");
		$('.intro-div').hide();
		$('.projects').hide();
		if($(window).width() < 600) {
			$('.nav').hide();
		}
	});
	
	$('.next_page').click( function() {
		$('.about').fadeIn(500);
		$('body').css("background-color", "#123456");
		$('.intro-div').hide();
		$('.projects').hide();
		if($(window).width() < 600) {
			$('.mobile-nav').hide();
		}
	});
	
	$('#projects').click( function() {
		$('.projects')
		.fadeIn(500)
		.css({'display': 'flex',
			'flex-direction': 'column',
			'justify-content': 'space-between', 
			'flex-wrap': 'wrap'});
			$('body').css("background-color", "#313F56");
			$('.intro-div').hide();
			$('.about').hide();
	});

	$('.project-image').mouseover(function(){
		$(this).css({
			'-ms-transform': 'translate(-50px, -100px)', /* IE 9 */
			'-webkit-transform': 'translate(-50px, -100px)', /* Safari */
			'transform': 'translate(-50px, -100px)'
		})
	});

	$('.project-image').mouseleave(function() {
		$(this).css({
			'-ms-transform': 'translate(0, 0)', /* IE 9 */
			'-webkit-transform': 'translate(0, 0)', /* Safari */
			'transform': 'translate(0, 0)'
		})
	})

	$(window).scroll(() => {
		if($(window).width() < 600) {
			$('.nav').slideUp(500);
			$('.close_nav').hide();
			$('.open_nav').show();
		}

		if ($(window).scrollTop() > 0) {
			$('header').css({
				'background-color': 'transparent',
				'opacity': '1'
			});
			if($(window).width() > 600) {
				$('.nav').css({
					'background-color': 'transparent'
				});
			}
		} else {
			$('header').css({
				'background-color': '#fff',
				'opacity': '1'
			});
		}
	})

	

});



