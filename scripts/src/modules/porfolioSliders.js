import SliderCarousel from "./plugins/sliderCarousel";
import ArrowSlider from './plugins/arrowSlider.js';

const porfolioSliders = () => {
  const portfolio = document.querySelector('.portfolio');

  if (document.documentElement.clientWidth > 575) {
    const sliderElem = document.querySelector('.portfolio-slider');
    if (sliderElem.classList.contains('activate')) return;
    sliderElem.classList.add('activate');

    const slider = new SliderCarousel({
      main: ".portfolio-slider", wrap: ".plug",
      prev: "#portfolio-arrow_left", next: "#portfolio-arrow_right",
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1024,
          slidesToShow: 2,
        },
        {
          breakpoint: 900,
          slidesToShow: 1,
        },
      ],
    });
    slider.init();

    window.addEventListener('resize', () => {
      if (document.documentElement.clientWidth > 575) return;
      porfolioSliders();
    });
  } else {
    const sliderElem = document.querySelector('.portfolio-slider-mobile');
    if (sliderElem.classList.contains('activate')) return;
    sliderElem.classList.add('activate');

    const arrowSlider = new ArrowSlider({
      slides: '.portfolio-slider-mobile .portfolio-slider__slide-frame',
      prev: '#portfolio-arrow-mobile_left', next: '#portfolio-arrow-mobile_right',
      counter: '#portfolio-counter',
      infinity: true,
    });
    arrowSlider.init();

    window.addEventListener('resize', () => {
      if (document.documentElement.clientWidth <= 575) return;
      porfolioSliders();
    });
  }

  const popupArrowSlider = new ArrowSlider({
    slides: '.popup-portfolio-slider__slide',
    prev: '#popup_portfolio_left', next: '#popup_portfolio_right',
    counter: '#popup-portfolio-counter',
    infinity: true,
  });
  popupArrowSlider.init();

  const popupTextArrowSlider = new ArrowSlider({
    slides: '.popup-portfolio-text',
    prev: '#popup_portfolio_left', next: '#popup_portfolio_right',
    infinity: true,
  });
  popupTextArrowSlider.init();

  const
    popup = document.querySelector('.popup-portfolio'),
    closeButtons = popup.querySelectorAll('.close');

  portfolio.addEventListener('click', event => {
    const target = event.target;
    if (target.matches('.portfolio-slider__slide-frame')) {
      const parent = target.closest('.portfolio-slider') || target.closest('.portfolio-slider-mobile'),
        currentPhoto = Array.from(parent.querySelectorAll('.portfolio-slider__slide-frame')).indexOf(target);
      popupArrowSlider.changeCurrentSlide(currentPhoto);
      popupTextArrowSlider.changeCurrentSlide(currentPhoto);
      popup.style.visibility = 'visible';
    }
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      popup.style.visibility = 'hidden';
    });
  });
};

export default porfolioSliders;
