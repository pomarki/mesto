let buttonProfileEdit = document.querySelector(".profile__edit-button");
let popupWindow = document.querySelector(".popup");
let profileContainer = document.querySelector(".profile");
let profileName = profileContainer.querySelector(".profile__name");
let profileJob = profileContainer.querySelector(".profile__job");
let popupProfileContainer = popupWindow.querySelector(
  ".popup__container_type_profile"
);
let formUserInfo = document.querySelector("form[name=user-info]");
let formUserName = formUserInfo.querySelector("input[name=user-name]");
let formUserJob = formUserInfo.querySelector("input[name=user-job]");
let buttonPopupClose = popupProfileContainer.querySelector(".popup__close");

let popupPictureContainer = popupWindow.querySelector(
  ".popup__container_type_picture"
);
let formAddPicture = document.querySelector("form[name=add-picture]");
let formPictureName = formAddPicture.querySelector("input[name=picture-name]");
let formPictureLink = formAddPicture.querySelector("input[name=picture-link]");
let buttonPictureAdd = profileContainer.querySelector(".profile__add-button");
let buttonAddClose = popupPictureContainer.querySelector(".popup__close");

const elementCardsContainer = document.querySelector(".elements__list");
const elementCard = document.querySelector("#template__element");

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

function renderCard() {
  const htmlCards = initialCards.map(getCard);
  elementCardsContainer.append(...htmlCards);
}

function getCard(item) {
  const newCard = elementCard.content.cloneNode(true);
  const newCardInfo = newCard.querySelector(".element__info-place");
  const newCardPicture = newCard.querySelector(".element__img");
  newCardInfo.textContent = item.name;
  newCardPicture.src = item.link;
  newCardPicture.alt = item.name;
  return newCard;
}

renderCard();

function openEditPopup() {
  popupWindow.classList.add("popup_opened");
  popupProfileContainer.classList.remove("popup__container_type_profile");
  popupPictureContainer.classList.add("popup__container_type_picture");
  formUserName.value = profileName.textContent;
  formUserJob.value = profileJob.textContent;
}
function closeEditPopup() {
  popupWindow.classList.remove("popup_opened");
}

function formProfileHandler(evt) {
  evt.preventDefault();
  profileName.textContent = formUserName.value;
  profileJob.textContent = formUserJob.value;

  closeEditPopup();
}
function openAddPopup() {
  popupWindow.classList.add("popup_opened");
  popupPictureContainer.classList.remove("popup__container_type_picture");
  popupProfileContainer.classList.add("popup__container_type_profile");
}
function closeAddPopup() {
  popupWindow.classList.remove("popup_opened");
  popupPictureContainer.classList.add("popup__container_type_picture");
}

function formPictureLoad(evt) {
  evt.preventDefault();
  const newCard = elementCard.content.cloneNode(true);
  const newCardInfo = newCard.querySelector(".element__info-place");
  const newCardPicture = newCard.querySelector(".element__img");
  newCardInfo.textContent = formPictureName.value;
  newCardPicture.src = formPictureLink.value;
  newCardPicture.alt = formPictureName.value;
  elementCardsContainer.prepend(newCard);
  formPictureLink.value = "";
  formPictureName.value = "";
  closeAddPopup();
}

formAddPicture.addEventListener("submit", formPictureLoad);
buttonAddClose.addEventListener("click", closeAddPopup);
buttonPictureAdd.addEventListener("click", openAddPopup);
buttonProfileEdit.addEventListener("click", openEditPopup);
formUserInfo.addEventListener("submit", formProfileHandler);
buttonPopupClose.addEventListener("click", closeEditPopup);
