 // script for making the header fixed at the top
$(document).ready(function(){
	   $(window).bind('scroll', function() {
	//if the page scrolls below a set point, stick the header on the top by adding the classname with default style
	   var navHeight = $( window ).height() - 54;
			 if ($(window).scrollTop() > navHeight) {
				 $('#nav-links').addClass('fixed');
			 }
			 else {
				 $('#nav-links').removeClass('fixed');
			 }
		});
	});
