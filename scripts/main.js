const buttonProfileEdit = document.querySelector(".profile__edit-button");
const popupWindow = document.querySelector(".popup");
const profileContainer = document.querySelector(".profile");
const profileName = profileContainer.querySelector(".profile__name");
const profileJob = profileContainer.querySelector(".profile__job");
const popupProfileContainer = popupWindow.querySelector("#container-profile");
const formUserInfo = document.querySelector("form[name=user-info]");
const formUserName = formUserInfo.querySelector("input[name=user-name]");
const formUserJob = formUserInfo.querySelector("input[name=user-job]");
const buttonPopupClose = popupProfileContainer.querySelector(".popup__close");
const popupPictureContainer = popupWindow.querySelector("#container-picture");
const formAddPicture = document.querySelector("form[name=add-picture]");
const formPictureName = formAddPicture.querySelector(
  "input[name=picture-name]"
);
const formPictureLink = formAddPicture.querySelector(
  "input[name=picture-link]"
);
const buttonPictureAdd = profileContainer.querySelector(".profile__add-button");
const buttonAddClose = popupPictureContainer.querySelector(".popup__close");
const elementCardsContainer = document.querySelector(".elements__list");
const elementCardTemplate = document.querySelector("#template__element");


const fullPicture = document.querySelector("#full-picture-container");
const fullPictureClose = fullPicture.querySelector(".popup__close");
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

function renderInitialCard() {
  initialCards.map(addCard);
}
function addCard(item) {
  const newCard = elementCardTemplate.content.cloneNode(true);
  const newCardInfo = newCard.querySelector(".element__info-place");
  const newCardPicture = newCard.querySelector(".element__img");
  newCardInfo.textContent = item.name;
  newCardPicture.src = item.link;
  newCardPicture.alt = item.name;
  newCard
    .querySelector(".element__info-heart")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__info-heart_type_disabled");
    });
  newCard
    .querySelector(".element__trash")
    .addEventListener("click", function (evt) {
      evt.target.closest(".elements__item").remove();
    });
  newCard
    .querySelector(".element__img")
    .addEventListener("click", function (evt) {
      fullPictureSrc.src = evt.target.src;
      fullPictureSubtitle.textContent = evt.target.alt;
      popupWindow.classList.add("popup_opened", "popup_theme_dark");
      fullPicture.classList.add("popup__picture-container_opened");
    });
    fullPictureClose
    .addEventListener("click", function (evt) {
      popupWindow.classList.remove("popup_opened", "popup_theme_dark");
      fullPicture.classList.remove("popup__picture-container_opened");
      
    });

  elementCardsContainer.prepend(newCard);
}
function openEditPopup() {
  popupWindow.classList.add("popup_opened");
  popupProfileContainer.classList.add("popup__container_opened");
  formUserName.value = profileName.textContent;
  formUserJob.value = profileJob.textContent;
}

function closeEditPopup() {
  popupWindow.classList.remove("popup_opened");
  popupProfileContainer.classList.remove("popup__container_opened");
}
function formProfileHandler(evt) {
  evt.preventDefault();
  profileName.textContent = formUserName.value;
  profileJob.textContent = formUserJob.value;

  closeEditPopup();
}
function openAddPopup() {
  popupWindow.classList.add("popup_opened");
  popupPictureContainer.classList.add("popup__container_opened");
}
function closeAddPopup() {
  popupWindow.classList.remove("popup_opened");
  popupPictureContainer.classList.remove("popup__container_opened");
}
function renderLoadCard(evt) {
  evt.preventDefault();
  addCard({
    name: formPictureName.value,
    link: formPictureLink.value,
  });
  formAddPicture.reset();
  closeAddPopup();
}

formAddPicture.addEventListener("submit", renderLoadCard);
buttonAddClose.addEventListener("click", closeAddPopup);
buttonPictureAdd.addEventListener("click", openAddPopup);
buttonProfileEdit.addEventListener("click", openEditPopup);
formUserInfo.addEventListener("submit", formProfileHandler);
buttonPopupClose.addEventListener("click", closeEditPopup);

renderInitialCard();
