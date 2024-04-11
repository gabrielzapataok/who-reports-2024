$(document).ready(function () {

    
    const narrativeOutputsDataTabs = [
        'Service delivery',
        'Health workforce',
        'Governance',
        'Health information systems',
        'Emergency preparedness'
    ]
    
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
    narrativeRegionsDataTabs.forEach(e => {
        $('.tabs-regions').append('<div class="tab-item">' + e + '</div>')
    })
    $('.tabs-regions').append('<div class="line"></div>')


    const regionTabItems = $('.tabs-regions .tab-item')
    const regionTabLine = $('.tabs-regions .line')
    const regionTabItemSelected = $('.tabs-regions .tab-item.selected')
    
    // line.css('width', `${itemSelected.outerWidth()}px`)
    regionTabItems.on('click', function () {
        regionTabItems.removeClass('selected')
        $(this).addClass('selected')
        const itemPosition = $(this).position().left
        regionTabLine.css('transform', `translateX(${itemPosition}px)`)
        regionTabLine.css('width', `${$(this).outerWidth()}px`)
    })
})




