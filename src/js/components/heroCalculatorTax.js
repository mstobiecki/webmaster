const heroCalculatorTax = () => {
  const heroPriceHosting = document.querySelector(".hero__price--js");
  const priceWithTaxButton = document.querySelector(
    ".hero__toggle-price--js .switch"
  );

  const handleAddTax = () => {
    const handleAddVAT = (rate, value) => value + value * rate;

    const priceWithTax = 123;
    const priceWithoutVAT = +heroPriceHosting.textContent;
    const tax = handleAddVAT(0.23, priceWithoutVAT);

    if (tax === priceWithTax) {
      heroPriceHosting.textContent = tax;
    } else {
      heroPriceHosting.textContent = 100;
    }
  };

  priceWithTaxButton.addEventListener("change", handleAddTax);
};

export default heroCalculatorTax;
