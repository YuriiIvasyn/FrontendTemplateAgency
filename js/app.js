// Smooth scroll

$(document).ready(function(){
    $('a.link-scroll').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
        }
        return false; 
    });
});

// END Smooth scroll


// Scroll animation

if(screen.width > 1080) {

	$(window).scroll(function(){
		if ($(this).scrollTop() > 2000 ) {
			 $(".seo").addClass("visible");
		}
		if ($(this).scrollTop() > 2650 ) {
			 $(".other-profits .left-side-bg, .other-profits .right-side-bg").addClass("visible");
		} 
		if ($(this).scrollTop() > 5500 ) {
			 $(".share .left-side-bg, .share .right-side-bg").addClass("visible");
		} 
		// if ($(this).scrollTop() > 0 ) {
		// 	 $(".header-top").addClass("scroll");
		// } else {
		// 	$(".header-top").removeClass("scroll");
		// }   
	})
}

// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st == 0) {
//    	   $(".header-top").removeClass("scroll");
//    } else {
//    		if (st > lastScrollTop){
// 	   	   $(".header-top").removeClass("scroll");
// 	   } 
// 	   else {
// 	       $(".header-top").addClass("scroll");
// 	   }
//    }
	   

//    lastScrollTop = st;
// });

// END Scroll animation

// Slick slider


$('.our-team, .how-do-items').slick({
	dots: true,
	arrows: true,
	autoplay: true,
	slidesToShow: 3,
	responsive: [
		{
  			breakpoint: 700,
				settings: {
        		slidesToShow: 1
				}
		}]
});



if(window.screen.width < 700) {
	$(".complex-marketing .list").addClass("list-slide");
	console.log("<2000");	
} else {
	$(".complex-marketing .list").removeClass("list-slide");
	console.log(">=2000");
} 

$('.complex-marketing .list-slide').slick({
	dots: true,
	arrows: true,
	autoplay: true,
	slidesToShow: 1
});

$('.desktop.portrait .complex-marketing .list').slick({
	dots: true,
	arrows: true,
	autoplay: true,
	slidesToShow: 1
});


$("div, section").each(function(){
	var elWithAttr=$(this).attr("data-img-src");
	if (typeof elWithAttr !== typeof undefined && elWithAttr !== false) {
		$(this).css("background-image", "url("+elWithAttr+")")
	}
});

// END slick slider

// Form animation

(function inputActive () {
	let toInputs = document.getElementsByClassName("to-inputs"),
		inputs = document.getElementsByClassName("form-inputs"),
		inputPhone = document.getElementsByClassName("input-phone"),
		inputEmail = document.getElementsByClassName("input-email");

	let arrInputs = [inputPhone, inputEmail];

	$(toInputs).click(function () {
		$(this).addClass("passive");
		$(inputs).addClass("active");
	});

	$(".form-inputs input").click(function() {
		$(this).addClass("active");
	});

	$(document).mouseup(function (e) {
	    var container = $(".form-inputs input.active");
	    if (container.has(e.target).length === 0){
	        container.removeClass("active");
	    }
	});

})()

// END Form animation

// Menu open/close

$(".header-top .menu").click(function () {
	$(".menu-big").addClass("open");
});

$(".menu-big a").click(function() {
	$(".menu-big").removeClass("open");
});

$(".menu-big .close").click(function () {
	$(".menu-big").addClass("close");
	$(".menu-big").removeClass("open");
	setTimeout(function() {
		$(".menu-big").removeClass("close");
	}, 1000);
});

// END Menu open/close

// Counter
var elwTimer = ($(".timer").attr("data-counter-val"))? $(".timer").attr("data-counter-val") : 230;
var elwTimer2 = ($(".timer2").attr("data-counter-val"))? $(".timer2").attr("data-counter-val") : 240;
var elwTimer3 = ($(".timer3").attr("data-counter-val"))? $(".timer3").attr("data-counter-val") : 240;
var elwTimer4 = ($(".timer4").attr("data-counter-val"))? $(".timer4").attr("data-counter-val") : 240;
$(".seo").mouseenter(function () {
	$('.timer').countTo({
	    from: 0,
	    to: elwTimer,
	    speed: 1000,
	    refreshInterval: 10,
	    formatter: function (value, options) {
	        return value.toFixed(options.decimals);
	    },
	    onUpdate: function (value) {
	        console.debug(this);
	    },
	    onComplete: function (value) {
	        console.debug(this);
	    }
	});
});
	

$(".left-side-bg").mouseenter(function() {
	$('.timer2').countTo({
	    from: 0,
	    to: elwTimer2,
	    speed: 1000,
	    refreshInterval: 10,
	    formatter: function (value, options) {
	        return value.toFixed(options.decimals);
	    },
	    onUpdate: function (value) {
	        console.debug(this);
	    },
	    onComplete: function (value) {
	        console.debug(this);
	    }
	});
});


$(".right-side-bg").mouseenter(function() {
	$('.timer3').countTo({
	    from: 0,
	    to: elwTimer3,
	    speed: 1000,
	    refreshInterval: 10,
	    formatter: function (value, options) {
	        return value.toFixed(options.decimals);
	    },
	    onUpdate: function (value) {
	        console.debug(this);
	    },
	    onComplete: function (value) {
	        console.debug(this);
	    }
	});
});

$(".how-we .case-item").mouseenter(function() {
	$('.timer4').countTo({
	    from: 0,
	    to: elwTimer4,
	    speed: 1000,
	    refreshInterval: 10,
	    formatter: function (value, options) {
	        return value.toFixed(options.decimals);
	    },
	    onUpdate: function (value) {
	        console.debug(this);
	    },
	    onComplete: function (value) {
	        console.debug(this);
	    }
	});
});

// END counter

// Cases-page 

(function showCases() {

	let casesArr = document.getElementsByClassName("cases-main-title");

	for(let item of casesArr) {
		if ($(item).hasClass("active")) {
			$(item).children().fadeIn();
		}
	}

	$(".cases-main-title").click(function() {
		for(let item of casesArr) {
			if ($(item).hasClass("active")) {
				$(item).removeClass("active");
				$(item).children().fadeOut();
			}
		}
		$(this).addClass("active");
		$(this).children().fadeIn();
	});

})();

// Width and height of cases

(function casesHeight() {
	var caseWidth = $(".case-item").innerWidth();
	var caseHeight = $(".case-item").innerHeight(caseWidth);
})();

(function casesPadding() {
	var casesHeight = $(".cases-list-in").innerHeight();
	var casesPadding = casesHeight + 70 + "px";

	var howWePadding = $("#how-we").css('padding-bottom', casesPadding);
	console.log(typeof casesPadding);
})();

console.log("ok");
/*

<script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/jquery.countTo.js"></script>
    <script src="js/device.min.js"></script>
    <script src="js/app.js"></script>
    <script src="js/animatedHeader.js"></script>*/