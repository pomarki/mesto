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
  elementList,
  profileInputList,
} from "./data.js";
import { Card } from "./card.js";
import { openModal, closeModal } from "./utils.js";
import { setValidation, FormValidator } from "./FormValidator.js";
import { UserInfo } from "./UserInfo.js";
import { Section } from "./Section.js";

function formProfileHandler(evt) {
  evt.preventDefault();
  profileName.textContent = formUserName.value; // вписывает на сайт имя из инпута
  profileJob.textContent = formUserJob.value; // вписывает на сайт профессию из инпута
  closeModal(popupProfileContainer);
}

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      renderCard(item.name, item.link);
    },
  },
  "#template__element"
);
cardsList.renderItems();

function renderCard(name, link) {
  const card = new Card({ name, link }, "#template__element");
  elementList.prepend(card.generateCard());
}

function renderLoadedCard(evt) {
  evt.preventDefault();
 
  const newCard = new Section(
    {
      items: [{name: formPictureName.value, link: formPictureLink.value}],
      renderer: (item) => {
        renderCard(item.name, item.link);
      },

    },
    "#template__element"
  )
  newCard.renderItems()
  
  formAddPicture.reset();
  closeModal(popupPictureContainer);
}

function openProfile() {
  openModal(popupProfileContainer);

  /* formUserName.value = profileName.textContent; // подставляет в качестве значения инпута имя со страницы
  formUserJob.value = profileJob.textContent; // подставляет в качестве значения инпута профессию со страницы */
  const UserInfoCard = new UserInfo({ formUserName, formUserJob });
  UserInfoCard.getUserInfo();

  buttonProfileSave.classList.remove("popup__save-button_type_disabled");
}
function openAddPictureForm() {
  openModal(popupPictureContainer);
  buttonPictureSave.classList.add("popup__save-button_type_disabled");
  buttonPictureSave.setAttribute("disabled", "disabled");
}

formAddPicture.addEventListener("submit", renderLoadedCard);
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

/* initialCards.forEach((item) => {
  renderCard(item.name, item.link);
}); */

const profileFormValidator = new FormValidator(setValidation, formUserInfo);
profileFormValidator.enableValidation();

const pictureFormValidator = new FormValidator(setValidation, formAddPicture);
pictureFormValidator.enableValidation();

/* const UserInfoCard = new UserInfo({ formUserName, formUserJob });
console.log(UserInfoCard.getUserInfo()); */

/* console.log(profileInputList); */
