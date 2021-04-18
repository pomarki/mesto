import {
  buttonProfileEdit,
  formUserInfo,
  formUserName,
  formUserJob,
  formAddPicture,
  formPictureName,
  formPictureLink,
  buttonPictureAdd,
  elementList,
  buttonPopupConfirm,
  buttonChangeAvatar,
  formChangeAvatar,
} from "../scripts/data.js";
import { Card } from "../scripts/card.js";
import { setValidation, FormValidator } from "../scripts/FormValidator.js";
import { UserInfo } from "../scripts/UserInfo.js";
import { Section } from "../scripts/Section.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import Api from "../scripts/Api.js";
import { Popup } from "../scripts/Popup.js";

const api = new Api({
  address: "https://mesto.nomoreparties.co/v1",
  token: "a871f903-a7ec-46a6-99c3-83953182d0a9",
  groupID: "cohort-22",
});

const popupFullPicture = new PopupWithImage("#popup-full-picture");
popupFullPicture.setEventListeners();

function createCard(item) {
  const card = new Card(
    item,
    "#template__element",
    () => {
      popupFullPicture.open(item.link, item.name); // handleCardClick
    },
    () => {
      // handleTrashClick
      popupConfirm.open();
      buttonPopupConfirm.addEventListener("click", () => {
        api
          .removeCard(card.getCardId())
          .then(() => {
            card.trashIconClick();
            popupConfirm.close();
          })
          .catch((err) => console.log(err));
      });
    },
    () => {
      // handleLikeClick
      if (card.checkLike()) {
        api
          .dislikeCard(card.getCardId())
          .then((result) => {
            card.heartIconClick(result.likes.length);
          })
          .catch((err) => console.log(err));
      } else {
        api
          .likeCard(card.getCardId())
          .then((result) => {
            card.heartIconClick(result.likes.length);
          })
          .catch((err) => console.log(err));
      }
    },
    "e6c92694e7b7e6c22ce22a70"
  );

  return card.generateCard();
}

const popupConfirm = new Popup("#popup-confirm");
popupConfirm.setEventListeners();

const cardsList = new Section(
  {
    renderer: (item) => {
      const cardElement = createCard(item);
      cardsList.addItem(cardElement);
    },
  },
  elementList
);

function toggleButtonStatus(buttonId, status) {
  status
    ? (document.querySelector(buttonId).textContent = "Coхранение...")
    : (document.querySelector(buttonId).textContent = "Coхранить");
}

function renderLoadedCard() {
  toggleButtonStatus("#picture-button", true);

  const dataCard = { name: formPictureName.value, link: formPictureLink.value };
  api
    .sendNewCard(dataCard)
    .then((myNewCard) => {
      cardsList.addItem(createCard(myNewCard));

      toggleButtonStatus("#picture-button", false);
      popupAddPicture.close();
    })
    .catch((err) => console.log(err));
}

let userInfo = null;

const popupProfile = new PopupWithForm("#popup-profile", (data) => {
  toggleButtonStatus("#profile-button", true);
  const newFormValues = {
    name: data["user-name"],
    about: data["user-job"],
  };
  api
    .changeUserInfo(newFormValues)
    .then((upgUserInfo) => {
      userInfo.upgrateUserInfo(upgUserInfo);
      userInfo.setUserInfo(upgUserInfo);
      toggleButtonStatus("#profile-button", false);
      popupProfile.close();
    })
    .catch((err) => console.log(err));
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

const changeAvatarForm = new PopupWithForm("#popup-avatar-form", (avatar) => {
  toggleButtonStatus("#avatar-buttom", true);
  api
    .sendNewAvatar(avatar["avatar-link"])
    .then(() => {
      document.querySelector(".profile__avatar").src = avatar["avatar-link"];
      changeAvatarForm.close();

      toggleButtonStatus("#avatar-buttom", false);
    })
    .catch((err) => console.log(err));
});

function openAvatarForm() {
  changeAvatarForm.open();
  avatarFormValidator.disableSubmitButton();
}

changeAvatarForm.setEventListeners();

buttonChangeAvatar.addEventListener("click", openAvatarForm);
buttonPictureAdd.addEventListener("click", openAddPictureForm);
buttonProfileEdit.addEventListener("click", openProfile);

const profileFormValidator = new FormValidator(setValidation, formUserInfo);
profileFormValidator.enableValidation();

const pictureFormValidator = new FormValidator(setValidation, formAddPicture);
pictureFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(setValidation, formChangeAvatar);
avatarFormValidator.enableValidation();

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userInfo = new UserInfo({
      name: userData.name,
      about: userData.about,
      avatar: userData.avatar,
      id: userData._id,
    });

    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
      avatar: userData.avatar,
      id: userData._id,
    });

    cardsList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
  });
