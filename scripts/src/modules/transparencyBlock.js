import togglePopup from "./togglePopup";

const transparencyBlock = () => {
  togglePopup('.popup-transparency', '.transparency-item__img', '.close');

  const
    popup = document.querySelector('.popup-transparency'),
    slides = document.querySelectorAll('.popup-transparency-slider__slide'),
    arrowLeft = document.querySelector('#transparency_left'),
    arrowRight = document.querySelector('#transparency_right'),
    currentCounter = popup.querySelector('.slider-counter-content__current'),
    sliderCounter = popup.querySelector('.slider-counter-content__total');

  sliderCounter.textContent = slides.length;

  const prevSlide = (elem, index, strclass) => {
    elem[index].classList.remove(strclass);
  };
  const nextSlide = (elem, index, strclass) => {
    elem[index].classList.add(strclass);
  };

  let currentSlide = 0;
  currentCounter.textContent = currentSlide + 1;
  nextSlide(slides, currentSlide, 'popup-transparency-slider__slide--active');
  arrowLeft.style.display = 'none';
  arrowRight.style.display = 'flex';

  arrowLeft.addEventListener('click', () => {
    if (currentSlide === slides.length - 1) arrowRight.style.display = 'flex';
    prevSlide(slides, currentSlide, 'popup-transparency-slider__slide--active');
    currentSlide--;
    currentCounter.textContent = currentSlide + 1;
    nextSlide(slides, currentSlide, 'popup-transparency-slider__slide--active');
    if (currentSlide === 0) arrowLeft.style.display = 'none';
  });
  arrowRight.addEventListener('click', () => {
    if (currentSlide === 0) arrowLeft.style.display = 'flex';
    prevSlide(slides, currentSlide, 'popup-transparency-slider__slide--active');
    currentSlide++;
    currentCounter.textContent = currentSlide + 1;
    nextSlide(slides, currentSlide, 'popup-transparency-slider__slide--active');
    if (currentSlide === slides.length - 1) arrowRight.style.display = 'none';
  });

  if (document.documentElement.clientWidth <= 1090) {
    const
      slides = document.querySelectorAll('.transparency-item'),
      arrowLeft = document.querySelector('#transparency-arrow_left'),
      arrowRight = document.querySelector('#transparency-arrow_right');

    const prevSlide = (elem, index, strclass) => {
      elem[index].classList.remove(strclass);
    };
    const nextSlide = (elem, index, strclass) => {
      elem[index].classList.add(strclass);
    };

    let currentSlide = 0;
    nextSlide(slides, currentSlide, 'transparency-item--active');
    arrowLeft.style.display = 'none';
    arrowRight.style.display = 'flex';

    arrowLeft.addEventListener('click', () => {
      if (currentSlide === slides.length - 1) arrowRight.style.display = 'flex';
      prevSlide(slides, currentSlide, 'transparency-item--active');
      currentSlide--;
      nextSlide(slides, currentSlide, 'transparency-item--active');
      if (currentSlide === 0) arrowLeft.style.display = 'none';
    });
    arrowRight.addEventListener('click', () => {
      if (currentSlide === 0) arrowLeft.style.display = 'flex';
      prevSlide(slides, currentSlide, 'transparency-item--active');
      currentSlide++;
      nextSlide(slides, currentSlide, 'transparency-item--active');
      if (currentSlide === slides.length - 1) arrowRight.style.display = 'none';
    });
  }
  window.addEventListener('resize', transparencyBlock);
};

export default transparencyBlock;
