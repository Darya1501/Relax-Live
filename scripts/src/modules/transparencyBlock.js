import ArrowSlider from './plugins/arrowSlider.js';

const transparencyBlock = () => {
  if (document.documentElement.clientWidth <= 1090) {
    const sliderElem = document.querySelector('.transparency-item');
    if (sliderElem.classList.contains('activate')) return;
    sliderElem.classList.add('activate');

    const popupArrowSlider = new ArrowSlider({
      slides: '.transparency-item',
      prev: '#transparency-arrow_left', next: '#transparency-arrow_right',
    });
    popupArrowSlider.init();
  }
  window.addEventListener('resize', transparencyBlock);


  const popupArrowSlider = new ArrowSlider({
    slides: '.popup-transparency-slider__slide',
    prev: '#transparency_left', next: '#transparency_right',
    counter: '#transparency-popup-counter',
    infinity: true,
  });
  popupArrowSlider.init();


  const
    popup = document.querySelector('.popup-transparency'),
    closeButtons = popup.querySelectorAll('.close'),
    documents = document.querySelector('.transparency-slider');

  documents.addEventListener('click', event => {
    const target = event.target;
    if (target.matches('.transparency-item__img')) {
      const parent = target.closest('.transparency-item'),
        currentPhoto = Array.from(documents.querySelectorAll('.transparency-item')).indexOf(parent);
      popupArrowSlider.changeCurrentSlide(currentPhoto);
      popup.style.visibility = 'visible';
    }
  });
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      popup.style.visibility = 'hidden';
    });
  });
};

export default transparencyBlock;
