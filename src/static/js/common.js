function mobileAction(){
    $('.has-sub a').on('click', function (e) {
        var $this = $(this);
        if($this.next('ul')){
            e.preventDefault();
            if($this.hasClass('active')){
                $this.next().slideDown();
                $this.removeClass('active');
                $('.has-sub ul').slideUp();
            }else{
                $('.has-sub a').removeClass('active');
                $this.addClass('active');
                $('.has-sub ul').slideUp();
                $this.next().slideDown();
            }
        }else{
            $('.has-sub a').removeClass('active');
        }


    });
    $('.header-btn').on('click', function (e) {
        var $this = $(this);
        $this.toggleClass('active');
        $('.header').toggleClass('active');
        $('body').toggleClass('scroll');
    });
    $('.header-lang__title').on('click', function (e) {
        var $this = $(this);
        $this.toggleClass('active');
        $this.next().toggleClass('active');
    });
}
// $(window).resize(function() {
//     if ($(this).width() > 992) {
//
//     }else{
//         mobileAction();
//     }
// });

if ($(window).width() > 992) {
}else{
    mobileAction();
}

if($('.hero').length > 0){
    $('.hero').each(function (e) {
        const $ths = $(this);
        if($ths.hasClass('bg-dark')){
            $('.header').addClass('dark-mode');
        }
    });}

$( '.hero-media').each(function (e) {
    const $this = $(this);
    $this.on( "mousemove", function( event ) {
        const relX = event.pageX - $(this).offset().left - 50;
        const relY = event.pageY - $(this).offset().top - 50;
        $('.hero-media__video').css({'left': relX, 'top': relY});
    });
    $this.on('mouseenter', function (e) {
        $this.find('.hero-media__video').addClass('active');
    });
    $this.on('mouseleave', function (e) {
        $this.find('.hero-media__video').removeClass('active');
    });
});
$('.play').on('click', function (e) {
    e.preventDefault();
    const $this = $(this);
    $(".hero-media__video").addClass('is-open');
    $(".hero-media__video video").attr('controls', true);
    $('video').trigger('play');
    $('.play').css('display', 'none');
    $('.video-close').addClass('active');
});
$('.video-close').on('click', function (e) {
    e.preventDefault();
    const $this = $(this);
    $(".hero-media__video video").attr('controls', false);
    $('.hero-media__video').removeClass('is-open').css({'right': '3rem', 'top': '3rem'});
    $('.video-close').removeClass('active');
    $('video').trigger('pause');
    $('.play').css('display', 'block');
});
$(document).mouseup(function (e){
    var div = $('.hero-media__video');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.removeClass('is-open');
        $('.video-close').removeClass('active');
        $(".hero-media__video video").attr('controls', false);
        $('video').trigger('pause');
        $('.play').css('display', 'block');
    }
});

$('.certificate-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    prevArrow: $('.certificate-nav .prev'),
    nextArrow: $('.certificate-nav .next'),
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]
});
$('.service-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    prevArrow: $('.service-nav .prev'),
    nextArrow: $('.service-nav .next'),
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: "unslick"
        },
    ]
});
$('.reviews-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    prevArrow: $('.reviews-nav .prev'),
    nextArrow: $('.reviews-nav .next'),
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]
});
$('.work-slider').slick({
    infinite: true,
    autoplaySpeed:3300,
    variableWidth: true,

});
AOS.init({disable: 'mobile'});

