import { action, makeAutoObservable } from "mobx";
import data from "../Data/Books";

class BookStore {
  books = data;
  constructor() {
    makeAutoObservable(this, {
      addbook: action,
      returnBook: action,
    });
  }
  addBook = (book) => {
    book.id = this.books[this.books.length - 1].id + 1;
    this.books.push(book);
  };
  returnBook = (bookId) => {
    console.log(bookId);
    this.books = this.books.map((updatedBook) =>
      updatedBook.id === bookId
        ? { ...updatedBook, available: !updatedBook.available }
        : updatedBook
    );
  };
}

const bookStore = new BookStore();

export default bookStore;
