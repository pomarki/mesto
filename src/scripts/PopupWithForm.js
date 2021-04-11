import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupContainer, callbackSubmitForm) {
    super(popupContainer);
    this.callbackSubmitForm = callbackSubmitForm;
    this._popupForm = this._popupSelector.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__text-field");
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", () => {
      const newFormValues = this._getInputValues();
      this.callbackSubmitForm(newFormValues);
      this._popupSelector.classList.remove("popup_opened");
    });
  }
  close() {
    this._popupSelector.classList.remove("popup_opened");
    this._popupForm.reset();
  }
}

export { PopupWithForm };
