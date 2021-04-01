import { escKeyValue } from "./data.js";
import { closeByEscape } from "./utils.js";
class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    this._handleEscClose();
  }
  close() {
    this._popupSelector.classList.remove("popup_opened");
    this._handleEscClose();
  }
  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === escKeyValue) {
        this._popupSelector.classList.remove("popup_opened");
      }
    });
  }
  setEventListeners() {}
}

export { Popup };
