const navigationWrapper = document.querySelector(".navigagtion__wrapper");
const navigationButton = document.querySelector(".navigation__button");
const heroPriceHosting = document.querySelector(".hero__price");
const priceWithTaxButton = document.querySelector(
  ".hero__toggle-price .switch"
);

const slides = document.querySelectorAll(".testimonials__item");
const buttonLeftSlider = document.querySelector(".testimonials__button--left");
const buttonRightSlider = document.querySelector(
  ".testimonials__button--right"
);

const footerYear = document.querySelector(".footer__year--js");

const handleNavigation = () => {
  navigationWrapper.classList.toggle("navigation__open--js");
};

const handleAddTax = () => {
  const handleAddVAT = (rate, value) => value + value * rate;
  const priceWithoutVAT = +heroPriceHosting.textContent;
  const tax = handleAddVAT(0.23, priceWithoutVAT);

  if (tax === 123) {
    heroPriceHosting.textContent = tax;
  } else {
    heroPriceHosting.textContent = 100;
  }
};

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

const getFullYear = () => {
  const fullYear = new Date().getFullYear();

  footerYear.textContent = fullYear;
};

getFullYear();

navigationButton.addEventListener("click", handleNavigation);
priceWithTaxButton.addEventListener("change", handleAddTax);
