gsap.registerPlugin(ScrollTrigger);

const progressChart = $('.chart-billion-progress');
const currentValue = progressChart.css('width');
ScrollTrigger.create({
    trigger: progressChart,
    start: "top bottom",
    onEnter: function () {
        gsap.fromTo(progressChart, {
            width: "0%"
        }, {
            width: currentValue,
            duration: 1
        });
    }
})

const parallaxTL = gsap.timeline({
    scrollTrigger: {
        trigger: '.header-sections',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});
parallaxTL.fromTo(
    '.header-sections img',
    { y: '-50%' },
    { y: '0%', ease: 'none' }
);