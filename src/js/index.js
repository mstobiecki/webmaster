const navigationWrapper = document.querySelector(".navigagtion__wrapper");
const navigationButton = document.querySelector(".navigation__button");
const heroPriceHosting = document.querySelector(".hero__price");
const priceWithTaxButton = document.querySelector(
  ".hero__toggle-price .switch"
);

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

navigationButton.addEventListener("click", handleNavigation);
priceWithTaxButton.addEventListener("change", handleAddTax);
