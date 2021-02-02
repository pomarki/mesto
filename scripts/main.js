let buttonProfileEdit = document.querySelector(".profile__edit-button");
let popupWindow = document.querySelector(".popup");
let profileContainer = document.querySelector(".profile");
let profileName = profileContainer.querySelector(".profile__name");
let profileJob = profileContainer.querySelector(".profile__job");
let formUserInfo = document.querySelector("form[name=user-info]");
let formUserName = formUserInfo.querySelector("input[name=user-name]");
let formUserJob = formUserInfo.querySelector("input[name=user-job]");
let buttonPopupClose = popupWindow.querySelector(".popup__close");

function openEditPopup() {
  popupWindow.classList.add("popup_opened");
  formUserName.value = profileName.textContent;
  formUserJob.value = profileJob.textContent;
}
function closeEditPopup() {
  popupWindow.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = formUserName.value;
  profileJob.textContent = formUserJob.value;

  closeEditPopup();
}

buttonProfileEdit.addEventListener("click", openEditPopup);
formUserInfo.addEventListener("submit", formSubmitHandler);
buttonPopupClose.addEventListener("click", closeEditPopup);
