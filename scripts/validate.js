// объект со всеми валидационными настройками
const setValidation = {
	formSelector: '.popup__form', // всплывающие окна
	inputSelector: '.popup__text-field', // поля ввода
	submitButtonSelector: '.popup__save-button', // кнопки сохранения
	inactiveButtonClass: 'popup__save-button_type_disabled', // неактивная кнопка сохранения
	inputErrorClass: 'popup__text-field_type_error', // красная рамка вокруг невалидного инпута
	errorClass: 'popup__input-error_type_active', // отображение ошибки под невалидным полем
};


const showInputError = (formElement, inputElement, errorMessage, object) => {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`); // сообщение об ошибке
	inputElement.classList.add(object.inputErrorClass); // добавляет рамку вокруг инпута
	errorElement.textContent = errorMessage; // вставляет сообщение об ошибке
	errorElement.classList.add(object.errorClass); // добавляет сообщение об ошибке в форму
	
};

const hideInputError = (formElement, inputElement, object) => {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`); // удаляет красноту, добавленную showInputError
	inputElement.classList.remove(object.inputErrorClass);
	errorElement.classList.remove(object.errorClass);
	errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
	if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage, setValidation); // если поле невалидно -> добавить красноту
	} else {
		hideInputError(formElement, inputElement, setValidation); // если поле валидно -> спрятать красноту
	}
};


const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => { // проверка наличия хоть одного невалидного инпута в форме
		return !inputElement.validity.valid;
	});
};

const toggleButtonState = (inputList, buttonElement, object) => {
	if (hasInvalidInput(inputList)) {
		buttonElement.classList.add(object.inactiveButtonClass); // блокировка кнопки при невалидном поле
		buttonElement.setAttribute('disabled', 'disabled');
	} else {
		buttonElement.classList.remove(object.inactiveButtonClass); // разблокировка кнопки при валидном поле
		buttonElement.removeAttribute('disabled');
	}
};

const setEventListeners = (formElement, object) => {
	const inputList = Array.from(formElement.querySelectorAll(object.inputSelector)); // массив из всех полей ввода в форме **
	const buttonElement = formElement.querySelector(object.submitButtonSelector); // кнопка сабмита в форме
	toggleButtonState(inputList, buttonElement, object); // блокировка-разблокировка кнопки
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
		setEventListeners(formElement, object); // formElement -> та форма, которая в данный момент валидируется object -> объект с
	});
};

enableValidation(setValidation);
