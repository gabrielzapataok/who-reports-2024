

$(document).ready(function () {
    $('.button-menu').click(function () {
        $('.menu .items').css('transform', 'translateX(0%)');
    });
    $('.close-menu').click(function () {
        $('.menu .items').css('transform', 'translateX(100%)');
    });
    $(window).resize(function () {
        if ($(window).width() <= 800) {
            $('.menu .items').css('transform', 'translateX(100%)');
        } else {
            $('.menu .items').css('transform', 'translateX(0%)');
        }
    });
});