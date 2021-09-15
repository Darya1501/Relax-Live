const reviewsSlider = () => {
  const
    slides = document.querySelectorAll('.reviews-slider__slide'),
    arrowLeft = document.querySelector('#reviews-arrow_left'),
    arrowRight = document.querySelector('#reviews-arrow_right');

  const prevSlide = (elem, index, strclass) => {
    elem[index].classList.remove(strclass);
  };
  const nextSlide = (elem, index, strclass) => {
    elem[index].classList.add(strclass);
  };

  let currentSlide = 0;
  nextSlide(slides, currentSlide, 'reviews-slider__slide--active');
  arrowLeft.style.display = 'none';
  arrowRight.style.display = 'flex';

  arrowLeft.addEventListener('click', () => {
    if (currentSlide === slides.length - 1) arrowRight.style.display = 'flex';
    prevSlide(slides, currentSlide, 'reviews-slider__slide--active');
    currentSlide--;
    nextSlide(slides, currentSlide, 'reviews-slider__slide--active');
    if (currentSlide === 0) arrowLeft.style.display = 'none';
  });
  arrowRight.addEventListener('click', () => {
    if (currentSlide === 0) arrowLeft.style.display = 'flex';
    prevSlide(slides, currentSlide, 'reviews-slider__slide--active');
    currentSlide++;
    nextSlide(slides, currentSlide, 'reviews-slider__slide--active');
    if (currentSlide === slides.length - 1) arrowRight.style.display = 'none';
  });
};

export default reviewsSlider;
