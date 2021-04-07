import { formUserInfo, popupProfileContainer } from "./data.js";
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
      name: this._actualName,
      job: this._actualJob,
    };
    return actualUserInfo;
  }
  setUserInfo() {
    const _actualForm = this._popupForm._getInputValues();
    this._actualName = _actualForm["user-name"];
    this._actualJob = _actualForm["user-job"];
    const newUserInfo = { name: this._actualName, job: this._actualJob };
    return newUserInfo;
  }
}

export { UserInfo };
