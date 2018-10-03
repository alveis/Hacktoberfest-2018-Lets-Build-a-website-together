
// // Get the header
// var header = document.getElementById("nav-links");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function fixHeader() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

 $(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 70;
			 if ($(window).scrollTop() > navHeight) {
				 $('#nav-links').addClass('fixed');
			 }
			 else {
				 $('#nav-links').removeClass('fixed');
			 }
		});
	});