import SliderCarousel from "./sliderCarousel";

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
  } else {
    const slider = new SliderCarousel({
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
    slider.init();


    const slides = document.querySelectorAll('.formula-slider__slide'),
      arrowLeft = document.querySelector('.slider-arrow_left-formula'),
      arrowRight = document.querySelector('.slider-arrow_right-formula');

    const prevSlide = (elem, index, strclass) => {
      elem[index].classList.remove(strclass);
    };
    const nextSlide = (elem, index, strclass) => {
      elem[index].classList.add(strclass);
    };

    if (document.documentElement.clientWidth < 769) {
      slides[0].style.display = 'none';
      slides[7].style.display = 'none';
    }

    let currentSlide = 1;
    nextSlide(slides, currentSlide, 'active-item');
    arrowLeft.style.display = 'none';

    arrowLeft.addEventListener('click', () => {
      if (currentSlide === 6) arrowRight.style.display = 'flex';
      prevSlide(slides, currentSlide, 'active-item');
      currentSlide--;
      nextSlide(slides, currentSlide, 'active-item');
      if (currentSlide === 1) arrowLeft.style.display = 'none';
    });
    arrowRight.addEventListener('click', () => {
      if (currentSlide === 1) arrowLeft.style.display = 'flex';
      prevSlide(slides, currentSlide, 'active-item');
      currentSlide++;
      nextSlide(slides, currentSlide, 'active-item');
      if (currentSlide === 6) arrowRight.style.display = 'none';
    });
  }
  window.addEventListener('resize', showTooltip);
};

export default showTooltip;
