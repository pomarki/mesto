class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._profileName = document.querySelector(nameSelector);
    this._profileJob = document.querySelector(jobSelector);
  }
  getUserInfo() {
    const actualUserInfo = {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
    };
    return actualUserInfo;
  }
  setUserInfo(object) {
    this._profileName.textContent = object["user-name"];
    this._profileJob.textContent = object["user-job"];
    const newUserInfo = {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
    };
    return newUserInfo;
  }
}

export { UserInfo };
