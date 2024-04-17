$(document).ready(function () {

    // Datos de ejemplo
    const narrativeRegionsDataTabs = [
        'Global',
        'Headquarters',
        'African Region',
        'Region of the Americas',
        'Eastern Mediterranean Region',
        'European Region',
        'South-East Asia Region',
        'Western Pacific Region',
    ]
    
    // Funcion que mueve la linea
    function setLineTabRegions(e) {
        const regionTabLine = $('.tabs-regions .line')
        const itemPosition = e.position().left;
        regionTabItems.removeClass('selected');
        regionTabLine.css('transform', `translateX(${itemPosition}px)`)
        regionTabLine.css('width', `${e.outerWidth()}px`)
        e.addClass('selected')
    }
    
    // Renderizo los datos
    narrativeRegionsDataTabs.forEach(e => {
        $('.tabs-regions').append('<div class="tab-item">' + e + '</div>')
    })
    $('.tabs-regions').append('<div class="line"></div>')
    
    // Seteo linea en tab
    const regionTabItems = $('.tabs-regions .tab-item')
    regionTabItems.on('click', function () { setLineTabRegions($(this)) })

    // Seteo linea en primer elemento
    setLineTabRegions(regionTabItems.first())

})