$(document).ready(function () {

  //Datos de ejemplo
  const data = [
    'Of countries withquality strategies aligned with national health policies or plans',
    'Withquality strategies aligned  national health policies',
    'Strategies policies or plans',
  ]

  //vuelco los datos en el dropdown
  let dropdownHeader = $('.selector-header');
  let dropdowOptions = $('.selector-options');
  $('.selector-title').text(data[0]);
  data.forEach(e => {
    dropdowOptions.append('<div class="selector-option">'+e+'</div>')
  });


  //abrir/cerrar dropdown
  let dropdown = $('.selector');
  dropdownHeader.click(function() {
    dropdown.toggleClass('active');
  });


  //sleccionar un item
  $(".selector-option").click(function() {
    $(".selector-title").html($(this).text())
    dropdow.toggleClass('active');
  });

})