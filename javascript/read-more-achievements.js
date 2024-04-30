$(document).ready(function () {
    $('.EOB-fact').each(function (i, fact) {
        $(fact).children().not(".fact-title-container").wrapAll("<div class='content'></div>")
        var button = $('<button class="bg-transparent border-0 b-600 px-0 py-10 read-more">Read more</button>');
        $(fact).append(button)
        button.click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
                $(this).text('Read more')
                $(fact).find(".content").removeClass('text-expanded')
            } else {
                $(this).addClass('active')
                $(this).text('Read less')
                $(fact).find(".content").addClass('text-expanded')
            }
        })
    })
})