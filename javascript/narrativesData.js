function initializeCardCarrousel() {
    const swiper = new Swiper('.swiper', {
        loop: false,
        effect: 'coverflow',
        autoplay: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1.4,
        centeredSlides: true,
        coverflowEffect: {
            depth: 1000,
            modifier: 1,
            rotate: 0,
            scale: .8,
            slideShadows: false,
            stretch: 300,
        },
        on: {
            init: function () {
                setTimeout(() => {
                    var $slides = $('.swiper .card-result');
                    var maxHeight = 0;
                    $slides.each(function () {
                        console.log('before: '+$(this).height());
                        var slideHeight = $(this).height();
                        if (slideHeight > maxHeight) {
                            maxHeight = slideHeight;
                        }
                    });
                    $slides.each(function () {
                        $(this).height(maxHeight);
                        console.log('now: '+$(this).height());
                    });
                }, 500);
            }
        }
    })
}