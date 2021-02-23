const setValidation = {
	formSelector: '.popup__form',
	inputSelector: '.popup__text-field',
	submitButtonSelector: '.popup__save-button',
	inactiveButtonClass: 'popup__save-button_type_disabled',
	inputErrorClass: 'popup__text-field_type_error',
	errorClass: 'popup__input-error_type_active',
};



const showInputError = (formElement, inputElement, errorMessage, object) => {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
	inputElement.classList.add(object.inputErrorClass);
	errorElement.textContent = errorMessage;
	errorElement.classList.add(object.errorClass);
};

const hideInputError = (formElement, inputElement, object) => {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
	inputElement.classList.remove(object.inputErrorClass);
	errorElement.classList.remove(object.errorClass);
	errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
	if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage, setValidation);
	} else {
		hideInputError(formElement, inputElement, setValidation);
	}
};

const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
		return !inputElement.validity.valid;
	});
};

const toggleButtonState = (inputList, buttonElement, object) => {
	if (hasInvalidInput(inputList)) {
		buttonElement.classList.add(object.inactiveButtonClass);
		buttonElement.setAttribute('disabled', 'disabled');
	} else {
		buttonElement.classList.remove(object.inactiveButtonClass);
		buttonElement.removeAttribute('disabled');
	}
};

const setEventListeners = (formElement, object) => {
	const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
	const buttonElement = formElement.querySelector(object.submitButtonSelector);
	toggleButtonState(inputList, buttonElement, object);
	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', () => {
			checkInputValidity(formElement, inputElement);
			toggleButtonState(inputList, buttonElement, object);
		});
	});
};

const enableValidation = (object) => {
	const formList = Array.from(document.querySelectorAll(object.formSelector));

	formList.forEach((formElement) => {
		formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});
		setEventListeners(formElement, object);
	});
};

enableValidation(setValidation);
