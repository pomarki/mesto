class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector("#template__element")
      .content.querySelector(".elements__item")
      .cloneNode(true);
    this._element = cardElement;
    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__trash")
      .addEventListener("click", () => {
        this._trashIconClick();
      });
    this._element
      .querySelector(".element__info-heart")
      .addEventListener("click", () => {
        this._heartIconClick();
      });
  }
  _heartIconClick() {
    this._element
      .querySelector(".element__info-heart")
      .classList.toggle("element__info-heart_type_disabled");
  }
  _trashIconClick() {
    this._element
      .querySelector(".element__trash")
      .closest(".elements__item")
      .remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".element__img").src = this._link;
    this._element.querySelector(
      ".element__info-place"
    ).textContent = this._name;
    this._element.querySelector(".element__img").alt = this._name;
    this._setEventListeners();
    return this._element;
  }
}

export { Card };

class FormValidator {
  constructor(data, form) {

  }
  enableValidation(){

  }
}