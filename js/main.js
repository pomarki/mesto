let profileEditButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let profileContainer = document.querySelector(".profile");
let profileName = profileContainer.querySelector(".profile__name");
let profileJob = profileContainer.querySelector(".profile__job");
let InputName = popup.querySelector(".popup__text-field_type_name");
let InputJob = popup.querySelector(".popup__text-field_type_job");
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
  let InputName = popup.querySelector(".popup__text-field_type_name");
  let InputJob = popup.querySelector(".popup__text-field_type_job");
  profileName.textContent = InputName.value;
  profileJob.textContent = InputJob.value;
  CloseEditPopup();
}

profileEditButton.addEventListener("click", OpenEditPopup);
