import ArrowSlider from './plugins/arrowSlider.js';

const serviceSlider = () => {

  if (document.documentElement.clientWidth < 576) {
    const sliderElem = document.querySelector('.services-slider');
    if (sliderElem.classList.contains('activate')) return;
    sliderElem.classList.add('activate');
    const slider = new ArrowSlider({
      slides: '.services-slider__slide',
      autoPlay: true, infinity: true
    });
    slider.init();
  }

  window.addEventListener('resize', serviceSlider);
};

export default serviceSlider;
