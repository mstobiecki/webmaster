const actuallYearFooter = () => {
  const footerYear = document.querySelector(".footer__year--js");

  const fullYear = new Date().getFullYear();
  footerYear.textContent = fullYear;
};

export default actuallYearFooter;
