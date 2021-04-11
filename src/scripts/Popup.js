import { escKeyValue } from "./data.js";

class Popup {
  constructor(popupContainer) {
    this._popupSelector = document.querySelector(popupContainer);
    this._closeButton = this._popupSelector.querySelector(
      ".popup__close-button"
    );
    this.keydownFunction = this.keydownFunction.bind(this._popupSelector);
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    this._handleEscClose();
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this.keydownFunction);
  }

  _handleEscClose() {
    document.addEventListener("keydown", this.keydownFunction);
  }

  keydownFunction(evt) {
    if (evt.key === escKeyValue) {
      this.classList.remove("popup_opened");
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this._popupSelector.classList.remove("popup_opened");
    });
    this._popupSelector.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this._popupSelector.classList.remove("popup_opened");
      }
    });
  }
}
export { Popup };
