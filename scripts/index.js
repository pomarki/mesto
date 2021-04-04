import {
  buttonProfileEdit,
  popupWindows,
  profileName,
  profileJob,
  popupProfileContainer,
  formUserInfo,
  formUserName,
  formUserJob,
  buttonProfileSave,
  popupPictureContainer,
  formAddPicture,
  formPictureName,
  formPictureLink,
  buttonPictureAdd,
  buttonPictureSave,
  initialCards,
  elementList,
  profileInputList,
  fullPictureSrc,
} from "./data.js";
import { Card } from "./card.js";
import { openModal, closeModal } from "./utils.js";
import { setValidation, FormValidator } from "./FormValidator.js";
import { UserInfo } from "./UserInfo.js";
import { Section } from "./Section.js";
import { Popup } from "./Popup.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#template__element");
      const cardElement = card.generateCard();
      cardsList.addItem(cardElement);
    },
  },
  elementList
);
cardsList.renderItems();

function renderLoadedCard(evt) {
  evt.preventDefault();
  const newCard = new Section(
    {
      items: [{ name: formPictureName.value, link: formPictureLink.value }],
      renderer: (item) => {
        const card = new Card(item, "#template__element");
        const cardElement = card.generateCard();
        cardsList.addItem(cardElement);
      },
    },
    elementList
  );
  newCard.renderItems();

  formAddPicture.reset();
  closeModal(popupPictureContainer);
}

const popupProfile = new PopupWithForm(popupProfileContainer, () => {
  profileName.textContent = formUserName.value;
  profileJob.textContent = formUserJob.value;
  popupProfile.close();
});
popupProfile.setEventListeners();

function openProfile() {
  popupProfile.open();
  formUserName.value = profileName.textContent;
  formUserJob.value = profileJob.textContent;
  buttonProfileSave.classList.remove("popup__save-button_type_disabled");
}

const popupAddPicture = new PopupWithForm(popupPictureContainer, () => {

});

popupAddPicture.setEventListeners();

function openAddPictureForm() {
  

  popupAddPicture.open();
  
  /* openModal(popupPictureContainer); */
  buttonPictureSave.classList.add("popup__save-button_type_disabled");
  buttonPictureSave.setAttribute("disabled", "disabled");
}

formAddPicture.addEventListener("submit", renderLoadedCard);

buttonPictureAdd.addEventListener("click", openAddPictureForm);
buttonProfileEdit.addEventListener("click", openProfile);

popupWindows.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closeModal(popup);
    }
    if (evt.target.classList.contains("popup__close-button")) {
      closeModal(popup);
    }
  });
});

const profileFormValidator = new FormValidator(setValidation, formUserInfo);
profileFormValidator.enableValidation();

const pictureFormValidator = new FormValidator(setValidation, formAddPicture);
pictureFormValidator.enableValidation();
