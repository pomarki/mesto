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
} from "./data.js";
import { Card } from "./Card.js";
import { openModal, closeModal } from "./utils.js";
import { setValidation, FormValidator } from "./FormValidator.js";

function formProfileHandler(evt) {
  evt.preventDefault();
  profileName.textContent = formUserName.value;
  profileJob.textContent = formUserJob.value;
  closeModal(popupProfileContainer);
}

function renderLoadCard(evt) {
  evt.preventDefault();
  const card = new Card(
    { name: formPictureName.value, link: formPictureLink.value },
    "#template__element"
  );
  card.generateCard();
  formAddPicture.reset();
  closeModal(popupPictureContainer);
}

function openProfile() {
  openModal(popupProfileContainer);
  formUserName.value = profileName.textContent;
  formUserJob.value = profileJob.textContent;
  buttonProfileSave.classList.remove("popup__save-button_type_disabled");
}
function openAddPictureForm() {
  openModal(popupPictureContainer);
  buttonPictureSave.classList.add("popup__save-button_type_disabled");
}

formAddPicture.addEventListener("submit", renderLoadCard);
formUserInfo.addEventListener("submit", formProfileHandler);

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

initialCards.forEach((item) => {
  const card = new Card(item, "#template__element");
  return card.generateCard();
});

const profileFormValidator = new FormValidator(setValidation, formUserInfo);
profileFormValidator.enableValidation();

const pictureFormValidator = new FormValidator(setValidation, formAddPicture);
pictureFormValidator.enableValidation();
