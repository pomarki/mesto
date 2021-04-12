import {
  buttonProfileEdit,
  profileName,
  profileJob,
  formUserInfo,
  formUserName,
  formUserJob,
  buttonProfileSave,
  formAddPicture,
  formPictureName,
  formPictureLink,
  buttonPictureAdd,
  initialCards,
  elementList,
} from "../scripts/data.js";
import { Card } from "../scripts/card.js";

import { setValidation, FormValidator } from "../scripts/FormValidator.js";
import { UserInfo } from "../scripts/UserInfo.js";
import { Section } from "../scripts/Section.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";

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

const popupAddPicture = new PopupWithForm(
  "#popup-add-picture",
  renderLoadedCard
);

popupAddPicture.setEventListeners();

function openAddPictureForm() {
  popupAddPicture.open();
  pictureFormValidator.disableSubmitButton();
}

buttonPictureAdd.addEventListener("click", openAddPictureForm);
buttonProfileEdit.addEventListener("click", openProfile);

const profileFormValidator = new FormValidator(setValidation, formUserInfo);
profileFormValidator.enableValidation();

const pictureFormValidator = new FormValidator(setValidation, formAddPicture);
pictureFormValidator.enableValidation();
