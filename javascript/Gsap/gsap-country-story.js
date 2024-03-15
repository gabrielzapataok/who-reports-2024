// header parallax 

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