import { Element } from './utils/Element.js';

const el = new Element();

const modal = el.select('.modal');
const iconClose = el.select('#close');

function closeModal() {
  modal.classList.remove('active');
}

iconClose.addEventListener('click', () => {
  closeModal();
});
