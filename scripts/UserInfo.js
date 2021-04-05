import {
  formUserInfo,
  formUserName,
  formUserJob,
  buttonProfileSave,
  profileName,
  profileJob,
} from "./data.js";

class UserInfo {
  constructor({ name, job }) {
    this._name = name; // селектор имени пользователя на странице
    this._job = job; // селектор профессии пользователя на странице
  }
  getUserInfo() {
    const actualUserInfo = { // - данные пользователя на странице ставим в инпуты
      name: profileName.textContent,
      job: profileJob.textContent,
    };
    return actualUserInfo;
  }
  setUserInfo() {
    profileName.textContent = this._name.value;
    profileJob.textContent = this._job.value;
    const newUserInfo = { name: this._name.value, job: this._job.value };
    return newUserInfo;
  } // принимает новые данные пользователя и добавляет их на страницу
}

export { UserInfo };
