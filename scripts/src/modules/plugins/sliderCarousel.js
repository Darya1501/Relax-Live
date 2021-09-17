class SliderCarousel {
  constructor({
    main, wrap,
    next, prev,
    infinity = false,
    position = 0,
    slidesToShow = 3,
    responsive = []
  }) {
    if (!main || !wrap) {
      console.warn('Slider-carousel: Необходимы свойства "main" и "wrap"!');
    }
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = {
      position, infinity,
      widthSlide: Math.floor(100 / this.slidesToShow),
      maxSlide: this.slides.length - this.slidesToShow
    };
    this.responsive = responsive;
  }

  init() {
    this.addGloClass();
    this.addStyle();

    if (this.prev && this.next) {
      this.controlSlider();
    }

    if (this.responsive) {
      this.responseInit();
    }
  }

  addGloClass() {
    for (const item of this.slides) {
      item.classList.add('glo-slider__item');
    }
    this.main.classList.add('glo-slider');
    this.wrap.classList.add('glo-slider__wrap');
  }

  addStyle() {
    let style = document.getElementById(`${this.main.classList[0]}-sliderCarousel-style`);
    if (!style) {
      style = document.createElement('style');
      style.id = `${this.main.classList[0]}-sliderCarousel-style`;
    }

    style.textContent = `
      .${this.main.classList[0]}.glo-slider {
        overflow: hidden;
      }
      .${this.wrap.classList[0]}.glo-slider__wrap {
        display: flex;
        align-items: flex-start;
        transition: transform 0.5s;
        will-change: transform;
      }
      .${this.slides[0].classList[0]}.glo-slider__item {
        display: flex;
        flex: 0 0 ${this.options.widthSlide}%;
        position: relative;
        top: inherit;
        left: inherit;
        transform: translate(0, 0);
      }
    `;
    document.head.appendChild(style);
  }

  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  prevSlider() {
    this.next.style.display = 'flex';
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.options.maxSlide;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      if (this.options.position === 0) {
        this.prev.style.display = 'none';
      }
    }
  }

  nextSlider() {
    this.prev.style.display = 'flex';
    if (this.options.infinity || this.options.position < this.options.maxSlide) {
      ++this.options.position;
      if (this.options.position > this.options.maxSlide) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      if (this.options.position === this.options.maxSlide) {
        this.next.style.display = 'none';
      }
    }
  }

  responseInit() {
    const slidesToShowDefault = this.slidesToShow;
    const allResponse = this.responsive.map(item => item.breakpoint);
    const maxResponse = Math.max(...allResponse);

    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;
      if (widthWindow < maxResponse) {
        for (let i = 0; i < allResponse.length; i++) {
          if (widthWindow < allResponse[i]) {
            this.slidesToShow = this.responsive[i].slidesToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.addStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();
      }
    };
    checkResponse();
    window.addEventListener('resize', checkResponse);
  }
}

export default SliderCarousel;
