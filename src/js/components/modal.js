import toastNotification from "./toastNotification.js";

const modal = () => {
  const dialog = document.querySelector("dialog");
  const showButtonModal = document.querySelector(".hero__cart-button--js");
  const closeButtonModal = document.querySelectorAll(".modal__button--js");
  const closeIconModal = document.querySelector(".modal__icon--js");

  const openModal = () => {
    dialog.showModal();
  };

  const closeModal = () => {
    dialog.close();
  };

  const closeModalWithToast = () => {
    dialog.close();
    toastNotification();
  };

  const closeDialog = (event) => {
    if (!event.target.contains(dialog)) {
      return;
    }
    closeModal();
  };

  showButtonModal.addEventListener("click", openModal);
  closeButtonModal.forEach((button) =>
    button.addEventListener("click", closeModalWithToast)
  );
  document.addEventListener("click", closeDialog);
  closeIconModal.addEventListener("click", closeModal);
};

export default modal;
