export default class Store {
  static getAllBooks = () => {
    let book;
    if (localStorage.getItem('book') === null) {
      book = [];
    } else {
      book = JSON.parse(localStorage.getItem('book'));
    }

    return book;
  };

  static addNewBook = (bk) => {
    const book = Store.getAllBooks();
    book.push(bk);
    localStorage.setItem('book', JSON.stringify(book));
  };

  static removBook = (index) => {
    const book = Store.getAllBooks();
    book.splice(index, 1);
    localStorage.setItem('book', JSON.stringify(book));
  };
}
