const buttonProfileEdit = document.querySelector(".profile__edit-button");
const profileContainer = document.querySelector(".profile");
const escKeyValue = "Escape";
const elementList = document.querySelector(".elements__list");
const formUserInfo = document.querySelector("form[name=user-info]");
const formUserName = formUserInfo.querySelector("input[name=user-name]");
const formUserJob = formUserInfo.querySelector("input[name=user-job]");
const formAddPicture = document.querySelector("form[name=add-picture]");
const formChangeAvatar = document.querySelector("form[name=upg-avatar]");
const formPictureName = formAddPicture.querySelector(
  "input[name=picture-name]"
);
const formPictureLink = formAddPicture.querySelector(
  "input[name=picture-link]"
);
const buttonPictureAdd = profileContainer.querySelector(".profile__add-button");
const buttonPopupConfirm = document.querySelector("#popup-confirm-button");
const buttonChangeAvatar = document.querySelector(".profile__avatar-change-icon");

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
  formUserInfo,
  formUserName,
  formUserJob,
  formAddPicture,
  formPictureName,
  formPictureLink,
  buttonPictureAdd,
  elementList,
  buttonPopupConfirm,
  setValidation,
  buttonChangeAvatar,
  formChangeAvatar,
};
