import { Popup } from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPictureLink = this._popupSelector.querySelector(
      ".popup__picture-img"
    );
    this._popupPictureSubtitle = this._popupSelector.querySelector(
      ".popup__picture-subtitle"
    );
  }
  open(link, name) {
    super.open();
    this._popupPictureSubtitle.textContent = name;
    this._popupPictureLink.src = link;
  }
}
export { PopupWithImage };
