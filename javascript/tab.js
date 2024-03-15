$(document).ready(function() {
    const items = $('.menu-item');
    const line = $('.line');
    const itemSelected = $('.menu-item.selected');
    line.css('width', `${itemSelected.outerWidth()}px`);
    items.on('click', function() {
        items.removeClass('selected');
        $(this).addClass('selected');
        const itemPosition = $(this).position().left;
        line.css('transform', `translateX(${itemPosition}px)`);
        line.css('width', `${$(this).outerWidth()}px`);
    });
    $(".all-dashboards > * ").hide();
    $(".tab li").click(function() {
        var id = $(this).attr("id");
        console.log(id)
        $(".all-dashboards > * ").hide();
        $(".all-dashboards").find($("." + id)).show();
    });
});

