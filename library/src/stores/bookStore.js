import { action, makeAutoObservable } from "mobx";
import data from "../components/Books";

class BookStore {
  books = data;
  constructor() {
    makeAutoObservable(this, {
      addbook: action,
    });
  }
  addBook = (book) => {
    book.id = this.books[this.books.length - 1].id + 1;
    this.books.push(book);
  };
}

const bookStore = new BookStore();

export default bookStore;
