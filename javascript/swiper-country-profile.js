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
            var slides = document.querySelectorAll('.swiper-slide .card-result');
            var maxHeight = 0;
            var normalice = false;
            setTimeout(() => {
                slides.forEach(function (slide) {
                    var slideHeight = slide.clientHeight;
                    if (slideHeight > maxHeight) {
                        maxHeight = slideHeight;
                    }
                    
                });
                slides.forEach(function (slide) {
                    slide.style.height = maxHeight + 'px';
                });
            }, 500);
        }
    }
})