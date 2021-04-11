import {
  buttonProfileEdit,
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
  popupFullPictureContainer,
} from "./data.js";
import { Card } from "./card.js";
import { closeModal } from "./utils.js";
import { setValidation, FormValidator } from "./FormValidator.js";
import { UserInfo } from "./UserInfo.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";

const popupFullPicture = new PopupWithImage("#popup-full-picture");
popupFullPicture.setEventListeners();

function createCard(item) {
  const card = new Card(item, "#template__element", () => {
    popupFullPicture.open(item.link, item.name);
  });
  return card.generateCard();
}

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardsList.addItem(cardElement);
    },
  },
  elementList
);

cardsList.renderItems();

function renderLoadedCard(evt) {
  evt.preventDefault();
  cardsList.addItem(
    createCard({ name: formPictureName.value, link: formPictureLink.value })
  );
}

const userInfo = new UserInfo(".profile__name", ".profile__job");

const popupProfile = new PopupWithForm("#popup-profile", (newFormValues) => {
  const newUserInfo = userInfo.setUserInfo(newFormValues);
  profileName.textContent = newUserInfo.name;
  profileJob.textContent = newUserInfo.job;
  popupProfile.close();
});

popupProfile.setEventListeners();

function openProfile() {
  const userData = userInfo.getUserInfo();
  popupProfile.open();
  formUserName.value = userData.name;
  formUserJob.value = userData.job;
  buttonProfileSave.classList.remove("popup__save-button_type_disabled");
}

const popupAddPicture = new PopupWithForm("#popup-add-picture", () => {});

/* const popupAddPicture = new PopupWithForm("#popup-add-picture", renderLoadedCard(evt) );  */


popupAddPicture.setEventListeners();

function openAddPictureForm() {
  popupAddPicture.open();
  pictureFormValidator.disableSubmitButton();
}

formAddPicture.addEventListener("submit", renderLoadedCard);
buttonPictureAdd.addEventListener("click", openAddPictureForm);
buttonProfileEdit.addEventListener("click", openProfile);

const profileFormValidator = new FormValidator(setValidation, formUserInfo);
profileFormValidator.enableValidation();

const pictureFormValidator = new FormValidator(setValidation, formAddPicture);
pictureFormValidator.enableValidation();
