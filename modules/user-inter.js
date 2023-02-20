import Store from './store.js';

export default class UserInf {
  static displayBook = () => {
    const bookss = Store.getAllBooks();
    bookss.forEach((bk) => {
      UserInf.addBooksList(bk);
    });
  }

  static addBooksList = (bk) => {
    const list = document.getElementById('book-List');

    const Row = document.createElement('tr');

    Row.innerHTML = `
          <td>"${bk.title}" by ${bk.author}</td>
          <td><a href="#" class="btn btn-danger btn-md delete">Remove</a></td>
          `;
    list.appendChild(Row);
  }

  static removeBook = (elm) => {
    if (elm.classList.contains('delete')) {
      elm.parentElement.parentElement.remove();
    }
  }

  static clearField = () => {
    document.querySelector('#Title').value = '';
    document.querySelector('#Author').value = '';
  }
}