const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popupWindow = document.querySelectorAll('.popup');
const profileContainer = document.querySelector('.profile');

const profileName = profileContainer.querySelector('.profile__name');
const profileJob = profileContainer.querySelector('.profile__job');

const popupProfileContainer = document.querySelector('#popup-profile');
const formUserInfo = document.querySelector('form[name=user-info]');
const formUserName = formUserInfo.querySelector('input[name=user-name]');
const formUserJob = formUserInfo.querySelector('input[name=user-job]'); //
const buttonProfileClose = popupProfileContainer.querySelector('.popup__close-button');

const popupPictureContainer = document.querySelector('#popup-add-picture');
const formAddPicture = document.querySelector('form[name=add-picture]');
const formPictureName = formAddPicture.querySelector('input[name=picture-name]');
const formPictureLink = formAddPicture.querySelector('input[name=picture-link]');
const buttonPictureAdd = profileContainer.querySelector('.profile__add-button');
const buttonAddClose = popupPictureContainer.querySelector('.popup__close-button');

const fullPicture = document.querySelector('#popup-full-picture');
const fullPictureClose = fullPicture.querySelector('.popup__close-button');
const fullPictureSrc = fullPicture.querySelector('.popup__picture-img');
const fullPictureSubtitle = fullPicture.querySelector('.popup__picture-subtitle');

const elementCardsContainer = document.querySelector('.elements__list');
const elementCardTemplate = document.querySelector('#template__element');

const popupContainer = document.querySelectorAll('.popup__container');



const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
	},
];

function renderInitialCard() {
	initialCards.map(addCard);
}

function addCard(item) {
	const newCard = elementCardTemplate.content.cloneNode(true);
	const newCardInfo = newCard.querySelector('.element__info-place');
	const newCardPicture = newCard.querySelector('.element__img');
	newCardInfo.textContent = item.name;
	newCardPicture.src = item.link;
	newCardPicture.alt = item.name;
	newCard.querySelector('.element__info-heart').addEventListener('click', function (evt) {
		evt.target.classList.toggle('element__info-heart_type_disabled');
	});
	newCard.querySelector('.element__trash').addEventListener('click', function (evt) {
		evt.target.closest('.elements__item').remove();
	});
	newCard.querySelector('.element__img').addEventListener('click', function (evt) {
		fullPictureSrc.src = evt.target.src;
		fullPictureSubtitle.textContent = evt.target.alt;
		openModal(fullPicture);
	});

	elementCardsContainer.prepend(newCard);
}

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
	modal.classList.add('popup_opened');
	document.addEventListener(
		'keydown',
		(closePopupByEsc = (evt) => {
			if (evt.keyCode === 27) {
				closeModal(modal);
			}
		})
	);
}

function closeModal(modal) {
	modal.classList.remove('popup_opened');
	document.removeEventListener('keydown', closePopupByEsc);
}

function openProfile() {
	openModal(popupProfileContainer);
	formUserName.value = profileName.textContent;
	formUserJob.value = profileJob.textContent;
}

formAddPicture.addEventListener('submit', renderLoadCard);
formUserInfo.addEventListener('submit', formProfileHandler);
buttonAddClose.addEventListener('click', function (evt) {
	closeModal(popupPictureContainer);
});
buttonPictureAdd.addEventListener('click', function (evt) {
	openModal(popupPictureContainer);
});

buttonProfileEdit.addEventListener('click', openProfile);


buttonProfileClose.addEventListener('click', function (evt) {
	closeModal(popupProfileContainer);
});

fullPictureClose.addEventListener('click', function (evt) {
	closeModal(fullPicture);
});

document.addEventListener('click', function (evt) {
	if (evt.target.classList.contains('popup')) {
		const actualOverlay = evt.target;
		closeModal(actualOverlay);
	}
});


renderInitialCard();
