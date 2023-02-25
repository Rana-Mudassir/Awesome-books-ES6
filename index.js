import Book from './modules/book.js';
import UserInf from './modules/user-inter.js';
import Store from './modules/store.js';
import { show } from './modules/nav.js';
import { DateTime } from './modules/luxon.js';

document.addEventListener('DOMContentLoaded', UserInf.displayBook);

document.querySelector('#bookForm1').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#Title').value;
  const author = document.querySelector('#Author').value;

  const newBook = new Book(title, author);

  UserInf.addBooksList(newBook);

  Store.addNewBook(newBook);

  UserInf.clearField();
});

document.querySelector('#book-List').addEventListener('click', (e) => {
  UserInf.removeBook(e.target);

  Store.removBook(e.target.parentElement.previousElementSibling.textContent);
});

const localtime = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);

const time = document.getElementById('show-date');

time.textContent = localtime;

window.show = show;
