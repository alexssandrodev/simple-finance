class Storage {

  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  setLocalStorage(key, data) {
    const localDb = this.getLocalStorage(key) || [];
    localDb.push(data);
    localStorage.setItem(key, JSON.stringify(localDb));
  }

}

export { Storage }
