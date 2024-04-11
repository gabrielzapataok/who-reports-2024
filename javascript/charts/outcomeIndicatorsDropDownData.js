$(document).ready(function () {

    //Datos de ejemplo
    const outcomeIndicatorsDropDownData = [
        'Of countries withquality strategies aligned with national health policies or plans',
        'Withquality strategies aligned  national health policies',
        'Strategies policies or plans',
    ]

    const selector = $('.selector-outcome-indicator')
    console.log(selector);

    //vuelco los datos en el dropdown
    $(selector).find('.selector-title').text(outcomeIndicatorsDropDownData[0]);
    outcomeIndicatorsDropDownData.forEach(e => {
        $(selector).find('.selector-options').append('<div class="selector-option">' + e + '</div>')
    });


    //abrir/cerrar dropdown
    $(selector).find('.selector-header').click(function () {
        $(selector).toggleClass('active');
    });


    //sleccionar un item
    $(selector).find(".selector-option").click(function () {
        $(selector).find('.selector-title').html($(this).text())
        $(selector).toggleClass('active');
    });

})