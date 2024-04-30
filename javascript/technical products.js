var technicalProductsList = {};

function initializeTPS() {

    var apiUrl = "https://frontdoor-l4uikgap6gz3m.azurefd.net/PB_PAGE/EXT_TPS_FOR_MTR?$select=BIENNIUM%2CPHASE%2CORG_CODE%2CID_PRODUCT%2CTITLE%2COUTCOME%2COUTPUT%2CURL&$filter=OUTCOME%20eq%20%27" + currentOutcome.code + "%27";

    $.getJSON(apiUrl, function(data) {

        data.value.forEach(function(item) {
            if (!technicalProductsList[item.OUTPUT]) {
                technicalProductsList[item.OUTPUT] = [];
            }
            technicalProductsList[item.OUTPUT].push(item);
        });

        console.log(technicalProductsList);
        renderTechnicalProducts();

    });

}

function renderTechnicalProducts() {
    let tps = technicalProductsList[currentOutput];
    $('.technical-products').empty();
    $(".page-section-technical-products").hide();
    if (tps && currentRegion === 'HQ') {
        $.each(tps, function(index, item) {
            var $li = $('<li class="flex align-items-center"></li>');
            var $icon = $('<i class="fas fa-link mx-10"></i>');
            var $link = $('<a></a>').attr('href', item.URL).attr("target", "_blank").text(item.TITLE);
            $li.append($icon, $link);
            $('.technical-products').append($li);
        });
        $(".page-section-technical-products").show();
        if ($('.technical-products li').length > 5) { // Corregido 'leght' a 'length'
            var button = $('<button class="bg-transparent border-0 b-600 px-0 py-10">Show more</button>');
            $('.technical-products li:gt(4)').hide();
            $('.technical-products').append(button);
            button.click(function () {
                if ($(this).hasClass('active')) {
                    $('.technical-products li:gt(4)').hide(); // Oculta solo los elementos después del quinto
                    $(this).removeClass('active');
                    $(this).text('Show more');
                } else {
                    $('.technical-products li').show(); // Muestra todos los elementos ocultos
                    $(this).addClass('active');
                    $(this).text('Show less');
                }
            });
        }
    }
}