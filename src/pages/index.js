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
const dataCard = { name: formPictureName.value, link: formPictureLink.value }
console.log(dataCard)
api.sendNewCard(dataCard)
.then((result) => {
  cardsList.addItem(
    createCard(dataCard)
  );
}).catch((err) => console.log(err));

 
}

let userInfo = null;

const popupProfile = new PopupWithForm("#popup-profile", (data) => {
  const newFormValues = { name: data["user-name"], about: data["user-job"] };
  api.changeUserInfo(newFormValues).then((result) => {
    userInfo.setUserInfo(newFormValues);
  }).catch((err) => console.log(err));

  popupProfile.close();
});

popupProfile.setEventListeners();

function openProfile() {
  const userData = userInfo.getUserInfo();
  formUserName.value = userData.name;
  formUserJob.value = userData.about;
  popupProfile.open();

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

api
  .getInitialCards()
  .then((cards) => {
    cardsList.renderItems(cards);
  })
  .catch((err) => console.log(err));

api
  .getUserInfo()
  .then((user) => {
    userInfo = new UserInfo({
      name: user.name,
      about: user.about,
      avatar: user.avatar,
    });
    userInfo.getUserInfo();
    userInfo.setUserInfo({
      name: user.name,
      about: user.about,
      avatar: user.avatar,
    });
  })
  .catch((err) => console.log(err));
