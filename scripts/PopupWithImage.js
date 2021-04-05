import { Popup } from "./Popup.js";
import { fullPicture, fullPictureSrc, fullPictureSubtitle } from "./data.js";
import { openModal } from "./utils.js";

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
    this._popupPictureSubtitle.textContent = name;
    this._popupPictureLink.src = link;
    this._popupSelector.classList.add("popup_opened");
    this._handleEscClose();
  }
  
}
export { PopupWithImage };
