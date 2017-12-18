
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
			$('.navlink').hide();
			$('.nav').css({
				'height': '0'
			})
			$('.close_nav').hide();
			$('.open_nav').show();
		}
	})
	
	$('.open_nav').click(() => {
		$('.open_nav').hide();
		$('.navlink').show();
		$('.close_nav').show();
		$('.nav').css({
			'display': 'block',
			'height': '50vh'
		})
	});
	
	$('.close_nav').click(() => {
		$('.navlink').hide();
		$('.nav').css({
				'height': '0',
				'display': 'block'
			})
		$('.close_nav').hide();
		$('.open_nav').show();
	});
	
	$('#home').click(function() {
		$('.about').hide();
		$('.intro-div').fadeIn(500);
		$('body').css('background-color', '#010505');
		$('.projects').hide();
		if($(window).width() < 600) {
			$('.nav').css({
				'height': '0'
			})
			$('.close_nav').hide();
			$('.open_nav').show();
		}
	});
	

	$('#about').click( function() {
		$('.about').fadeIn(500);
		$('body').css("background-color", "#123456");
		$('.intro-div').hide();
		$('.projects').hide();
		if($(window).width() < 600) {
			$('.nav').css({
				'height': '0'
			})
		}
	});
	
	$('.next_page').click( function() {
		$('.about').fadeIn(500);
		$('body').css("background-color", "#123456");
		$('.intro-div').hide();
		$('.projects').hide();
		if($(window).width() < 600) {
			$('.nav').css({
				'height': '0'
			})
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
		if($(window).width() > 899){
			$(this).css({
				'-ms-transform': 'scale(1.5, 1.5)', /* IE 9 */
				'-webkit-transform': 'scale(1.5, 1.5)', /* Safari */
				'transform': 'scale(1.5, 1.5)'
			})
		} else {
			return;
		}
	});

	$('.project-image').mouseleave(function() {
		if($(window).width() > 900) {
			$(this).css({
				'-ms-transform': 'scale(1, 1)', /* IE 9 */
				'-webkit-transform': 'scale(1, 1)', /* Safari */
				'transform': 'scale(1, 1)'
			})
		}
	})

	$(window).scroll(() => {
		if($(window).width() < 600) {
			$('.nav').slideUp(500);
			$('.close_nav').hide();
			$('.open_nav').show();
		}

		if ($(window).scrollTop() > 0) {
			$('header').css({
				'height': '0'
			});
			if($(window).width() > 600) {
				$('.nav').css({
					'background-color': 'transparent'
				});
			}
		} else {
			$('header').css({
				'height': '10%'
			});
		}
	})

});



