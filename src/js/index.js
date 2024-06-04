import modal from "./components/modal.js";
import openNavigation from "./components/openNavigation.js";
import heroCalculatorTax from "./components/heroCalculatorTax.js";
import actuallYearFooter from "./components/actuallYearFooter.js";

const slides = document.querySelectorAll(".testimonials__item");
const buttonLeftSlider = document.querySelector(".testimonials__button--left");
const buttonRightSlider = document.querySelector(
  ".testimonials__button--right"
);

const slider = () => {
  const slidesLength = slides.length - 1;
  let currentSlide = 0;

  const activateSlide = function (s) {
    slides.forEach(
      (slide, i) => (slide.style.transform = `translateX(${100 * (i - s)}%)`)
    );
  };

  activateSlide(0);

  const nextSlide = () => {
    if (currentSlide === slidesLength) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    activateSlide(currentSlide);
  };

  const previousSlide = () => {
    if (currentSlide === 0) {
      currentSlide = slidesLength;
    } else {
      currentSlide--;
    }

    activateSlide(currentSlide);
  };

  buttonRightSlider.addEventListener("click", nextSlide);
  buttonLeftSlider.addEventListener("click", previousSlide);
  document.addEventListener("keyup", function (e) {
    e.key === "ArrowRight" && nextSlide();
    e.key === "ArrowLeft" && previousSlide();
  });
};

slider();

const init = () => {
  modal();
  openNavigation();
  heroCalculatorTax();
  actuallYearFooter();
};

init();
