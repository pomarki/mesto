export { Card };

class Card {
  constructor(data, cardSelector, handleCardClick, handleTrashClick) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes.length; // length arrov likes
    this._userId = data.owner._id; // id запостившего карточку
    this._cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
    this.handleTrashClick = handleTrashClick;
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
        /* this._trashIconClick(); */
        this.handleTrashClick();
      });
    this._element
      .querySelector(".element__info-heart")
      .addEventListener("click", () => {
        this._heartIconClick();
      });
    this._element
      .querySelector(".element__img")
      .addEventListener("click", () => {
        this.handleCardClick();
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

  generateCard() {
    this._element = this._getTemplate();
    this._trashButton = this._element.querySelector(".element__trash");
    const _elementImg = this._element.querySelector(".element__img");
    const _elementLikes = this._element.querySelector(".element__info-likes");

    if ((this._userId == "e6c92694e7b7e6c22ce22a70")) {
      this._trashButton.classList.add("element__trash_visible");
    } 

    /* console.log(this._userId = 'e6c92694e7b7e6c22ce22a70'); */
    _elementImg.src = this._link;
    this._element.querySelector(
      ".element__info-place"
    ).textContent = this._name;
    _elementImg.alt = this._name;
    this._setEventListeners();
    _elementLikes.textContent = this._likes;
    return this._element;
  }
}
