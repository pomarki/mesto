class Api {
  constructor({ address, token, groupID }) {
    this._address = address;
    this._token = token;
    this._groupID = groupID;
  }

  getInitialCards() {
    return fetch(`${this._address}/${this._groupID}/cards`, {
      headers: {
        authorization: this._token,
      },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка ${response.status}`);
    });
  }
  getUserInfo() {
    return fetch(`${this._address}/${this._groupID}/users/me`, {
      headers: {
        authorization: this._token,
      },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка ${response.status}`);
    });
  }
  changeUserInfo(data) {
    return fetch(`${this._address}/${this._groupID}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      })
    }).then((response) =>
      response.ok
        ? response.json()
        : Promise.reject(`Ошибка!!! ${response.status}`)
    );
  }
  /* 
  addCard(data) {
        return fetch(this._address, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                user: data.user,
                message: data.message
            })
        })
            .then(response => response.ok
                ? response.json()
                : Promise.reject(`Ошибка ${response.status}`))
    } */

  /* removeCard(id) {
        return fetch(`${this._address}/messages/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
            .then(response => response.ok
                ? Promise.resolve('success')
                : Promise.reject(`Ошибка ${response.status}`))
    } */
}

export default Api;
