/**
 * 滾動視差泡泡效果
 * 讓泡泡在滾動時產生明顯的視差移動效果
 */

$(document).ready(function() {
    // 滾動視差效果
    $(window).on('scroll', function() {
        const scrolled = $(window).scrollTop();
        const rate = scrolled * -0.5; // 視差速度係數
        
        // 主要泡泡視差效果
        $('.services-item-area::before, .services-item-area::after').css({
            'transform': 'translateY(' + rate + 'px)'
        });
        
        // 裝飾泡泡視差效果（不同速度創造層次感）
        $('.bubble-1').css({
            'transform': 'translateY(' + (rate * 0.3) + 'px)'
        });
        
        $('.bubble-2').css({
            'transform': 'translateY(' + (rate * 0.7) + 'px)'
        });
        
        $('.bubble-3').css({
            'transform': 'translateY(' + (rate * 0.4) + 'px)'
        });
        
        $('.bubble-4').css({
            'transform': 'translateY(' + (rate * 0.6) + 'px)'
        });
    });
    
    // 使用CSS變數來實現視差效果
    $(window).on('scroll', function() {
        const scrolled = $(window).scrollTop();
        const windowHeight = $(window).height();
        const sectionTop = $('.services-item-area').offset().top;
        const sectionHeight = $('.services-item-area').outerHeight();
        
        // 計算視差偏移量
        const parallaxOffset = (scrolled - sectionTop + windowHeight) * 0.3;
        
        // 設置CSS變數
        document.documentElement.style.setProperty('--parallax-offset', parallaxOffset + 'px');
    });
});
