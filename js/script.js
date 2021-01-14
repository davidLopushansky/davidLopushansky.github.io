var swiper = new Swiper('.swiper-container', {
	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
	},
});

$(document).ready(function () {
	$(".header_menu > li > a").on("click", function (){
    	$(this).next().toggle();
	});
	$(".header_menu_down_left > ul > li > a").on("click", function (){
    	$(".header_menu_down_right").hide();
    	$(this).next().toggle();
    	$(".header_menu_down_left > ul > li > a").removeClass("active");
    	$(this).toggleClass("active");
	});
	$(".header_menu > li").on("click", function (){
		$(".header_menu > li").removeClass("active");
    	$(this).toggleClass("active");
	});
	$(".header_menu_down_right_scroll div > ul > li").on("click", function (){
		$(".header_menu_down_right_scroll div > ul > li").removeClass("active");
    	$(this).toggleClass("active");
	});
});