var $ = jQuery.noConflict();
/*============Menu JS================*/  
$(document).ready(function () {
    jQuery(".navbar-toggler").click(function () {
        if (jQuery('header').hasClass('current')) {
            jQuery('header').removeClass('current');
            jQuery('body').removeClass('menu-overlay');
            jQuery('.navbar-collapse').removeClass('anim_done');
        } else {
            jQuery('header').addClass('current');
            jQuery('body').addClass('menu-overlay');
            setTimeout(function () {
                jQuery('.navbar-collapse').addClass('anim_done');
            }, 2500);
        }
    });
    jQuery("header .dropdown-toggle").click(function () {
        if (jQuery('header').hasClass('menu-open')) {
            jQuery('header').removeClass('menu-open');
        } else {
            jQuery('header').addClass('menu-open');
        }
    });
    var wrapper_language = $('header');
    $('body,html').click(function (e) {
        if (
            (wrapper_language[0] != e.target) &&
            (!wrapper_language.has(e.target).length)
        ) {
            $('header').removeClass('menu-open');
        }
    });
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
// On Scrool add/remove class
$(window).on('scroll', function () {
    didScroll = true;

    if (window.scrollY == 0) {
        $('header').addClass('to-top');
    }
    else {
        $('header').removeClass('to-top');
    }
});
// For Dropdown
$(".navbar-nav li").hover(function () {
    $(this).children("ul").stop().delay(200).animate({height: "toggle", opacity: "toggle"}, 200);
});


$(function() {
    // Owl Carousel
    var owl = $(".banner-slider");
    owl.owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:0,
        autoplay:false,
        autoplayTimeout:2000,
    });
  });
  $(function() {
    // Owl Carousel
    var owl = $(".product-slider");
    owl.owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:30,
        autoplay:true,
        nav: true,
        autoplayTimeout:5000,
        responsive: {
            0: {
              items: 1
            },
        
            600: {
              items: 2
            },
        
            767: {
              items: 3
            }
          }
    });
  });
  $(function() {
    var owl = $(".testimonial-slider");
    owl.owlCarousel({
        center: false,
        items:3,
        loop:false,
        margin:30,
        autoplay:false,
        autoplayTimeout:2000,
        nav:false,
        responsive: {
            0: {
              items: 1
            },
        
            600: {
              items: 2
            },
        
            1024: {
              items: 3
            }
          }
    });
  });
