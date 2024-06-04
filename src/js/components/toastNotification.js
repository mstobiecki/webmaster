const toastNotification = () => {
  const toast = document.querySelector(".toast__hidden--js");

  toast.classList.remove("toast__hidden");

  setTimeout(() => {
    toast.classList.add("toast__hidden");
  }, 5000);
};

export default toastNotification;
