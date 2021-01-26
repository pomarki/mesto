let profileEditButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let profileContainer = document.querySelector(".profile");
let profileName = profileContainer.querySelector(".profile__info-name");
let profileJob = profileContainer.querySelector(".profile__info-job");
let InputName = popup.querySelector(".popup__name");
let InputJob = popup.querySelector(".popup__job");
let popupClose = popup.querySelector(".popup__close");

function OpenEditPopup() {
  popup.classList.add("popup_opened");
  InputName.value = profileName.textContent;
  InputJob.value = profileJob.textContent;
  popup.addEventListener("submit", formSubmitHandler);
  popupClose.addEventListener("click", CloseEditPopup);
}
function CloseEditPopup() {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  let InputName = popup.querySelector(".popup__name");
  let InputJob = popup.querySelector(".popup__job");
  profileName.textContent = InputName.value;
  profileJob.textContent = InputJob.value;
  CloseEditPopup();
}

profileEditButton.addEventListener("click", OpenEditPopup);
