/**
 * ======================================
 *  MAIN WEBSITE SCRIPT (Clean Version)
 * ======================================
 *  Handles:
 *   - Page Loader
 *   - Smooth Scrolling
 *   - Navbar Active Highlight
 *   - Responsive Menu Close
 *   - CSS3 Animations
 *   - Counters
 *   - Carousels (Testimonials, Team, News, Partners)
 *   - Video Responsiveness
 *   - Progress Bars
 */

const $ = jQuery.noConflict();

/*----------------------------------------------------
  PAGE LOADER
----------------------------------------------------*/
$(window).on('load', function () {
    "use strict";
    $('#loader').fadeOut();
});

/*----------------------------------------------------
  SMOOTH PAGE SCROLLING (with jQuery Easing)
----------------------------------------------------*/
$(function () {
    "use strict";
    $('a.page-scroll').on('click', function (event) {
        const $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 68
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/*----------------------------------------------------
  NAVBAR HIGHLIGHT ON SCROLL (Bootstrap Scrollspy)
----------------------------------------------------*/
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 70
});

/*----------------------------------------------------
  CLOSE MENU WHEN ITEM IS CLICKED (Mobile Menu)
----------------------------------------------------*/
$('.navbar-collapse ul li a').on('click', function () {
    "use strict";
    $('.navbar-toggle:visible').click();
});

/*----------------------------------------------------
  CSS3 ANIMATION ON SCROLL
----------------------------------------------------*/
$('*[data-animation]').each(function () {
    const $el = $(this);
    const animationName = $el.attr('data-animation');
    const animationDelay = 'delay-' + $el.attr('data-animation-delay');

    $el.appear(function () {
        $el.addClass('animated ' + animationName + ' ' + animationDelay);
    });
});

/*----------------------------------------------------
  COUNTERS
----------------------------------------------------*/
$('.timer').countTo();

$('.counter-item').appear(function () {
    $('.timer').countTo();
}, { accY: -100 });

/*----------------------------------------------------
  TESTIMONIALS CAROUSEL
----------------------------------------------------*/
$("#testimonial-carousel").owlCarousel({
    navigation: true,
    pagination: true,
    slideSpeed: 2500,
    stopOnHover: true,
    autoPlay: 3000,
    singleItem: true,
    transitionStyle: "fade",
    navigationText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa fa-chevron-right"></i>'
    ]
});

/*----------------------------------------------------
  PRICING TABLE CAROUSEL
----------------------------------------------------*/
$(".pricing").owlCarousel({
    pagination: true,
    navigation: false,
    slideSpeed: 2500,
    stopOnHover: true,
    autoPlay: 3000,
    singleItem: false,
    items: 4,
    itemsDesktopSmall: [991, 2],
    itemsMobile: [550, 1],
    transitionStyle: "fade"
});

/*----------------------------------------------------
  LATEST NEWS CAROUSEL
----------------------------------------------------*/
$(".latest-news").owlCarousel({
    pagination: true,
    navigation: false,
    slideSpeed: 2500,
    stopOnHover: true,
    autoPlay: 4000,
    singleItem: false,
    items: 3,
    itemsDesktopSmall: [991, 2],
    itemsMobile: [550, 1],
    transitionStyle: "fade"
});

/*----------------------------------------------------
  TEAM CAROUSEL
----------------------------------------------------*/
$(".our-team").owlCarousel({
    pagination: true,
    slideSpeed: 2500,
    stopOnHover: true,
    autoPlay: 3000,
    items: 4,
    itemsDesktopSmall: [991, 2],
    itemsMobile: [550, 1],
    transitionStyle: "fade"
});

/*----------------------------------------------------
  PARTNERS / CLIENTS CAROUSEL
----------------------------------------------------*/
$(".clients").owlCarousel({
    pagination: false,
    navigation: true,
    slideSpeed: 2500,
    stopOnHover: true,
    autoPlay: 3000,
    singleItem: false,
    items: 5,
    itemsDesktopSmall: [991, 2],
    itemsMobile: [550, 1],
    transitionStyle: "fade",
    navigationText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa fa-chevron-right"></i>'
    ]
});

/*----------------------------------------------------
  RESPONSIVE VIDEOS (FitVids Plugin)
----------------------------------------------------*/
$(function () {
    $(".video").fitVids();
});

/*----------------------------------------------------
  TEAM TABS
----------------------------------------------------*/
$('#team a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
});

/*----------------------------------------------------
  PROGRESS BAR ANIMATION
----------------------------------------------------*/
$(document).ready(function () {
    "use strict";

    $('.skill-shortcode').appear(function () {
        $('.progress').each(function () {
            $('.progress-bar').css('width', function () {
                return $(this).attr('data-percentage') + '%';
            });
        });
    }, { accY: -100 });
});
