import {
  formUserInfo,
  formUserName,
  formUserJob,
  buttonProfileSave,
  profileName,
  profileJob,
  popupProfileContainer,
} from "./data.js";
import { PopupWithForm } from "./PopupWithForm.js";

class UserInfo {
  constructor(object) {
    this._actualName = object.name.textContent;
    this._actualJob = object.job.textContent;
    this._inputName = formUserInfo.querySelector("#user-name").value;
    this._inputJob = formUserInfo.querySelector("#user-job").value;
    this._popupForm = new PopupWithForm(popupProfileContainer);
  }
  getUserInfo() {
    const actualUserInfo = {
      // - данные пользователя на странице ставим в инпуты
      name: this._actualName,
      job: this._actualJob,
    };
    return actualUserInfo;
  }
  setUserInfo() {
    const _actualForm = this._popupForm._getInputValues()
    this._actualName = _actualForm["user-name"];
    this._actualJob = _actualForm["user-job"];
    const newUserInfo = {name: this._actualName, job: this._actualJob};
    return newUserInfo;
  } // принимает новые данные пользователя и добавляет их на страницу
}

export { UserInfo };
