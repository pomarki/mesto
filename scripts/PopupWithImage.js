import { Popup } from "./Popup.js";
import { fullPicture, fullPictureSrc, fullPictureSubtitle } from "./data.js";
import { openModal } from "./utils.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    
  }
  open(item) {
    fullPictureSrc.src = item.src; // значение придёт из index.js
    fullPictureSubtitle.textContent = item.textContent;
    this._popupSelector.classList.add("popup_opened");
    
  }
}
export { PopupWithImage };