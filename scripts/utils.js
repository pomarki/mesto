export function openModal(modal) {
  modal.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

export function closeModal(modal) {
  modal.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}

export function closeByEscape(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".popup_opened");
      closeModal(openedPopup);
    }
  }