const porfolioSliders = () => {
  const portfolio = document.querySelector('.portfolio');

  if (document.documentElement.clientWidth > 576) {
    const
      arrowRight = document.querySelector('#portfolio-arrow_right'),
      arrowLeft = document.querySelector('#portfolio-arrow_left'),
      slides = document.querySelectorAll('.portfolio-slider__slide');

    let centerSlide = 1;
    arrowLeft.addEventListener('click', () => {
      if (centerSlide === slides.length - 3) arrowRight.style.display = 'flex';
      slides[centerSlide - 2].style.display = 'flex';
      centerSlide--;
      if (centerSlide === 1) arrowLeft.style.display = 'none';
    });
    arrowRight.addEventListener('click', () => {
      if (centerSlide === 2) arrowLeft.style.display = 'flex';
      slides[centerSlide - 1].style.display = 'none';
      centerSlide++;
      if (centerSlide === slides.length - 2) arrowRight.style.display = 'none';
    });
  } else {
    const
      wrapper = document.querySelector('.portfolio-slider-mobile'),
      slides = wrapper.querySelectorAll('.portfolio-slider__slide-frame'),
      arrowLeft = document.querySelector('#portfolio-arrow-mobile_left'),
      arrowRight = document.querySelector('#portfolio-arrow-mobile_right'),
      currentCounter = portfolio.querySelector('.slider-counter-content__current'),
      sliderCounter = portfolio.querySelector('.slider-counter-content__total');

    sliderCounter.textContent = slides.length;

    const prevSlide = (elem, index, strclass) => {
      elem[index].classList.remove(strclass);
    };
    const nextSlide = (elem, index, strclass) => {
      elem[index].classList.add(strclass);
    };

    let currentSlide = 0;
    currentCounter.textContent = currentSlide + 1;
    nextSlide(slides, currentSlide, 'portfolio-slider__slide-frame--active');
    arrowLeft.style.display = 'none';
    arrowRight.style.display = 'flex';

    arrowLeft.addEventListener('click', () => {
      if (currentSlide === slides.length - 1) arrowRight.style.display = 'flex';
      prevSlide(slides, currentSlide, 'portfolio-slider__slide-frame--active');
      currentSlide--;
      currentCounter.textContent = currentSlide + 1;
      nextSlide(slides, currentSlide, 'portfolio-slider__slide-frame--active');
      if (currentSlide === 0) arrowLeft.style.display = 'none';
    });
    arrowRight.addEventListener('click', () => {
      if (currentSlide === 0) arrowLeft.style.display = 'flex';
      prevSlide(slides, currentSlide, 'portfolio-slider__slide-frame--active');
      currentSlide++;
      currentCounter.textContent = currentSlide + 1;
      nextSlide(slides, currentSlide, 'portfolio-slider__slide-frame--active');
      if (currentSlide === slides.length - 1) arrowRight.style.display = 'none';
    });
  }

  const
    popup = document.querySelector('.popup-portfolio'),
    closeButtons = popup.querySelectorAll('.close');

  portfolio.addEventListener('click', event => {
    if (event.target.matches('.portfolio-slider__slide-frame')) {
      popup.style.visibility = 'visible';
    }
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      popup.style.visibility = 'hidden';
    });
  });

  const
    slides = document.querySelectorAll('.popup-portfolio-slider__slide'),
    arrowLeft = document.querySelector('#popup_portfolio_left'),
    arrowRight = document.querySelector('#popup_portfolio_right'),
    currentCounter = popup.querySelector('.slider-counter-content__current'),
    sliderCounter = popup.querySelector('.slider-counter-content__total'),
    slideTexts = document.querySelectorAll('.popup-portfolio-text');

  sliderCounter.textContent = slides.length;

  const prevSlide = (elem, index, strclass) => {
    elem[index].classList.remove(strclass);
  };
  const nextSlide = (elem, index, strclass) => {
    elem[index].classList.add(strclass);
  };

  let currentSlide = 0;
  currentCounter.textContent = currentSlide + 1;
  nextSlide(slides, currentSlide, 'popup-portfolio-slider__slide--active');
  nextSlide(slideTexts, currentSlide, 'popup-portfolio-text--active');
  arrowLeft.style.display = 'none';
  arrowRight.style.display = 'flex';

  arrowLeft.addEventListener('click', () => {
    if (currentSlide === slides.length - 1) arrowRight.style.display = 'flex';
    prevSlide(slides, currentSlide, 'popup-portfolio-slider__slide--active');
    prevSlide(slideTexts, currentSlide, 'popup-portfolio-text--active');
    currentSlide--;
    currentCounter.textContent = currentSlide + 1;
    nextSlide(slides, currentSlide, 'popup-portfolio-slider__slide--active');
    nextSlide(slideTexts, currentSlide, 'popup-portfolio-text--active');
    if (currentSlide === 0) arrowLeft.style.display = 'none';
  });
  arrowRight.addEventListener('click', () => {
    if (currentSlide === 0) arrowLeft.style.display = 'flex';
    prevSlide(slides, currentSlide, 'popup-portfolio-slider__slide--active');
    prevSlide(slideTexts, currentSlide, 'popup-portfolio-text--active');
    currentSlide++;
    currentCounter.textContent = currentSlide + 1;
    nextSlide(slides, currentSlide, 'popup-portfolio-slider__slide--active');
    nextSlide(slideTexts, currentSlide, 'popup-portfolio-text--active');
    if (currentSlide === slides.length - 1) arrowRight.style.display = 'none';
  });

  window.addEventListener('resize', porfolioSliders);
};

export default porfolioSliders;
