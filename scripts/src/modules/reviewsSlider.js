import ArrowSlider from './plugins/arrowSlider.js';

const reviewsSlider = () => {
  const slider = new ArrowSlider({
    slides: '.reviews-slider__slide',
    prev: '#reviews-arrow_left', next: '#reviews-arrow_right',
    dotsWrapper: '.slider-dots', dots: '.dot-reviews',
    dotActiveClass: 'dot_active',
  });
  slider.init();
};

export default reviewsSlider;
