class Api {
  constructor(options) {
    // тело конструктора
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/me`, {  //было /users/me
      headers: this.getHeaders(),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this.getHeaders(),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.getHeaders(),
    }).then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: `${isLiked ? 'PUT' : 'DELETE'}`,
      headers: this.getHeaders(),
    }).then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  postCard(newCard) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({
        name: newCard.name,
        link: newCard.link
      })
    }).then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  //up avatar
  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.getHeaders(),
      body: JSON.stringify(
        { avatar: avatar.url }
      )
    }).then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  //up profile
  updateProfile(userData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.getHeaders(),
      body: JSON.stringify({
        name: userData.name,
        about: userData.about
      })
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getHeaders(){
    const token = localStorage.getItem('token'); // тут мы получаем токен из localStorage
    return {
      ...this.headers,
      'Authorization': `Bearer ${token}`,
    }
  }
}

const api = new Api({
  baseUrl: 'https://localhost:3000',
  headers: {
    //authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
});

// const api = new Api({
//   baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-14',
//   headers: {
//     authorization: '759b7868-e5b7-4679-b3b4-6ab62cbc0a7b',
//     'Content-Type': 'application/json'
//   }
// });

export { api };