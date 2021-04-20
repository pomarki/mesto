export { Card };

class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick,
    handleTrashClick,
    handleLikeClick,
    myId
  ) {
    this._name = data.name;
    this._link = data.link;
    this.likes = data.likes; // length arrov likes
    this._userId = data.owner._id; // id запостившего карточку
    this._cardId = data._id;
    this._cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
    this.handleTrashClick = handleTrashClick;
    this.handleLikeClick = handleLikeClick;
    this.myId = myId;
  }

  getCardInfo() {
    const actualHendlerCard = {
      name: this._name,
      link: this._link,
      likes: this.likes,
      _id: this._cardId,
      owner: { _id: this._userId },
    };
    return actualHendlerCard;
  }

  getCardId() {
    return this._cardId;
  }
  getLikes() {
    return this.likes.length;
  }
  checkLike() {
    return this.likes.some((like) => like._id === this.myId);
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
        
        this.handleTrashClick();
      });
    this._element
      .querySelector(".element__info-heart")
      .addEventListener("click", () => {
      
        this.handleLikeClick();
      });
    this._element
      .querySelector(".element__img")
      .addEventListener("click", () => {
        this.handleCardClick();
      });
  }
  heartIconClick(vol) {
    this._element
      .querySelector(".element__info-heart")
      .classList.toggle("element__info-heart_type_disabled");
    const _elementLikes = this._element.querySelector(".element__info-likes");
    _elementLikes.textContent = vol;
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

    if (this._userId == this.myId) {
      this._trashButton.classList.add("element__trash_visible");
    }

    if (this.likes.find((item) => item._id == this.myId)) {
      this._element
        .querySelector(".element__info-heart")
        .classList.remove("element__info-heart_type_disabled");
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
