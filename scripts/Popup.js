import { escKeyValue } from "./data.js";
import { closeByEscape } from "./utils.js";
class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._closeButton = this._popupSelector.querySelector(
      ".popup__close-button"
    );
  }
  open() {
    this._popupSelector.classList.add("popup_opened");
    this._handleEscClose();
  }
  close() {
    this._popupSelector.classList.remove("popup_opened");
  }
  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === escKeyValue) {
        this._popupSelector.classList.remove("popup_opened");
      }
    });
  }
  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this._popupSelector.classList.remove("popup_opened");
    });
  }
}
export { Popup };
