$('.read-more').each(function (i,button) {
    $(button).click(function () {
        if ($(this).hasClass('active')) {
            $(this).siblings('p').addClass('text-collapsed')
            $(this).removeClass('active')
            $(this).text('Read more')
        } else {
            $(this).siblings('p').removeClass('text-collapsed')
            $(this).addClass('active')
            $(this).text('Read less')
        }
    })
})