class Storage {

  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
  }

  setLocalStorage(key, data) {
    return localStorage.setItem(key, JSON.stringify(data));
  }

}

export { Storage }
