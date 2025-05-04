import { Element } from './utils/Element.js';
import { Storage } from './database/Storage.js';
import { Launch } from './domain/entities/Launch.js';
import { Sidebar } from './components/Sidebar.js';

const el = new Element();

const modal = el.select('.modal');
const iconClose = el.select('#close');
const buttonCreateLaunch = el.select('#new');
const storage = new Storage();
const type = el.select('#type');
const title = el.select('#title');
const value = el.select('#value');
const date = el.select('#date');
const btnSave = el.select('#btn-save');

const sidebar = new Sidebar();
sidebar.init();

function closeModal() {
  modal.classList.remove('active');
}

function openModal() {
  modal.classList.add('active');
}

function uuid() {
  return Math.random().toString(36).substring(2);
}

function clearFields() {
  title.value = '';
  value.value = '';
  date.value = '';
}

function saveLaunch(e) {
  e.preventDefault();
  const launch = new Launch(uuid(), type.value, title.value, parseFloat(value.value), date.value);
  storage.setLocalStorage('launchs', launch);
  clearFields();
  closeModal();
}

iconClose.addEventListener('click', closeModal);
buttonCreateLaunch.addEventListener('click', openModal);

btnSave.addEventListener('click', saveLaunch);

