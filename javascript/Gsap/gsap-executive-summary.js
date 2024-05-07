// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray('.card').forEach((card, index) => {
//   ScrollTrigger.create({
//     trigger: card,
//     animation: gsap.from(card, {
//       opacity: 0,
//       duration: .8,
//       y: 80,
//       delay: 0.18 * index,
//     }),
//     start: 'top 80%',
//   });
// });

// header parallax 

// const parallaxTL = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.header-section',
//     start: 'top bottom',
//     end: 'bottom top',
//     scrub: true
//   }
// });
// parallaxTL.fromTo(
//   '.header-section img',
//   { y: '-50%' },
//   { y: '0%', ease: 'none' }
// );


// billions bar

// const progressCharts = $('.chart-billion-progress');

// progressCharts.each(function() {
//   const chart = $(this);
//   const currentValue = $(this).css('width');

//   function animateChart() {
//     gsap.fromTo(chart, {
//       width: "0%"
//     }, {
//       width: currentValue,
//       duration: 1
//     });
//   }
//   ScrollTrigger.create({
//     trigger: chart,
//     start: "top 100%",
//     onEnter: () => animateChart()
//   });
// });

// Parallax billions

// function animateBillElements() {
//   gsap.utils.toArray('.billion img').forEach(function(bill) {
//     console.log(bill);
//     gsap.fromTo(bill, {
//       y: '-50%'
//     }, {
//       y: '-0%',
//       duration: 1.5,
//       ease: 'none',
//       scrollTrigger: {
//         trigger: bill,
//         start: 'top bottom',
//         end: 'bottom top',
//         toggleActions: 'play none none reverse',
//         scrub: true 
//       }
//     });
//   });
// }
// animateBillElements();








var progressCharts1 = $('.b-one .chart-billion-progress');
ScrollTrigger.create({
  trigger: progressCharts1,
  start: "top 100%",
  onEnter: () => {
    gsap.set($('.progress-spare'),{
      width: "0%",
    })
    gsap.set($('.b-one'),{
      width: "60%",
    })
    gsap.set(progressCharts1,{
      width: "0%",
    })
    gsap.fromTo(progressCharts1, {
      width: "0%",
    }, {
      width: "100%",
      duration: 1,
      onComplete: () => {
        gsap.fromTo($('.b-one'),{
          width: "60%"
        },{
          width: 60*1.26 + "%",
          duration: 3,
        })
        gsap.to(progressCharts1,{
          width: 100/1.26 + "%",
          duration: 3,
        })
        gsap.fromTo($('.progress-spare'),{
          width: "0%",
        },{
          width: "26%",
          duration: 3,
        })
      }
    });
  }
});


var progressCharts2 = $('.b-two .chart-billion-progress');
var valueProgressCharts2 = progressCharts2.width();
ScrollTrigger.create({
  trigger: progressCharts2,
  start: "top 100%",
  onEnter: () => {
    gsap.fromTo(progressCharts2, {
      width: "0%"
    }, {
      width: valueProgressCharts2,
      duration: 1
    });
  }
});


var progressCharts3 = $('.b-three .chart-billion-progress');
var valueProgressCharts3 = progressCharts3.width();
ScrollTrigger.create({
  trigger: progressCharts3,
  start: "top 100%",
  onEnter: () => {
    gsap.fromTo(progressCharts3, {
      width: "0%"
    }, {
      width: valueProgressCharts3,
      duration: 1
    });
  }
});




// Billion 1
ScrollTrigger.create({
  trigger: $('.b-1 .chart-billion-bg'),
  start: "top 100%",
  onEnter: () => {
    renderB1Chart()
  }
});
// Billion 2
ScrollTrigger.create({
  trigger: $('.b-2 .chart-billion-bg'),
  start: "top 100%",
  onEnter: () => {
    renderB2Chart()
  }
});
// Billion 3
ScrollTrigger.create({
  trigger: $('.b-3 .chart-billion-bg'),
  start: "top 100%",
  onEnter: () => {
    renderB3Chart()
  }
});