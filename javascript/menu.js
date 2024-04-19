

$(document).ready(function () {
    
    // Open close menu
    $('.button-menu').click(function () {
        $('.menu .items').css('transform', 'translateX(0%)')
    })
    $('.close-menu').click(function () {
        $('.menu .items').css('transform', 'translateX(100%)')
    })

    // Resize window
    $(window).resize(function () {
        if ($(window).width() <= 800) {
            $('.menu .items').css('transform', 'translateX(100%)')
        } else {
            $('.menu .items').css('transform', 'translateX(0%)')
        }
        $('#menu-working-togheter .mega-menu-outcomes').removeClass('d-flex');
        $('#menu-working-togheter .item_link').removeClass('active')
        $('#menu-countries .mega-menu-outcomes').removeClass('d-flex');
        $('#menu-countries .item_link').removeClass('active')
    })
    
    // Load outcomes in working together
    $('.EOB-outcome-achievement').each(function (i, e) {
        var linkOutcome = $('<a>', {
            text: $(e).find('.outcome-title').text(),
            href: $(e).attr("href")
        })
        $('.mega-menu-outcomes .container').append(linkOutcome)
    })
    
    // Dropdown working together
    $('#menu-working-togheter').click(function () {
        $('#menu-countries .mega-menu-outcomes').removeClass('d-flex');
        $('#menu-countries .item_link').removeClass('active')
        $('#menu-working-togheter .mega-menu-outcomes').toggleClass('d-flex');
        $('#menu-working-togheter .item_link').toggleClass('active')
    });

    // Dropdown working together
    $('#menu-countries .item_link').click(function () {
        $('#menu-working-togheter .mega-menu-outcomes').removeClass('d-flex');
        $('#menu-working-togheter .item_link').removeClass('active')
        $('#menu-countries .mega-menu-outcomes').toggleClass('d-flex');
        $('#menu-countries .item_link').toggleClass('active')
    });

})