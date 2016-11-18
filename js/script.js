$(document).ready(function(){
    // menu button
    $('.menu-container').click(function(){
      $('.first').toggleClass('first-open');
      $('.second').toggleClass('second-open');
      $('.third').toggleClass('third-open');
      $('.top-menu').fadeToggle('slow');
      $('.top-title').toggleClass('title-opacity');
    });

    $(".toggle-mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top-menu ul a").click(function() {
		$(".top-menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top-title").css("opacity", "1");
	}).append("<span>");

	$(".toggle-mnu").click(function() {
		if ($(".top-menu").is(":visible")) {
			$(".top-title").css("opacity", "1");
			$(".top-menu").fadeOut(600);
			$(".top-menu li a").removeClass("fadeInUp animated");
		} else {
			$(".top-title").css("opacity", ".1");
			$(".top-menu").fadeIn(600);
			$(".top-menu li a").addClass("fadeInUp animated");
		};
	});

    //mixItUp
    $('#portfolio-table').mixItUp();

    //portfolio
    $('.portfolio li').on('click', function(){
        $('.portfolio li').removeClass('active');
        $(this).addClass('active');
    });

    $('.portfolio-item').each(function(i){
        $(this).find('a').attr( 'href', '#href_' + i);
        $(this).find('.portfolio-description').attr( 'id', 'href_' + i);
    });

    //preloader
    $(window).load(function(){
        $('.cssload-dots + svg').fadeOut();
        $('.cssload-dots').delay(400).fadeOut('slow');
    });

    //magnific-popup
    $('.popup').magnificPopup({type:'image'});
    $('.popup-content').magnificPopup({type:'inline', closeOnContentClick: true});

    //animation
    $('.top-title h1').animated('fadeInDown', 'fadeOutUp');
    $('.top-title p').animated('fadeInUp', 'fadeOutDown');
    $('.section-header').animated('fadeInUp', 'fadeOutDown');
    $('.animation_1').animated('flipInY', 'flipOutY');
    $('.animation_2').animated('fadeInLeft', 'fadeOutLeft');
    $('.animation_3').animated('fadeInRight', 'fadeOutRight');
    $('.left .resume-item').animated('fadeInLeft', 'fadeOutLeft');
    $('.right .resume-item').animated('fadeInRight', 'fadeOutRight');



    $("input, select, textarea").jqBootstrapValidation();

	$(".top-menu ul a").mPageScroll2id();


    // function randomInteger(min, max) {
    //     var rand = min + Math.random() * (max - min)
    //     rand = Math.round(rand);
    //     return rand;
    // }
    // randomInteger(1, 4)
    var colors = ['tomato', 'blue', 'purple', 'pink'];

    var rand = Math.floor(Math.random() * colors.length);
    console.log(colors[rand]);
    
    var box = $("#body-wrapper");
    
    if(box.size()>0){
        if (document.createStyleSheet){
            document.createStyleSheet('css/skins/'+colors[rand]+'.css');
        }
        else {
            $("head").append($("<link rel='stylesheet' href='css/skins/"+colors[rand]+".css' type='text/css' media='screen' />"));
        }
    }
console.log(box.size());
});




// var app = angular.module('app', []);


   






