import SliderCarousel from "./plugins/sliderCarousel";
import ArrowSlider from './plugins/arrowSlider.js';

const showTooltip = () => {
  const wrapper = document.querySelector('.formula>.mobile-hide');

  if (document.documentElement.clientWidth > 1024) {
    wrapper.addEventListener('mouseover', event => {
      const item = event.target.closest('.formula-item');
      if (item) {
        item.classList.add('active-item');
        const tooltip = item.querySelector('.formula-item-popup');
        if (item.getBoundingClientRect().top < tooltip.offsetHeight + 5) {
          item.closest('.row').style.zIndex = 1;
          tooltip.classList.add('updown-popup');
          tooltip.style.bottom = `-${tooltip.offsetHeight + 10}px`;
        }
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = 1;
      }
    });

    wrapper.addEventListener('mouseout', event => {
      const item = event.target.closest('.formula-item');
      if (item) {
        item.classList.remove('active-item');
        const tooltip = item.querySelector('.formula-item-popup');
        tooltip.classList.remove('updown-popup');
        tooltip.style.bottom = `90px`;
        item.closest('.row').style.zIndex = 0;
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = 0.1;
      }
    });

    window.addEventListener('resize', () => {
      if (document.documentElement.clientWidth > 1024) return;
      showTooltip();
    });
  } else {

    const sliderElem = document.querySelector('.formula-slider-wrap');
    const slides = document.querySelectorAll('.formula-slider__slide');

    if (document.documentElement.clientWidth < 769) {
      slides[0].style.display = 'none';
      slides[7].style.display = 'none';
    } else {
      slides[0].style.display = 'block';
      slides[7].style.display = 'block';
    }

    if (sliderElem.classList.contains('activate')) return;
    sliderElem.classList.add('activate');

    const sliderCarousel = new SliderCarousel({
      main: ".formula-slider-wrap", wrap: ".formula-slider",
      next: ".slider-arrow_right-formula", prev: ".slider-arrow_left-formula",
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          slidesToShow: 1,
        },
      ],
    });
    sliderCarousel.init();

    const arrowSlider = new ArrowSlider({
      slides: 'div.formula-slider__slide',
      prev: '.slider-arrow_left-formula', next: '.slider-arrow_right-formula',
      activeClass: 'active-item'
    });
    arrowSlider.init();

    window.addEventListener('resize', showTooltip);
  }
};

export default showTooltip;
