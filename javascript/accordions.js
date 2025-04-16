$('.outcome-accordion-header').click(function () {
    let header = $(this)
    let body = $(this).next('.outcome-accordion-body')
    console.log(body.find('.links').height());
    
    if (!header.hasClass("close")){
        console.log("ABRIR");
        header.addClass("close")
        header.find(".fas").css("rotate","180deg")
        header.next().css('height',  `calc( ${Math.ceil(body.find('.links').height())}px + 3px) `)
    } else {
        console.log("CERRAR");
        header.removeClass("close")
        header.find(".fas").css("rotate","0deg")
        header.next().css('height', '0px')
    }
})



// Accordions for ouputs
$('.output-indicator-accordion-header').click(function () {
    let header = $(this)
    let body = $(this).next('.output-indicator-accordion-body')
    console.log(body.children().height());

    if (!header.hasClass("close")){
        console.log("ABRIR");
        header.addClass("close")
        header.find(".fas").css("rotate","180deg")
        header.next().css('height',  `calc( ${Math.ceil(body.children().height())}px + 2rem) `)
    } else {
        console.log("CERRAR");
        header.removeClass("close")
        header.find(".fas").css("rotate","0deg")
        header.next().css('height', '0px')
    }
})

