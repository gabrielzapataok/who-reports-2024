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
        $('#menu-working-togheter .mega-menu').removeClass('d-flex')
        $('#menu-working-togheter .item_link').removeClass('active')
        $('#menu-countries .mega-menu').removeClass('d-flex')
        $('#menu-countries .item_link').removeClass('active')
    })
    
    
    // Dropdown working together
    $('#menu-working-togheter .item_link').click(function () {
        console.log("click")
        $('#menu-working-togheter').toggleClass('active')
        $('#menu-countries').removeClass('active')
        $('#menu-countries .mega-menu').removeClass('d-flex');
        $('#menu-countries .item_link').removeClass('active')
        $('#menu-working-togheter .mega-menu').toggleClass('d-flex')
        $('#menu-working-togheter .item_link').toggleClass('active')
    });

    // Dropdown countries
    $('#menu-countries .item_link').click(function () {
        $('#menu-countries').toggleClass('active')
        $('#menu-working-togheter').removeClass('active')
        $('#menu-working-togheter .mega-menu').removeClass('d-flex')
        $('#menu-working-togheter .item_link').removeClass('active')
        $('#menu-countries .mega-menu').toggleClass('d-flex')
        $('#menu-countries .item_link').toggleClass('active')
    });
    
    // Cerrar mega menu si clickeo fuera
    $(document).click(function(event) {
        if (!$(event.target).closest('.menu').length) {
            $('#menu-countries').removeClass('active')
            $('#menu-working-togheter').removeClass('active')
            $('#menu-countries .mega-menu').removeClass('d-flex');
            $('#menu-countries .item_link').removeClass('active')
            $('#menu-working-togheter .mega-menu').removeClass('d-flex');
            $('#menu-working-togheter .item_link').removeClass('active')
        }
    })

})



// Load outcomes in menu
$(document).ready(function () {
    $('.outcome-list-container .outcome-list li').each(function (i, e) { 
        var linkOutcome = $(`
            <a href='${$(e).attr("data-outcome-url")}'>
                <b>Outcome ${$(e).attr("data-outcome-code")}</b>
                ${$(e).text()}
            </a>`, {
        })
        $('#menu-working-togheter .dropdown-items').append(linkOutcome)
    })
})


// Load outcomes in menu in home
$(document).ready(function () {
    $('.EOB-outcome-achievements a').each(function (i, e) { 
        var linkOutcome = $(`
            <a href='${$(e).attr("href")}'>
                <b>Outcome ${$(e).find('.outcome-code').text()}</b>
                ${$(e).find('.outcome-title').text()}
            </a>`, {
        })
        $('#menu-working-togheter .dropdown-items').append(linkOutcome)
    })
})


