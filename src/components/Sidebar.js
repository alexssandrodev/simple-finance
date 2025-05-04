import { Element } from '../utils/Element.js';

class Sidebar {

  sidebar;
  element;

  constructor() {
    this.element = new Element();
  }

  init() {
    this.sidebar = this.element.select('#side');
    const p = this.element.create('p');
    p.textContent = 'Teste sidebar';
    this.sidebar.appendChild(p);
  }  

}

export { Sidebar }
