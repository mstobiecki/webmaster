const navigationWrapper = document.querySelector(".navigagtion__wrapper");
const navigationButton = document.querySelector(".navigation__button");

const handleNavigation = () => {
  navigationWrapper.classList.toggle("navigation__open--js");
};

navigationButton.addEventListener("click", handleNavigation);