//
// $('.header-btn').on('click', function (e) {
//     var $this = $(this);
//     $this.toggleClass('active');
//     $('.header').toggleClass('active');
// });
// $('.header-logo a, .footer-logo a').on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: 0
//     }, 1000);
//     return false;
// });
//
//
// if($('.hero').length > 0 ){
//
// }else{
//     $('.header').addClass('header-page')
// }
// $(window).on('scroll', function() {
//     var $this = $(this),
//         $header = $('.header');
//     if ($this.scrollTop() > 1) {
//         $header.addClass('scroll-nav');
//     }
//     else{
//         $header.removeClass('scroll-nav');
//     }
// });
// $('.header-nav a, .header .btn-primary').on('click', function (e) {
//
//     var ths = $(this);
//     var thsId = ths.data('id');
//
//     if($('.hero').length > 0 ){
//         if ($(ths).data('id')) {
//             e.preventDefault();
//             $('html, body').animate({
//                 scrollTop: $('#'+thsId).offset().top - 120
//             }, 1000);
//             $('.header, .header-btn').removeClass('active');
//             return false;
//         }
//     }
//
// });
// $('.courses-slider').slick({
//     dots: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     prevArrow: $('.courses-slider-prev'),
//     nextArrow: $('.courses-slider-next'),
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // responsive: [
//     //     {
//     //         breakpoint: 9999,
//     //         settings: "unslick"
//     //     },
//     //     {
//     //         breakpoint: 992,
//     //         settings: {
//     //             slidesToShow: 3,
//     //             slidesToScroll: 1,
//     //
//     //         }
//     //     },
//     //     {
//     //         breakpoint: 768,
//     //         settings: {
//     //             slidesToShow: 2,
//     //             slidesToScroll: 1
//     //         }
//     //     },
//     //     {
//     //         breakpoint: 576,
//     //         settings: {
//     //             slidesToShow: 1,
//     //             slidesToScroll: 1
//     //         }
//     //     },
//     // ]
// });
// // $('.courses-slider').on('beforeChange', function() {
// //     $('.courses-item__button .btn-icon, .courses-item__button .btn-primary, .courses-item__image, .courses-item__link, .courses-item__title, .courses-item__subtitle, .courses-item__list li').removeClass("aos-animate");
// //     })
// //     .on('afterChange', function(event, slick, currentSlide) {
// //         $('.courses-item__button .btn-icon, .courses-item__button .btn-primary, .courses-item__image, .courses-item__link, .courses-item__title, .courses-item__subtitle, .courses-item__list li').addClass("aos-animate");
// //     });
// $('.reviews-slider').slick({
//     dots: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     prevArrow: $('.reviews-prev'),
//     nextArrow: $('.reviews-next'),
//     appendDots: $('.reviews-dots'),
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     // responsive: [
//     //     {
//     //         breakpoint: 9999,
//     //         settings: "unslick"
//     //     },
//     //     {
//     //         breakpoint: 992,
//     //         settings: {
//     //             slidesToShow: 3,
//     //             slidesToScroll: 1,
//     //
//     //         }
//     //     },
//     //     {
//     //         breakpoint: 768,
//     //         settings: {
//     //             slidesToShow: 2,
//     //             slidesToScroll: 1
//     //         }
//     //     },
//     //     {
//     //         breakpoint: 576,
//     //         settings: {
//     //             slidesToShow: 1,
//     //             slidesToScroll: 1
//     //         }
//     //     },
//     // ]
// });
// // $('.reviews-slider').on('beforeChange', function() {
// //     $('.courses-item__button .btn-icon, .courses-item__button .btn-primary, .courses-item__image, .courses-item__link, .courses-item__title, .courses-item__subtitle, .courses-item__list li').removeClass("aos-animate");
// //     })
// //     .on('afterChange', function(event, slick, currentSlide) {
// //         $('.courses-item__button .btn-icon, .courses-item__button .btn-primary, .courses-item__image, .courses-item__link, .courses-item__title, .courses-item__subtitle, .courses-item__list li').addClass("aos-animate");
// //     });
//
//
// $('.header-lang span').on('click', function (e) {
//    e.preventDefault();
//    var ths = $(this);
//    ths.parent().toggleClass('active');
// });
// $('.header-lang a').on('click', function (e) {
//     $('.header-lang').removeClass('active');
// });
//
// $(document).mouseup(function (e){
//     var div = $('.header-lang');
//     if (!div.is(e.target)
//         && div.has(e.target).length === 0) {
//         div.removeClass('active');
//     }
// });
// $('.numbers-item__number .counter-numb').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 4000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });
