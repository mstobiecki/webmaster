const openNavigation = () => {
  const navigationWrapper = document.querySelector(".navigagtion__wrapper--js");
  const navigationButton = document.querySelector(".navigation__button--js");

  const handleNavigation = () => {
    navigationWrapper.classList.toggle("navigation__open--js");
  };

  navigationButton.addEventListener("click", handleNavigation);
};

export default openNavigation;
