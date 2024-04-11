$(document).ready(function () {

    // Datos de ejemplo
    const narrativeOutputsDataTabs = [
        'Service delivery',
        'Health workforce',
        'Governance',
        'Health information systems',
        'Emergency preparedness'
    ]
    
    // Funcion que mueve la linea
    function setLine(e) {
        const outputTabLine = $('.tabs-outputs .line')
        const itemPosition = e.position().left;
        outputTabItems.removeClass('selected');
        outputTabLine.css('transform', `translateX(${itemPosition}px)`)
        outputTabLine.css('width', `${e.outerWidth()}px`)
        e.addClass('selected')
    }
    
    // Renderizo los datos
    narrativeOutputsDataTabs.forEach(e => {
        $('.tabs-outputs').append('<div class="tab-item">' + e + '</div>')
    })
    $('.tabs-outputs').append('<div class="line"></div>')
    
    // Seteo linea en tab
    const outputTabItems = $('.tabs-outputs .tab-item')
    outputTabItems.on('click', function () { setLine($(this)) })

    // Seteo linea en primer elemento
    setLine(outputTabItems.first())

})