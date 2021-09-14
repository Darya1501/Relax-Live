const activateSlider = activeSlider => {
  const slides = activeSlider.querySelectorAll('.repair-types-slider__slide'),
    arrowLeft = document.querySelector('#repair-types-arrow_left'),
    arrowRight = document.querySelector('#repair-types-arrow_right'),
    counter = document.querySelector('.slider-counter-content__current');
  document.querySelector('.slider-counter-content__total').textContent = slides.length;

  const prevSlide = (elem, index, strclass) => {
    elem[index].classList.remove(strclass);
  };
  const nextSlide = (elem, index, strclass) => {
    elem[index].classList.add(strclass);
  };

  let currentSlide = 0;
  counter.textContent = currentSlide + 1;
  nextSlide(slides, currentSlide, 'repair-types-slider__slide--active');
  arrowLeft.style.display = 'none';
  arrowRight.style.display = 'flex';

  arrowLeft.addEventListener('click', () => {
    if (currentSlide === slides.length - 1) arrowRight.style.display = 'flex';
    prevSlide(slides, currentSlide, 'repair-types-slider__slide--active');
    currentSlide--;
    counter.textContent = currentSlide + 1;
    nextSlide(slides, currentSlide, 'repair-types-slider__slide--active');
    if (currentSlide === 0) arrowLeft.style.display = 'none';
  });
  arrowRight.addEventListener('click', () => {
    if (currentSlide === 0) arrowLeft.style.display = 'flex';
    prevSlide(slides, currentSlide, 'repair-types-slider__slide--active');
    currentSlide++;
    counter.textContent = currentSlide + 1;
    nextSlide(slides, currentSlide, 'repair-types-slider__slide--active');
    if (currentSlide === slides.length - 1) arrowRight.style.display = 'none';
  });
};

const typesRepairSliders = () => {
  const slides = document.querySelectorAll('.types-repair'),
    dotsWrapper = document.querySelector('.nav-list-repair'),
    dots = Array.from(dotsWrapper.children),
    firstDot = dotsWrapper.querySelector('active');

  let currentSlide = firstDot ? dots.indexOf(firstDot) : 0;
  activateSlider(slides[currentSlide]);

  const prevSlide = (elem, index, strclass) => {
    elem[index].classList.remove(strclass);
  };
  const nextSlide = (elem, index, strclass) => {
    elem[index].classList.add(strclass);
  };

  dotsWrapper.addEventListener('click', event => {
    const target = event.target;
    if (!target.matches('.repair-types-nav__item')) return;

    prevSlide(dots, currentSlide, 'active');
    prevSlide(slides, currentSlide, 'types-repair-active');
    currentSlide = dots.indexOf(target);
    activateSlider(slides[currentSlide]);
    nextSlide(dots, currentSlide, 'active');
    nextSlide(slides, currentSlide, 'types-repair-active');
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
