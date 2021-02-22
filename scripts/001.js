const formUserProfile = document.querySelector('form[name=user-info]');
const inputUserName = formUserProfile.querySelector('input[name=user-name]');
const inputUserJob = formUserProfile.querySelector('input[name=user-job]');

const formPictureAdd = document.querySelector('form[name=add-picture]');
const inputPictureName = formPictureAdd.querySelector('input[name=picture-name]');
const inputPictureLink = formPictureAdd.querySelector('input[name=picture-link]');

const showInputError = (formElement, inputElement, errorMessage) => {
	inputElement.classList.add('popup__text-field_type_error');

	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

	errorElement.textContent = errorMessage;
	errorElement.classList.add('popup__input-error_type_active');
};

const hideInputError = (inputElement) => {
	inputElement.classList.remove('popup__text-field_type_error');
	errorElement.textContent = '';
};


const checkInputValidity = (formElement, inputElement) => {
	const isInputElementNotValid = !inputElement.validity.valid;
    
	const errorMessage = inputElement.validationMessage;

	if (isInputElementNotValid) {
		showInputError(formElement, inputElement, errorMessage);
	} else {
		hideInputError(formElement, inputElement, errorMessage);
	}
};

const setEventListeners = (formElement) => {
	formElement.addEventListener('submit', (event) => {
		event.preventDefault();
	});

	const inputList = Array.from(document.querySelectorAll('.popup__text-field'));

	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', (event) => {
			checkInputValidity(formElement, inputElement);
		});
	});
};

const enableValidation = () => {
	const formList = Array.from(document.querySelectorAll('.form'));

	formList.forEach((formElement) => {
		formElement.addEventListener('input', (event) => {
			checkInputValidity(formElement, inputElement);
		});
	});
};

formUserProfile.addEventListener('submit', function (evt) {
	evt.preventDefault();
});



enableValidation();
