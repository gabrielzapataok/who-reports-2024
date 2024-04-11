

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





$(document).ready(function () {
    // Funcion menu
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
    // Load outcomes
    $('.EOB-outcome-achievement').each(function (i, e) {
        var linkOutcome = $('<a>', {
            text: $(e).find('.outcome-title').text(),
            href: $(e).attr("href")
        });
        $('.mega-menu-outcomes .container').append(linkOutcome)
    })
    // Mega menu dropdown
    $('#menu-working-togheter').click(function () {
        $('.mega-menu-outcomes').toggle();
        $('#menu-working-togheter .item_link').toggleClass('active')
    });
});