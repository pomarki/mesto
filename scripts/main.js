
const elementCardsContainer = document.querySelector('.elements__list');
const elementCard = document.querySelector('#template__element');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function renderCard() {
  const htmlCards = initialCards.map(getCard);
  elementCardsContainer.append(...htmlCards);
}

function getCard(item) {
  const newCard = elementCard.content.cloneNode(true);
  const newCardInfo = newCard.querySelector('.element__info-place');
  const newCardPicture = newCard.querySelector('.element__img');
  newCardInfo.textContent = item.name;
  newCardPicture.src = item.link;
  newCardPicture.alt = item.name;
  return newCard;
}

renderCard();
