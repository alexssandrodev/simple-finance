class Element {

  create(element, className) {
    const el = document.createElement(element);
    el.classList.add(className);
    return el;
  }

  select(element) {
    return document.querySelector(element);
  }

  selectAll(elements) {
    return document.querySelectorAll(elements);
  }

}

export { Element }
