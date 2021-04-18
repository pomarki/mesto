class UserInfo {
  constructor({ name, about, avatar, id }) {
    this._profileName = document.querySelector(".profile__name");
    this._profileJob = document.querySelector(".profile__job");
    this._profileAvatar = document.querySelector(".profile__avatar");

    this._userName = name; // name
    this._userJob = about; // about
    this._userAvatar = avatar; // ссылка на avatar
    this._id = id; // Id
  }
  getUserInfo() {
    // возвращает инфу о пользователе, пришедшую с сервера
    const actualUserInfo = {
      name: this._userName,
      about: this._userJob,
      avatar: this._userAvatar,
      id: this._id,
    };

    return actualUserInfo;
  }
  setUserInfo(object) {
    // вписывает инфу о пользователе на страницу
    this._profileName.textContent = object["name"];
    this._profileJob.textContent = object["about"];
    this._profileAvatar.src = object["avatar"];
    this._id = object["_id"];
  }
  upgrateUserInfo(object) {
    this._userName  = object.name;
    this._userJob = object.about;
    this._userAvatar = object.avatar;
    this._id = object.id;
  }
}

export { UserInfo };
