const setValidation = {
	formSelector: '.popup__form',
	inputSelector: '.popup__text-field',
	submitButtonSelector: '.popup__save-button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible',
};

/* console.log(document.querySelectorAll(setValidation.formSelector)); */

const showInputError = (formElement, inputElement, errorMessage) => {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
	inputElement.classList.add('popup__text-field_type_error');
	errorElement.textContent = errorMessage;
	errorElement.classList.add('popup__input-error_type_active');
	
};

const hideInputError = (formElement, inputElement) => {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
	inputElement.classList.remove('popup__text-field_type_error');
	errorElement.classList.remove('popup__input-error_type_active');
	errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
	if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage);
	} else {
		hideInputError(formElement, inputElement);
	}
};

const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
		return !inputElement.validity.valid;
	});
};

const toggleButtonState = (inputList, buttonElement) => {
	if (hasInvalidInput(inputList)) {
	
	  buttonElement.classList.add('popup__save-button_type_disabled');
	} else {
	
	  buttonElement.classList.remove('popup__save-button_type_disabled');
	}
  }; 


const setEventListeners = (formElement, inputElement) => {
	const inputList = Array.from(formElement.querySelectorAll('.popup__text-field'));
	const buttonElement = formElement.querySelector('.popup__save-button');
	toggleButtonState(inputList, buttonElement);
	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', () => {
			checkInputValidity(formElement, inputElement);
			toggleButtonState(inputList, buttonElement);
		});
	});
};

const enableValidation = () => {
	const formList = Array.from(document.querySelectorAll('.popup__form'));

	formList.forEach((formElement) => {
		formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});
		setEventListeners(formElement);
	});
};

enableValidation();




