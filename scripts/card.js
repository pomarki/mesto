import { openModal } from "./utils.js";
import {
  fullPicture,
  fullPictureSrc,
  fullPictureSubtitle,
} from "./data.js";
export { Card };

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
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
    this._element
      .querySelector(".element__img")
      .addEventListener("click", () => {
        this._fullPictureOpen();
      });
  }
  _heartIconClick() {
    this._element
      .querySelector(".element__info-heart")
      .classList.toggle("element__info-heart_type_disabled");
  }
  _trashIconClick() {
    this._element.remove();
    this._element = null;
  }
  _fullPictureOpen() {
    fullPictureSrc.src = this._link;
    fullPictureSubtitle.textContent = this._name;
    openModal(fullPicture);
  }

  generateCard() {
    this._element = this._getTemplate();
    const _elementImg = this._element.querySelector(".element__img");
    _elementImg.src = this._link;
    this._element.querySelector(
      ".element__info-place"
    ).textContent = this._name;
    _elementImg.alt = this._name;
    this._setEventListeners();
    /* document.querySelector(".elements__list").prepend(this._element); */
    
    return this._element;
  }
}
