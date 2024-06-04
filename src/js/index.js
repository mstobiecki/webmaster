import modal from "./components/modal.js";
import openNavigation from "./components/openNavigation.js";
import heroCalculatorTax from "./components/heroCalculatorTax.js";
import actuallYearFooter from "./components/actuallYearFooter.js";
import slider from "./components/slider.js";

const init = () => {
  modal();
  openNavigation();
  heroCalculatorTax();
  actuallYearFooter();
  slider();
};

init();
