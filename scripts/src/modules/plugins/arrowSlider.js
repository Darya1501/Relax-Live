class ArrowSlider {
  constructor({
    slides, prev, next,
    dotsWrapper, dots,
    infinity = false,
    currentSlide = 0,
    activeClass = 'active-slide',
    dotActiveClass = 'active',
    counter,
    autoPlay = false,

  }) {

    this.activeClass = activeClass;
    this.slides = document.querySelectorAll(slides);
    this.maxSlideIndex = this.slides.length - 1;

    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);

    this.dotsWrapper = document.querySelector(dotsWrapper);
    if (dots) this.dots = Array.from(document.querySelectorAll(dots));
    this.dotsClass = dots;
    this.dotActiveClass = dotActiveClass;

    this.counter = document.querySelector(counter);

    this.currentSlide = currentSlide;
    this.infinity = infinity;
    this.autoPlay = autoPlay;
  }

  init() {
    this.slides.forEach(slide => slide.classList.remove(this.activeClass));
    this.slides[this.currentSlide].classList.add(this.activeClass);

    if (this.prev && this.next) {
      this.infinity ? '' : this.prev.style.display = 'none';
      this.controlArrow();
    }

    if (this.dotsWrapper && this.dots) { this.controlDots(); }

    if (this.counter) {
      this.currentCouner = this.counter.querySelector('.slider-counter-content__current');
      this.totalCouner = this.counter.querySelector('.slider-counter-content__total');
      this.currentCouner.textContent = this.currentSlide + 1;
      this.totalCouner.textContent = this.slides.length;
    }

    if (this.autoPlay) {
      setInterval(() => {
        const newIndex = this.currentSlide === this.maxSlideIndex ? 0 : this.currentSlide + 1;
        this.changeSlide(newIndex);
      }, 3000);
    }
  }

  changeCurrentSlide(index) {
    this.currentSlide = index;
    this.slides.forEach(slide => slide.classList.remove(this.activeClass));
    this.slides[this.currentSlide].classList.add(this.activeClass);
    if (this.currentCouner) this.currentCouner.textContent = this.currentSlide + 1;
  }

  controlArrow() {
    this.prev.addEventListener('click', this.prevSlide.bind(this));
    this.next.addEventListener('click', this.nextSlide.bind(this));
  }

  controlDots() {
    this.dotsWrapper.addEventListener('click', event => {
      if (event.target.matches(this.dotsClass)) this.changeSlide(this.dots.indexOf(event.target));
    });
  }

  checkArrow(index) {
    this.prev.style.display = 'flex';
    this.next.style.display = 'flex';
    if (index === 0) this.prev.style.display = 'none';
    if (index === this.maxSlideIndex) this.next.style.display = 'none';
  }

  changeSlide(index) {
    if (this.dots) this.dots[this.currentSlide].classList.remove(this.dotActiveClass);
    this.slides[this.currentSlide].classList.remove(this.activeClass);

    this.currentSlide = index;
    if (this.prev && this.next && !this.infinity) this.checkArrow(this.currentSlide);
    if (this.currentCouner) this.currentCouner.textContent = this.currentSlide + 1;

    if (this.dots) this.dots[this.currentSlide].classList.add(this.dotActiveClass);
    this.slides[this.currentSlide].classList.add(this.activeClass);
  }

  prevSlide() {
    this.slides[this.currentSlide].classList.remove(this.activeClass);
    if (this.dots) this.dots[this.currentSlide].classList.remove(this.dotActiveClass);
    this.currentSlide--;

    this.infinity ? (this.currentSlide < 0 ? this.currentSlide = this.maxSlideIndex : '') :
      this.checkArrow(this.currentSlide);

    this.slides[this.currentSlide].classList.add(this.activeClass);
    if (this.dots) this.dots[this.currentSlide].classList.add(this.dotActiveClass);
    if (this.currentCouner) this.currentCouner.textContent = this.currentSlide + 1;
  }

  nextSlide() {
    this.slides[this.currentSlide].classList.remove(this.activeClass);
    if (this.dots) this.dots[this.currentSlide].classList.remove(this.dotActiveClass);

    this.currentSlide++;
    this.infinity ? (this.currentSlide > this.maxSlideIndex ? this.currentSlide = 0 : '') :
      this.checkArrow(this.currentSlide);

    this.slides[this.currentSlide].classList.add(this.activeClass);
    if (this.dots) this.dots[this.currentSlide].classList.add(this.dotActiveClass);
    if (this.currentCouner) this.currentCouner.textContent = this.currentSlide + 1;
  }
}

export default ArrowSlider;
