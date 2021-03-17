import { buttonProfileEdit, popupWindows, profileContainer, profileName, profileJob, popupProfileContainer, formUserInfo, formUserName, formUserJob, buttonProfileSave, popupPictureContainer, formAddPicture, formPictureName, formPictureLink, buttonPictureAdd, buttonPictureSave, fullPicture,
    fullPictureSrc, fullPictureSubtitle, elementCardsContainer, elementCardTemplate, initialCards } from './data.js'
    import { Card } from './card.js'

function renderInitialCard() {
  initialCards.map(addCard);
}

/* function addCard(item) {
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
  newCardPicture.addEventListener("click", function (evt) {
    fullPictureSrc.src = item.link;
    fullPictureSubtitle.textContent = item.name;
    openModal(fullPicture);
  });

  elementCardsContainer.prepend(newCard);
} */

function formProfileHandler(evt) {
  evt.preventDefault();
  profileName.textContent = formUserName.value;
  profileJob.textContent = formUserJob.value;
  closeModal(popupProfileContainer);
}

function renderLoadCard(evt) {
  evt.preventDefault();
  addCard({
    name: formPictureName.value,
    link: formPictureLink.value,
  });
  formAddPicture.reset();
  closeModal(popupPictureContainer);
}

function openModal(modal) {
  modal.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

function closeModal(modal) {
  modal.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
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

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closeModal(openedPopup);
  }
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

/* renderInitialCard(); */

initialCards.forEach((item) => {
    const card = new Card(item, "#template__element");
    const cardElement = card.generateCard();
    document.querySelector(".elements__list").prepend(cardElement);
  });
