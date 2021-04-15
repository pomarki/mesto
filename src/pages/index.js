import {
  buttonProfileEdit,
  formUserInfo,
  formUserName,
  formUserJob,
  formAddPicture,
  formPictureName,
  formPictureLink,
  buttonPictureAdd,
  initialCards,
  elementList,
} from "../scripts/data.js";
import { Card } from "../scripts/card.js";
import { setValidation, FormValidator } from "../scripts/FormValidator.js";
import { UserInfo } from "../scripts/UserInfo.js";
import { Section } from "../scripts/Section.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import Api from "../scripts/Api.js";

const api = new Api({
  address: "https://mesto.nomoreparties.co/v1",
  token: "a871f903-a7ec-46a6-99c3-83953182d0a9",
  groupID: "cohort-22",
});

const popupFullPicture = new PopupWithImage("#popup-full-picture");
popupFullPicture.setEventListeners();

function createCard(item) {
  const card = new Card(item, "#template__element", () => {
    popupFullPicture.open(item.link, item.name);
  });
  return card.generateCard();
}

/* const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardsList.addItem(cardElement);
    },
  },
  elementList
); */

const cardsList = new Section(
  {
      renderer: (item) => {
      const cardElement = createCard(item);
      cardsList.addItem(cardElement);
    },
  },
  elementList
);



/* cardsList.renderItems(); */

function renderLoadedCard() {
  cardsList.addItem(
    createCard({ name: formPictureName.value, link: formPictureLink.value })
  );
}

const userInfo = new UserInfo(".profile__name", ".profile__job");

const popupProfile = new PopupWithForm("#popup-profile", (newFormValues) => {
  userInfo.setUserInfo(newFormValues);
  popupProfile.close();
});

popupProfile.setEventListeners();

function openProfile() {
  const userData = userInfo.getUserInfo();
  popupProfile.open();
  formUserName.value = userData.name;
  formUserJob.value = userData.job;
  profileFormValidator.enableSubmitButton();
}

const popupAddPicture = new PopupWithForm(
  "#popup-add-picture",
  renderLoadedCard
);

popupAddPicture.setEventListeners();

function openAddPictureForm() {
  popupAddPicture.open();
  pictureFormValidator.disableSubmitButton();
}

buttonPictureAdd.addEventListener("click", openAddPictureForm);
buttonProfileEdit.addEventListener("click", openProfile);

const profileFormValidator = new FormValidator(setValidation, formUserInfo);
profileFormValidator.enableValidation();

const pictureFormValidator = new FormValidator(setValidation, formAddPicture);
pictureFormValidator.enableValidation();

api.getCards()
.then((cards) => {
  cardsList.renderItems(cards);
});
