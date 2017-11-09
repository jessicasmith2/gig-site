$(document).ready(function(){
	"use strict";
	
	/*-----MENU-----*/
	$(".menuIcon").click(function() {
		$("#mobileMenu").toggleClass("mobileMenuShow");
		$("body").toggleClass("noScroll");
	});
});