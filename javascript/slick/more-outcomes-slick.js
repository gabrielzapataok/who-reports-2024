if(1===1){
    $(".more-outcomes-slick").removeClass("grid-cards");
    $(".more-outcomes-slick").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 300,
        prevArrow: '<button class="button-transparent prevArrow"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="button-transparent nextArrow"><i class="fa fa-angle-right"></i></button>',
        autoplaySpeed: 2000,
        autoplay: true,
        responsive: [{
            breakpoint: 1080,
            settings: {
                slidesToShow: 2,
            }
        },{
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
}