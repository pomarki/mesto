export { Card };

class Card {
  constructor(data, cardSelector, handleCardClick, handleTrashClick, handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this.likes = data.likes; // length arrov likes
    this._userId = data.owner._id; // id запостившего карточку
    this._cardId = data._id;
    this._cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
    this.handleTrashClick = handleTrashClick;
    this.handleLikeClick = handleLikeClick;
  }

  getCardId() {
    return this._cardId;
  }
  getLikes() {
    return this.likes.length;
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
        /* this.heartIconClick(); */
        this.handleLikeClick();
      });
    this._element
      .querySelector(".element__img")
      .addEventListener("click", () => {
        this.handleCardClick();
      });
  }
  heartIconClick() {
    this._element
      .querySelector(".element__info-heart")
      .classList.toggle("element__info-heart_type_disabled");
  }
  trashIconClick() {
    this._element.remove();
    this._element = null;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._trashButton = this._element.querySelector(".element__trash");
    const _elementImg = this._element.querySelector(".element__img");
    const _elementLikes = this._element.querySelector(".element__info-likes");

    if (this._userId == "e6c92694e7b7e6c22ce22a70") {
      this._trashButton.classList.add("element__trash_visible");
    }

if (this.likes.find(item => item._id == "e6c92694e7b7e6c22ce22a70")) {
  this._element
      .querySelector(".element__info-heart")
      .classList.remove("element__info-heart_type_disabled")
}


    _elementImg.src = this._link;
    this._element.querySelector(
      ".element__info-place"
    ).textContent = this._name;
    _elementImg.alt = this._name;
    this._setEventListeners();
    _elementLikes.textContent = this.likes.length;
    return this._element;
  }
}
