import { action, makeAutoObservable } from "mobx";
import data from "../Data/Books";
import members from "../Data/Members";

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
    book.available = true;
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

  updateBorrow = (memberID, BookId) => {
    console.log("==================", memberID);
    this.books = this.books.map((book) =>
      book.id === BookId
        ? { ...book, borrowedBy: [...book.borrowedBy, memberID] }
        : book
    );
  };
}

const bookStore = new BookStore();

export default bookStore;
