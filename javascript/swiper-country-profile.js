const swiper = new Swiper('.swiper', {
    loop: true,
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
    slidesPerView: 2,
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
            var slides = document.querySelectorAll('.swiper-slide .card-result');
            var maxHeight = 0;
            slides.forEach(function (slide) {
                console.log(slide);
                var slideHeight = slide.clientHeight;
                if (slideHeight > maxHeight) {
                    maxHeight = slideHeight;
                }
            });
            slides.forEach(function (slide) {
                slide.style.height = maxHeight + 'px';
            });
        }
    }
})