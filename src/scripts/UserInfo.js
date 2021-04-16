class UserInfo {
  constructor({ name, about, avatar }) {
    this._profileName = document.querySelector(".profile__name");
    this._profileJob = document.querySelector(".profile__job");
    this._profileAvatar = document.querySelector(".profile__avatar");

    this._userName = name; // name
    this._userJob = about; // about
    this._userAvatar = avatar; // avatar
  }
  getUserInfo() {
    const actualUserInfo = {
      name: this._userName,
      about: this._userJob,
      avatar: this._userAvatar,
    };
    
    return actualUserInfo;
  }
  setUserInfo(object) {
    this._profileName.textContent = object["name"];
    this._profileJob.textContent = object["about"];
    /* this._profileAvatar.src = object["avatar"]; */
    
  }
}

export { UserInfo };
