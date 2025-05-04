class Launch {

  launchId;
  type;
  title;
  value;
  date;

  constructor(launchId, type, title, value, date) {
    if (title === '') {
      throw new Error('O titulo e obrigatorio.');
    }
    if (value < 0 || value === '') {
      throw new Error('O valor e obrigatorio.');
    }
    this.launchId = launchId;
    this.type = type;
    this.title = title;
    this.value = value;
    this.date = date;
  }

}

export { Launch }
