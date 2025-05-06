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
const tableLaunchs = el.select('.table-launchs>tbody');

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


function getLaunchs() {
  const launchs = storage.getLocalStorage('launchs');
  return launchs;
}

function loadLaunchs() {
  for (const launch of getLaunchs()) {
    const row = el.create('tr');
    row.innerHTML = `
      <td>${launch.type}</td>
      <td>${launch.title}</td>
      <td>${launch.value}</td>
      <td>${launch.date}</td>
      <td>
        <svg id='${launch.launchId}' class='btn-trash' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg>
      </td>
    `;
    tableLaunchs.appendChild(row);
  }
}

loadLaunchs();

function deleteLaunch(index) {
  const localDb = storage.getLocalStorage('launchs');
  const item = localDb.splice(index, 1);
  storage.setLocalStorage('launchs', localDb);
}

const buttonsTrash = el.selectAll('.btn-trash');
buttonsTrash.forEach((trash, index) => {
  trash.addEventListener('click', () => {
    deleteLaunch(index);
    clearRows();
    loadLaunchs();
    window.location.reload();
  });
});

function clearRows() {
  const rows = el.selectAll('.table-launchs>tbody tr');
  for (const row of rows) {
    row.parentNode.removeChild(row);
  }
}

function saveLaunch(e) {
  e.preventDefault();
  const localDb = storage.getLocalStorage('launchs');
  const launch = new Launch(uuid(), type.value, title.value, parseFloat(value.value), date.value);
  localDb.push(launch);
  storage.setLocalStorage('launchs', localDb);
  clearFields();
  clearRows();
  closeModal();
  loadLaunchs();
}

iconClose.addEventListener('click', closeModal);
buttonCreateLaunch.addEventListener('click', openModal);

btnSave.addEventListener('click', saveLaunch);

