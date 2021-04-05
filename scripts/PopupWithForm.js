import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmitForm) {
    super(popupSelector);
    this.callbackSubmitForm = callbackSubmitForm;
    this._popupForm = this._popupSelector.querySelector(".popup__form");
    }
  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup__text-field");
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  }
  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this._popupSelector.classList.remove("popup_opened");
    });
    this._popupForm.addEventListener("submit", () => {
      this.callbackSubmitForm();
    });

  }
  close() {
    this._popupSelector.classList.remove("popup_opened");
    this._popupForm.reset();
  }
}

export { PopupWithForm };
