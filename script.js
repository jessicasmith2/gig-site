$(document).ready(function(){
	"use strict";
	
	/*-----MENU-----*/
	$(".menuIcon").click(function() {
		$("#mobileMenu").toggleClass("mobileMenuShow");
		$("body").toggleClass("noScroll");
	});
	
	/*-----GALLERY FUNCTIONALITY-----*/
	$(".gallery-item").hover(function() {
		$(this).children(".hover-cover").slideToggle();
	});
});