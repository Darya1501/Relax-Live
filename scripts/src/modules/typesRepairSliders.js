const typesRepairSliders = () => {
  const
    slides = document.querySelectorAll('.types-repair'),
    dotsWrapper = document.querySelector('.nav-list-repair'),
    dots = Array.from(dotsWrapper.children),
    firstDot = dotsWrapper.querySelector('active');

  const
    insideArrowLeft = document.querySelector('#repair-types-arrow_left'),
    insideArrowRight = document.querySelector('#repair-types-arrow_right'),
    currentCounter = document.querySelector('.slider-counter-content__current'),
    sliderCounter = document.querySelector('.slider-counter-content__total');

  let
    currentSlide = firstDot ? dots.indexOf(firstDot) : 0,
    activeSlider = slides[currentSlide],
    insideSlides = Array.from(activeSlider.querySelectorAll('.repair-types-slider__slide')),
    firstInsideSlide = activeSlider.querySelector('repair-types-slider__slide--active'),
    currentInsideSlide = firstInsideSlide ? insideSlides.indexOf(firstInsideSlide) : 0;

  const prevSlide = (elem, index, strclass) => {
    elem[index].classList.remove(strclass);
  };
  const nextSlide = (elem, index, strclass) => {
    elem[index].classList.add(strclass);
  };

  if (currentInsideSlide !== 0) {
    prevSlide(insideSlides, currentInsideSlide, 'repair-types-slider__slide--active');
    currentInsideSlide = 0;
  }
  currentCounter.textContent = currentInsideSlide + 1;
  nextSlide(insideSlides, currentInsideSlide, 'repair-types-slider__slide--active');
  insideArrowLeft.style.display = 'none';
  insideArrowRight.style.display = 'flex';
  sliderCounter.textContent = insideSlides.length;

  dotsWrapper.addEventListener('click', event => {
    const target = event.target;
    if (!target.matches('.repair-types-nav__item')) return;

    prevSlide(dots, currentSlide, 'active');
    prevSlide(slides, currentSlide, 'types-repair-active');
    currentSlide = dots.indexOf(target);
    nextSlide(dots, currentSlide, 'active');
    nextSlide(slides, currentSlide, 'types-repair-active');

    activeSlider = slides[currentSlide];
    insideSlides = Array.from(activeSlider.querySelectorAll('.repair-types-slider__slide'));
    sliderCounter.textContent = insideSlides.length;
    firstInsideSlide = activeSlider.querySelector('.repair-types-slider__slide--active');
    currentInsideSlide = firstInsideSlide ? insideSlides.indexOf(firstInsideSlide) : 0;
    if (currentInsideSlide !== 0) {
      prevSlide(insideSlides, currentInsideSlide, 'repair-types-slider__slide--active');
      currentInsideSlide = 0;
    }
    currentCounter.textContent = currentInsideSlide + 1;
    nextSlide(insideSlides, currentInsideSlide, 'repair-types-slider__slide--active');
    insideArrowLeft.style.display = 'none';
    insideArrowRight.style.display = 'flex';
  });

  insideArrowLeft.addEventListener('click', () => {
    if (currentInsideSlide === insideSlides.length - 1) insideArrowRight.style.display = 'flex';
    prevSlide(insideSlides, currentInsideSlide, 'repair-types-slider__slide--active');
    currentInsideSlide--;
    currentCounter.textContent = currentInsideSlide + 1;
    nextSlide(insideSlides, currentInsideSlide, 'repair-types-slider__slide--active');
    if (currentInsideSlide === 0) insideArrowLeft.style.display = 'none';
  });
  insideArrowRight.addEventListener('click', () => {
    if (currentInsideSlide === 0) insideArrowLeft.style.display = 'flex';
    prevSlide(insideSlides, currentInsideSlide, 'repair-types-slider__slide--active');
    currentInsideSlide++;
    currentCounter.textContent = currentInsideSlide + 1;
    nextSlide(insideSlides, currentInsideSlide, 'repair-types-slider__slide--active');
    if (currentInsideSlide === insideSlides.length - 1) insideArrowRight.style.display = 'none';
  });

  if (document.documentElement.clientWidth <= 1024) {
    const arrowLeft = document.querySelector('#nav-arrow-repair-left_base'),
      arrowRight = document.querySelector('#nav-arrow-repair-right_base'),
      wrapper = document.querySelector('.repair-types-nav');

    dotsWrapper.style.transform = 'translateX(50px)';
    let currentPosition = 0;

    const prevSlider = () => {
      if (currentPosition > 1) {
        --currentPosition;
        dotsWrapper.style.transform = `translateX(-${currentPosition * 200}px)`;
      } else {
        dotsWrapper.style.transform = 'translateX(50px)';
      }
    };

    const nextSlider = () => {
      if ((currentPosition) * 200 < dotsWrapper.offsetWidth - wrapper.offsetWidth) {
        ++currentPosition;
        dotsWrapper.style.transform = `translateX(-${currentPosition * 200 + 50}px)`;
      }
    };

    arrowLeft.addEventListener('click', () => prevSlider());
    arrowRight.addEventListener('click', () => nextSlider());
  }
};

export default typesRepairSliders;
