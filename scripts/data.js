const buttonProfileEdit = document.querySelector(".profile__edit-button");
const popupWindows = document.querySelectorAll(".popup");
const profileContainer = document.querySelector(".profile");
const escKeyValue = 'Escape';
const elementList = document.querySelector(".elements__list");

const profileName = profileContainer.querySelector(".profile__name");
const profileJob = profileContainer.querySelector(".profile__job");


const popupProfileContainer = document.querySelector("#popup-profile");
const popupFullPictureContainer = document.querySelector("#popup-full-picture");

const formUserInfo = document.querySelector("form[name=user-info]");
const formUserName = formUserInfo.querySelector("input[name=user-name]");
const formUserJob = formUserInfo.querySelector("input[name=user-job]");
const buttonProfileSave = formUserInfo.querySelector(".popup__save-button");
const profileInputList = Array.from(formUserInfo.querySelectorAll(".popup__text-field"));

const popupPictureContainer = document.querySelector("#popup-add-picture");
const formAddPicture = document.querySelector("form[name=add-picture]");
const formPictureName = formAddPicture.querySelector(
  "input[name=picture-name]"
);
const formPictureLink = formAddPicture.querySelector(
  "input[name=picture-link]"
);
const buttonPictureAdd = profileContainer.querySelector(".profile__add-button");
const buttonPictureSave = formAddPicture.querySelector(".popup__save-button");

const fullPicture = document.querySelector("#popup-full-picture");

const fullPictureSrc = fullPicture.querySelector(".popup__picture-img");
const fullPictureSubtitle = fullPicture.querySelector(
  ".popup__picture-subtitle"
);

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

export {
  buttonProfileEdit,
  popupWindows,
  profileContainer,
  escKeyValue,
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
  fullPicture,
  fullPictureSrc,
  fullPictureSubtitle,
  initialCards,
  elementList,
  profileInputList,
  popupFullPictureContainer
};
