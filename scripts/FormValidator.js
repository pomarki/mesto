const setValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__text-field",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_type_disabled",
  inputErrorClass: "popup__text-field_type_error",
  errorClass: "popup__input-error_type_active",
};
class FormValidator {
  constructor(data, formElement) {
    this._inputSelector = data.inputSelector; // поле инпута
    this._submitButtonSelector = data.submitButtonSelector; // кнопка сабмита
    this._inactiveButtonClass = data.inactiveButtonClass; // селектор неактивности кнопки
    this._inputErrorClass = data.inputErrorClass; // селектор красной рамки
    this._errorClass = data.errorClass; // селектор текста ошибки
    this.formElement = formElement; // валидируемая форма
    this._inputList = Array.from(
      this.formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this.formElement.querySelector(
      this._submitButtonSelector
    );
  }

  _showInputError(inputElement) {
    const errorElement = this.formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }
  _hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }
  _checkInputValidity() {
    // поскольку инпуты - массив, надо воспользоваться методом обхода массива
    this._inputList.forEach((inputElement) => {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement);
      } else {
        this._hideInputError(inputElement);
      }
    });
  }
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", "disabled");
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  }
  _setEventListeners() {
    // ok
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
  enableValidation() {
    // ok
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
export { setValidation, FormValidator };
