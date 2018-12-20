var md = new MobileDetect(window.navigator.userAgent),
	slideNumber,
	playSound = false;

$(document).ready(function(){
	const options = {
  disableMouseEvents: false, // Disable mousewheel event listening.
  disableKeyboardEvents: false, // Disable keyboard event listening.
  disableTouchEvents: false, // Disable event listening on touchable device (Swipe).
  scrollingSpeed: 1000,  // The speed of the transition.
  scrollingLoop: false,  // Loop after reaching the end.
  navigationEnabled: true, // Enable navigation buttons
  navigationPosition: 'right',  // The Navigation's position
};

let slider = new Cachu(document.querySelector('.cachu__container'), options);
slider.run();
	
	if (md.mobile() || md.tablet()) {
		$('body').addClass('mobile-device');
		$('.menu-left,.menu-right').remove();
	}
	
	$('.section-5').fireworks({
		sound: true,
		opacity: 0.00001,
		width: '100',
		height: '100'
	});

	
    /*** resize ***/
    $(window).resize(function(){
        resizeWindow();
    });
    resizeWindow();
});

window.onload = preload;
function preload() {
        $('.preloader-wrapper').fadeOut(500);
    }

/** Resize **/
function resizeWindow() {

    if (md.mobile() || md.tablet()) {
        if(window.innerHeight < window.innerWidth){
            $('#block-portrait').show();
        }
        else {
            $('#block-portrait').hide();
        }
    }
}

var init = true;
function changeSlide() {
	slideNumber = $('.cachu__nav__item.active').index() + 1;
	var sectionActive = $('section.section-' + slideNumber);
	var sectionTexte = sectionActive.attr('data-txt');
	
	if(slideNumber > 1) {
		$('.up').show();
	}
	else {
		$('.up').hide();
	}
	if(slideNumber == 6) {
		$('.down').hide();
	}
	else {
		$('.down').show();
	}
	
	if(slideNumber == 5) {
		playSound = true;
		$( "#fireworksField" ).fadeTo(2000, 0.7);
	}
	else {
		playSound = false;
		$( "#fireworksField" ).fadeTo(1000, 0);
	}
	
	if (!init) {
		$('.logo-assiette').fadeOut(700);
		$('p.contain-txt').fadeOut(700, function() {
			$(this).html(sectionTexte).fadeIn(700);
			if(slideNumber == 1 || slideNumber == 6) {
				$('.logo-assiette').fadeIn(700);
			}
			init = false;
		});
	}
	else {
		init = false;
		$('p.contain-txt').html(sectionTexte);
	}
	
	
}