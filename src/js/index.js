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

const dialog = document.querySelector("dialog");
const showButtonModal = document.querySelector(".hero__cart-button--js");
const closeButtonModal = document.querySelectorAll(".modal__button--js");
const closeIconModal = document.querySelector(".modal__icon--js");

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

const backdropModal = document.querySelector("::backdrop");

navigationButton.addEventListener("click", handleNavigation);
priceWithTaxButton.addEventListener("change", handleAddTax);
showButtonModal.addEventListener("click", () => {
  dialog.showModal();
});

closeButtonModal.forEach((button) =>
  button.addEventListener("click", () => {
    dialog.close();
  })
);

const closeDialog = (event) => {
  if (!event.target.contains(dialog)) return;
  dialog.close();
};

document.addEventListener("click", closeDialog);
closeIconModal.addEventListener("click", () => {
  dialog.close();
});
