import {
  formUserInfo,
  formUserName,
  formUserJob,
  buttonProfileSave,
  profileName,
  profileJob,
} from "./data.js";

class UserInfo {
  constructor(object) {
    this._actualName = object.name.textContent;
    this._actualJob = object.job.textContent;
    this._inputName = formUserInfo.querySelector("#user-name").value;
    this._inputJob = formUserInfo.querySelector("#user-job").value;
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
    this._actualName = this._inputName;
    this._actualJob = this._inputJob;
    const newUserInfo = {name: this._actualName, job: this._actualJob};
    return newUserInfo;
  } // принимает новые данные пользователя и добавляет их на страницу
}

export { UserInfo };
