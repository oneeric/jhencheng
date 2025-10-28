$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });

    //===== Mobile Menu 

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass('active');
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");

    if (subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fal fa-angle-down"></i> </button>';
        });

        var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");

        subMenuToggler.on('click', function () {
            $(this).parent().parent().children(".sub-menu").slideToggle();
            return false
        });

    }

    
    
    
    //===== Isotope Project 1
    
    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
        // options
            transitionDuration: '1s'
        });
        
        // filter items on button click
        $('.project-menu ul').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
        
        //for menu active class
        $('.project-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });

    //===== plans slide js
    $('.plans-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.plans-item-slide'
    });
    $('.plans-item-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.plans-slider',
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
        }
      ]
    });

    //===== sub slick slider
    $('.sub-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2800,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
        }
      ]
    });


    
    
    //====== Magnific Popup
    
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //===== Magnific Popup
    
    // 初始化燈箱功能
    function initMagnificPopup() {
        $('.image-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }
    
    // 立即初始化
    initMagnificPopup();
    
    // 監聽動態內容變化，重新初始化燈箱
    $(document).on('DOMNodeInserted', function(e) {
        if ($(e.target).find('.image-popup').length > 0) {
            initMagnificPopup();
        }
    });
    
    // 確保在頁面完全載入後重新初始化燈箱
    $(window).on('load', function() {
        setTimeout(function() {
            initMagnificPopup();
        }, 100);
    });


    //===== counter up
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    
    
    // Progress Bar
    if ($('.progress-line').length) {
        $('.progress-line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }
    if ($('.count-box').length) {
        $('.count-box').appear(function () {
            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }

        }, {
            accY: 0
        });
    }


    
    
    // Go to Top
    
    // Scroll Event
    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });

    // Click Event
    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 1200);
    });






    //===== circleProgress

    $('#circle1').circleProgress({
        value: 0.90,
        size: 150,
        lineCap: "round",
        emptyFill: "#f1f9ff",
        thickness: "7",
        fill: {
            gradient: ["#0065df" ,"#0044b5"]
        }
    });
    $('#circle2').circleProgress({
        value: 0.57,
        size: 150,
        lineCap: "round",
        emptyFill: "#f1f9ff",
        thickness: "7",
        fill: {
            gradient: ["#0065df" ,"#0044b5"]
        }
    });
    $('#circle3').circleProgress({
        value: 0.87,
        size: 150,
        lineCap: "round",
        emptyFill: "#f1f9ff",
        thickness: "7",
        fill: {
            gradient: ["#0065df" ,"#0044b5"]
        }
    });


    //===== circleProgress

    $('#circle4').circleProgress({
        value: 0.90,
        size: 150,
        lineCap: "round",
        emptyFill: "#f1f9ff",
        thickness: "7",
        fill: {
            gradient: ["#ff5d22" ,"#ff5d22"]
        }
    });
    $('#circle5').circleProgress({
        value: 0.57,
        size: 150,
        lineCap: "round",
        emptyFill: "#f1f9ff",
        thickness: "7",
        fill: {
            gradient: ["#ff5d22" ,"#ff5d22"]
        }
    });
    $('#circle6').circleProgress({
        value: 0.87,
        size: 150,
        lineCap: "round",
        emptyFill: "#f1f9ff",
        thickness: "7",
        fill: {
            gradient: ["#ff5d22" ,"#ff5d22"]
        }
    });


    
    //===== WOW animation
    
    new WOW().init();



    
    
    //===== 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});