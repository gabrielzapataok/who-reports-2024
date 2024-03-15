gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.EOB-outcome-achievement').forEach((card, index) => {
  ScrollTrigger.create({
    trigger: card,
    animation: gsap.from(card, {
      opacity: 0,
      duration: .8,
      y: 80,
      delay: 0.18 * index,
    }),
    start: 'top 80%',
  });
});

gsap.utils.toArray('.paragraph-base-ticker .field--name-field-value').forEach((tickerNumber, index) => {
  let valorActual = parseInt(tickerNumber.textContent)
  ScrollTrigger.create({
    trigger: tickerNumber,
    animation: gsap.from(tickerNumber, {
      duration: 2,
      innerHTML: 0,
      scale: .5,
      snap: "innerHTML",
      end: parseInt(valorActual),
      color: "#cccccc",
      delay: index,
    }),
    start: 'top 80%',
  });
});

const flecha = document.querySelector('.home-executive-summary .arrow');
const trigger = {
  trigger: flecha,
  start: 'top bottom',
  end: 'bottom top',
  scrub: true,
};
gsap.set(flecha, {
  y: 120,
});
gsap.to(flecha, {
  y: 160,
  duration: 1,
  ease: 'none',
  scrollTrigger: trigger,
});