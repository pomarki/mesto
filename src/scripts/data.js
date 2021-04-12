const buttonProfileEdit = document.querySelector(".profile__edit-button");
const profileContainer = document.querySelector(".profile");
const escKeyValue = "Escape";
const elementList = document.querySelector(".elements__list");
const profileName = profileContainer.querySelector(".profile__name");
const profileJob = profileContainer.querySelector(".profile__job");
const formUserInfo = document.querySelector("form[name=user-info]");
const formUserName = formUserInfo.querySelector("input[name=user-name]");
const formUserJob = formUserInfo.querySelector("input[name=user-job]");
const buttonProfileSave = formUserInfo.querySelector(".popup__save-button");
const formAddPicture = document.querySelector("form[name=add-picture]");
const formPictureName = formAddPicture.querySelector(
  "input[name=picture-name]"
);
const formPictureLink = formAddPicture.querySelector(
  "input[name=picture-link]"
);
const buttonPictureAdd = profileContainer.querySelector(".profile__add-button");

const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const setValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__text-field",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_type_disabled",
  inputErrorClass: "popup__text-field_type_error",
  errorClass: "popup__input-error_type_active",
};

export {
  buttonProfileEdit,
  profileContainer,
  escKeyValue,
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
  setValidation,
};
