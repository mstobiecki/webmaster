const openNavigation = () => {
  const navigationWrapper = document.querySelector(".navigagtion__wrapper--js");
  const navigationButton = document.querySelector(".navigation__button--js");
  const navigationLinks = document.querySelectorAll(".navigation__link");

  const handleNavigation = () => {
    navigationWrapper.classList.toggle("navigation__open--js");
  };

  navigationButton.addEventListener("click", handleNavigation);
  navigationLinks.forEach((link) =>
    link.addEventListener("click", handleNavigation)
  );
};

export default openNavigation;
