import { escKeyValue } from "./data.js";

class Popup {
  constructor(popupContainer) {
    this._popupContainer = document.querySelector(popupContainer);
    this._closeButton = this._popupContainer.querySelector(
      ".popup__close-button"
    );
    this._confirmButton = document.querySelector("#popup-confirm-button");
    this.keydownFunction = this.keydownFunction.bind(this);
  }

  open() {
    this._popupContainer.classList.add("popup_opened");
    document.addEventListener("keydown", this.keydownFunction);
  }

  close() {
    this._popupContainer.classList.remove("popup_opened");
    document.removeEventListener("keydown", this.keydownFunction);
  }

  keydownFunction(evt) {
    if (evt.key === escKeyValue) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => this.close());
    /* this._confirmButton.addEventListener("click", () => this.close()); */
    this._popupContainer.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
    });
  }
}
export { Popup };
