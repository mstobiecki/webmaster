const slider = () => {
  const slides = document.querySelectorAll(".testimonials__item--js");
  const buttonLeftSlider = document.querySelector(
    ".testimonials__button--left--js"
  );
  const buttonRightSlider = document.querySelector(
    ".testimonials__button--right--js"
  );
  const dotsSlider = document.querySelector(".testimonials__dots--js");

  const activateSlider = () => {
    const slidesLength = slides.length - 1;
    let currentSlide = 0;

    const createDots = () => {
      slides.forEach((_, i) => {
        dotsSlider.insertAdjacentHTML(
          "beforeend",
          `<button aria-hidden="true" class="testimonials__dot" data-slide="${i}"></button>`
        );
      });
    };

    const activateDot = (slide) => {
      document
        .querySelectorAll(".testimonials__dot")
        .forEach((dot) => dot.classList.remove("testimonials__dot--active"));

      document
        .querySelector(`.testimonials__dot[data-slide="${slide}"]`)
        .classList.add("testimonials__dot--active");
    };

    const activateSlide = (s) => {
      slides.forEach(
        (slide, i) => (slide.style.transform = `translateX(${100 * (i - s)}%)`)
      );
    };

    const nextSlide = () => {
      if (currentSlide === slidesLength) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }

      activateSlide(currentSlide);
      activateDot(currentSlide);
    };

    const previousSlide = () => {
      if (currentSlide === 0) {
        currentSlide = slidesLength;
      } else {
        currentSlide--;
      }

      activateSlide(currentSlide);
      activateDot(currentSlide);
    };

    const init = () => {
      activateSlide(0);
      createDots();
      activateDot(0);
    };
    init();

    buttonRightSlider.addEventListener("click", nextSlide);
    buttonLeftSlider.addEventListener("click", previousSlide);
    document.addEventListener("keyup", function (e) {
      e.key === "ArrowRight" && nextSlide();
      e.key === "ArrowLeft" && previousSlide();
    });
  };

  activateSlider();
};

export default slider;
